/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('lessons', {
		lessonId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Lesson_ID'
		},
		category: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Category'
		},
		billingBillingId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Billing',
				key: 'Billing_ID'
			},
			field: 'Billing_Billing_ID'
		},
		lessonTitle: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Lesson_Title'
		},
		lessonSubtitle: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Lesson_Subtitle'
		},
		publishDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'Publish_Date'
		},
		isBuilding: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Building'
		},
		isBuilt: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Built'
		},
		isDeployed: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Deployed'
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Description'
		}
	}, {
		tableName: 'Lessons'
	});
};
