const Member = require('../models/member.js');

const addMember = (data, callback) => {
  Member.create(data).then((createdMember, err)=> {
    callback(createdMember);
  })
};

const deleteMember = (data, callback) => {
  Member.destroy({
    where: {id: data.id}
  }).then((deletedMember)=> {
    callback(deletedMember)
  })
};

module.exports = {
  addMember,
  deleteMember
}