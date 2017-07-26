/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	return sequelize.define('snippets', {
		snippetId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Snippet_ID'
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
		snippetTitle: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Snippet_Title'
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Description'
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
		billingBillingId: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Billing',
				key: 'Billing_ID'
			},
			field: 'Billing_Billing_ID'
		},
		snippetRefOrPath: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Snippet_RefOrPath'
		},
		isVideo: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Video'
		},
		isAudio: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Audio'
		},
		isImage: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Image'
		},
		isQuestion: {
			type: Sequelize.INTEGER(4),
			allowNull: true,
			field: 'Is_Question'
		},
		duration: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			field: 'Duration'
		}
	}, {
		tableName: 'Snippets'
	});
};
