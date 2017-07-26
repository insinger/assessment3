/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('distributionListUsers', {
		usersUserId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Users',
				key: 'User_ID'
			},
			field: 'Users_User_ID'
		},
		distributionListsDistributionListId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'DistributionLists',
				key: 'DistributionList_ID'
			},
			field: 'DistributionLists_DistributionList_ID'
		}
	}, {
		tableName: 'DistributionList_Users'
	});
};
