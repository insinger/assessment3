/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('users', {
		userId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'User_ID'
		},
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
			field: 'First_Name'
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
			field: 'Last_Name'
		},
		isTc: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_TC'
		},
		isCc: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_CC'
		},
		isS: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_S'
		},
		isB: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_B'
		},
		isAdmin: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_ADMIN'
		},
		email: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Email'
		},
		mobile: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Mobile'
		},
		jobTitle: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Job_Title'
		},
		department: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Department'
		},
		billingId: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Billing_ID'
		},
		picturePath: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Picture_Path'
		},
		pictureBlob: {
			type: Sequelize.BLOB,
			allowNull: true,
			field: 'Picture_Blob'
		},
		expertise: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Expertise'
		},
		isActive: {
			type: Sequelize.INTEGER(4),
			allowNull: false,
			field: 'Is_Active'
		},
		passwordHash: {
			type: Sequelize.STRING,
			allowNull: false,
			field: 'Password_Hash'
		}
	}, {
		tableName: 'Users'
	});
};
