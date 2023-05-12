const { User } = require("../../db");
const { Op } = require("sequelize");

const getController = async (req) => {
	const { email } = req.query;
	if (email) {
		let result = await User.findAll({
			where: {
				email,
			},
		});
		return result;
	} else {
		let result = await User.findAll();
		return result;
	}
};

module.exports = getController;
