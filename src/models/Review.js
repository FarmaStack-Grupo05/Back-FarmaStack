const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Rewview",
        {
            rating: {
                type: DataTypes.ENUM("One", "Two", "Three", "Four", "Five"),
                allowNull: false,
              },
        }
    )
}