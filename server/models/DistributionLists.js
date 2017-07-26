/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('distributionLists', {
		distributionListId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'DistributionList_ID'
		},
		name: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Name'
		},
		billingBillingId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
   		references: {
   			model: 'Billing',
   			key: 'Billing_ID'
   		},
			field: 'Billing_Billing_ID'
		}
	}, {
		tableName: 'DistributionLists'
	});
};
