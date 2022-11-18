const {user,role} = require("../../database/models");

const userGetByIdServices = async (id) => {
    const findUser = await user.findByPk(id, {
        include: [
            {
              attributes: ['name'],
              model: role,
            }
        ]
    });
    return findUser
}

module.exports = {
    userGetByIdServices
}