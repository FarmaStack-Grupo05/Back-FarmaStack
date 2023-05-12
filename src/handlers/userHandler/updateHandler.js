const {
	activateUserId,
	editUserId,
} = require("../../controllers/userController/userUpdate");

const activateUser = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await activateUserId(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const editUser = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await editUserId(id, req.body);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { activateUser, editUser };
