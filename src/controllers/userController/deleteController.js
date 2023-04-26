const {User} = require("../../db")

const deleteController = async (id) => {
    const user = await User.destroy({
        where : {id:id}
    })
    return ("Successfully erased!")
}


module.exports = deleteController; 