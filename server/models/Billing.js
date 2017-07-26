/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('billing', {
		billingId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Billing_ID'
		},
		usersUserId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Users',
				key: 'User_ID'
			},
			field: 'Users_User_ID'
		},
		companyName: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Company_Name'
		},
		billingAddress: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Billing_Address'
		},
		billingPlan: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Billing_Plan'
		}
	}, {
		tableName: 'Billing'
	});
};
