module.exports = function(sequelize, DataTypes) {
	var Bill = sequelize.define("Bill", {
		amount: {
			type: DataTypes.DECIMAL(6, 2),
			allowNull: false
		},
		// billDate: {
		// 	type: DataTypes.DATEONLY,
		// 	allowNull: false
		// },
		dueDate: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Bill.associate = function(models) {
		Bill.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});

		Bill.belongsTo(models.Util, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Bill;
};
