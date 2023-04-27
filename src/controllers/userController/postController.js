const {User} = require("../../db")

const postControl = async (user)  =>{
    const result = await User.create(user)
    return result
}

module.exports = postControl; 