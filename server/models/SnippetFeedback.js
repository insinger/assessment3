/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('snippetFeedback', {
		snippetFeedbackId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'SnippetFeedback_ID'
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
		usersUserId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Users',
				key: 'User_ID'
			},
			field: 'Users_User_ID'
		},
		snippetsSnippetId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Snippets',
				key: 'Snippet_ID'
			},
			field: 'Snippets_Snippet_ID'
		},
		rating: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Rating'
		},
		comment: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Comment'
		},
		timeSpent: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Time_Spent'
		}
	}, {
		tableName: 'SnippetFeedback'
	});
};
