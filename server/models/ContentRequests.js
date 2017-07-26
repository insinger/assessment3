/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('contentRequests', {
		requestId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Request_ID'
		},
		requestDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'Request_Date'
		},
		requestText: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Request_Text'
		},
		requestDueDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'Request_DueDate'
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
		lessonsLessonId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Lessons',
				key: 'Lesson_ID'
			},
			field: 'Lessons_Lesson_ID'
		},
		contentSupplied: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Content_Supplied'
		}
	}, {
		tableName: 'ContentRequests'
	});
};
