const { User } = require("../../db");

const activateUserId = async (id) => {
	const user = await User.findByPk(id);
	const result = await user.update(
		{ active: !user.active },
		{
			where: {
				id: id,
			},
		}
	);
	return result;
};

const editUserId = async (id, data) => {
	const { name, email, image } = data;
	const user = await User.findByPk(id);
	const result = await user.update(
		{
			name,
			email,
			image,
		},
		{
			where: {
				id: id,
			},
		}
	);
	return result;
};

module.exports = { activateUserId, editUserId };
