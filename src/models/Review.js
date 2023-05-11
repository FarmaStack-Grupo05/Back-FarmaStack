const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Review",
        {
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
              }
        }
    )
}