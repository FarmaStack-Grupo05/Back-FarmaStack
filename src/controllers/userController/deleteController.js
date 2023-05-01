const {User} = require("../../db")

const deleteController = async (id) => {
    const user = await User.findByPk(id)
    if (User.active === false){
        const activate = await User.update({active: true}, {where :{id}})
        return "User was activated"
    }else {
        const desactivate = await User.update({active: false}, {where : {id}})
        return "User was desactivate"
    }
}


module.exports = deleteController; 