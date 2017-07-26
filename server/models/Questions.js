/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('questions', {
		questionId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Question_ID'
		},
		questionText: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Question_Text'
		},
		option1: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Option1'
		},
		option2: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Option2'
		},
		option3: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Option3'
		},
		option4: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Option4'
		},
		correctAnswerNumber: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Correct_AnswerNumber'
		},
		snippetsSnippetId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Snippets',
				key: 'Snippet_ID'
			},
			field: 'Snippets_Snippet_ID'
		}
	}, {
		tableName: 'Questions'
	});
};
