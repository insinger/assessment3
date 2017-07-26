var config = require('./config');
var Sequelize = require("sequelize");

// Create Sequelize DB connection
var sequelize = new Sequelize(
	config.DATABASE_NAME,
	config.MYSQL_USERNAME,
	config.MYSQL_PASSWORD,
	{
		host: config.MYSQL_HOSTNAME,
		port: config.MYSQL_PORT,
		logging: config.MYSQL_LOGGING,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000,
		},
	}
);

// Import DB Models - sequelize.import() returns a Sequelize Model object
const BillingModel=sequelize.import('./models/Billing');                 
const ContentRequestsModel=sequelize.import('./models/ContentRequests');         
const DistributionList_UsersModel=sequelize.import('./models/DistributionList_Users');  
const DistributionListsModel=sequelize.import('./models/DistributionLists');       
const LessonFeedbackModel=sequelize.import('./models/LessonFeedback');          
const LessonsModel=sequelize.import('./models/Lessons');                 
const Lessons_SnippetsModel=sequelize.import('./models/Lessons_Snippets');        
const QuestionsModel=sequelize.import('./models/Questions');               
const SnippetFeedbackModel=sequelize.import('./models/SnippetFeedback');         
const SnippetsModel=sequelize.import('./models/Snippets');                
const UsersModel=sequelize.import('./models/Users');                   

// Define Model Associations
DistributionListsModel.hasMany(DistributionList_UsersModel,{foreignKey:'DistributionLists_DistributionList_ID',sourceKey:'DistributionList_ID'});
UsersModel.hasMany(DistributionList_UsersModel,{foreignKey:'Users_User_ID',sourceKey:'User_ID'});
UsersModel.hasMany(ContentRequestsModel,{foreignKey:'Users_User_ID',sourceKey:'User_ID'});
UsersModel.hasMany(LessonFeedbackModel,{foreignKey:'Users_User_ID',sourceKey:'User_ID'});
UsersModel.hasOne(BillingModel,{foreignKey:'Users_User_ID',sourceKey:'User_ID'});
UsersModel.hasMany(SnippetsModel,{foreignKey:'Users_User_ID',sourceKey:'User_ID'});
UsersModel.hasMany(SnippetFeedbackModel,{foreignKey:'Users_User_ID',sourceKey:'User_ID'});
BillingModel.hasMany(LessonsModel,{foreignKey:'Billing_Billing_ID',sourceKey:'Billing_ID'});
BillingModel.hasMany(SnippetsModel,{foreignKey:'Billing_Billing_ID',sourceKey:'Billing_ID'});
BillingModel.hasMany(DistributionListsModel,{foreignKey:'Billing_Billing_ID',sourceKey:'Billing_ID'});
LessonsModel.hasMany(ContentRequestsModel,{foreignKey:'Lessons_Lesson_ID',sourceKey:'Lesson_ID'});
LessonsModel.hasMany(LessonFeedbackModel,{foreignKey:'Lessons_Lesson_ID',sourceKey:'Lesson_ID'});
LessonsModel.hasMany(SnippetFeedbackModel,{foreignKey:'Lessons_Lesson_ID',sourceKey:'Lesson_ID'});
LessonsModel.hasMany(Lessons_SnippetsModel,{foreignKey:'Lessons_Lesson_ID',sourceKey:'Lesson_ID'});
LessonsModel.hasMany(SnippetsModel,{foreignKey:'Lessons_Lesson_ID',sourceKey:'Lesson_ID'});
SnippetsModel.hasOne(Lessons_SnippetsModel,{foreignKey:'Snippets_Snippet_ID',sourceKey:'Snippet_ID'});
SnippetsModel.hasOne(SnippetFeedbackModel,{foreignKey:'Snippets_Snippet_ID',sourceKey:'Snippet_ID'});
SnippetsModel.hasOne(QuestionsModel,{foreignKey:'Snippets_Snippet_ID',sourceKey:'Snippet_ID'});


// Exports Models
module.exports = {
  Billing:BillingModel,
  ContentRequests:ContentRequestsModel,
  DistributionList_Users:DistributionList_UsersModel,
  DistributionLists:DistributionListsModel,
  LessonFeedback:LessonFeedbackModel,
  Lessons:LessonsModel,
  Lessons_Snippets:Lessons_SnippetsModel,
  Questions:QuestionsModel,
  SnippetFeedback:SnippetFeedbackModel,
  Snippets:SnippetsModel,
  Users:UsersModel,
};
