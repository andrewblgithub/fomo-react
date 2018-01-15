const Group = require('../models/group.js');
const Member = require('../models/member.js');

const createGroup = (data, callback) => {
  Group.create(data).then((createdGroup, err)=> {
    Member.create({
      user_id: createdGroup.user_id,
      group_id: createdGroup.id
    }).then((createdMember)=> {
      callback(createdGroup);
    })
  })
};

const updateGroup = (data, callback) => {
  Group.update(data, {
    where: {id: data.id}
  }).then((updatedUser)=> {
    callback(updatedUser);
  })
};

const deleteGroup = () => {
  // only group creater can delete group if no other members

  // Group.destroy({
  //   where: {id: data.id}
  // }).then((deletedUser)=> {
  //   callback(deletedUser)
  // })
};

// const getGroup = (input, callback) => {
//   Group.findOne({
//     where: {id: input}
//   }).then((group)=> {
//     callback(group);
//   })
// };

// finds user memberships then finds associated groups
// replace with more efficient join table
const getUserGroups = (input, callback) => {
  Member.findAll({
    where: {
      user_id: input
    }
  }).then((memberships)=> {
    let group_ids = memberships.map((member)=> {
      return member.group_id;
    })
    Group.findAll({
      where: {id: group_ids}
    }).then((groups)=> {
      callback(groups);
    })
  })
};

// const getPublicGroups = (callback) => {
//   Group.findAll({
//     where: {private: false}
//   }).then((groups)=> {
//     callback(groups);
//   })
// };

module.exports = {
  createGroup,
  updateGroup,
  deleteGroup,
  getUserGroups,
}