/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('lessonsSnippets', {
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
		snippetsSnippetId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Snippets',
				key: 'Snippet_ID'
			},
			field: 'Snippets_Snippet_ID'
		},
		order: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Order'
		},
		isEnabled: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Enabled'
		}
	}, {
		tableName: 'Lessons_Snippets'
	});
};
