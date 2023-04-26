const {User} = require("../../db")

const getIdUser = async (id) =>{
    const user = await User.findByPk(id)
    return user
}

module.exports = getIdUser; 