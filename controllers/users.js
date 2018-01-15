const User = require('../models/user.js');
const Member = require('../models/member.js');
const bcrypt = require('bcrypt');

const createUser = (data, callback) => {
  getUser(data.email, (user)=> {
    if (!user) {
      hashPassword(data.password, (hashedPassword)=> {
        data.password = hashedPassword
        User.create(data).then((createdUser)=> {
          callback(createdUser);
        })
      })
    } else {
      callback('user already exists');
    }
  }, true)
};

const updateUser = (data, callback) => {
  // hash password if updated
  if (data.password) {
    hashPassword(data.password, (hashedPassword)=> {
      data.password = hashedPassword
      User.update(data, {
        where: {email: data.email}
      }).then((updatedUser)=> {
        callback(updatedUser);
      })
    })
  } else {
    User.update(data, {
      where: {email: data.email}
    }).then((updatedUser)=> {
      callback(updatedUser);
    })
  }
};

const deleteUser = (data, callback) => {
  User.destroy({
    where: {email: data.email}
  }).then((deletedUser)=> {
    callback(deletedUser)
  })
};

const getUser = (input, callback, findByEmail) => {
  let param = {
    where: {id: input}
  };
  if (findByEmail) {
    param = {
      where: {email: input}
    };
  }
  User.findOne(param).then((user) => {
    callback(user);
  })
};

const getAllUsers = (callback) => {
  User.findAll().then((users)=> {
    callback(users);
  })
};

const getGroupUsers = (input, callback) => {
  Member.findAll({
    where: {
      group_id: input
    }
  }).then((memberships)=> {
    let user_ids = memberships.map((member)=> {
      return member.user_id;
    })
    User.findAll({
      where: {id: user_ids}
    }).then((users)=> {
      callback(users);
    })
  })
}

const hashPassword = (plainTextPassword, callback) => {
  bcrypt.genSalt(12, (err, salt)=> {
    bcrypt.hash(plainTextPassword, salt, (err, hash)=> {
      if (err) {
        throw err;
      }
      callback(hash);
    })
  })
};

const comparePassword = (email, plainTextPassword, callback) => {
  getUser(email, (user)=> {
    if (user) {
      bcrypt.compare(plainTextPassword, user.password, (err, result)=> {
        if (result) {
          // pass matches - send user info
          user.password = null;
          callback(user);
        } else {
          callback('Password does not match!')
        }
      })
    } else {
      callback('User does not exist!')
    }
  }, true);
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getGroupUsers,
  comparePassword
}