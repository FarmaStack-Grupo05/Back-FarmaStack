const { User } = require("../../db");

const postControl = async (user) => {
	const existingUser = await User.findOne({
		where: {
			email: user.email,
		},
	});
	if (existingUser) {
		return existingUser;
	} else {
		const result = await User.create(user);
		return result;
	}
};

module.exports = postControl;
