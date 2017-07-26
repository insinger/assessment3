/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('lessonFeedback', {
		completed: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'Completed'
		},
		lessonsLessonId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Lessons',
				key: 'Lesson_ID'
			},
			field: 'Lessons_Lesson_ID'
		},
		usersUserId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Users',
				key: 'User_ID'
			},
			field: 'Users_User_ID'
		}
	}, {
		tableName: 'LessonFeedback'
	});
};
