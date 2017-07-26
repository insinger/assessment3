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

/////////////////////////////////
//    C.A.R.E.F.U.L.L.         //
//    C.A.R.E.F.U.L.L.         //
/////////////////////////////////
if (process.env.RECREATE_DB_YES_REALLY) {
	sequelize.sync({force:true}).then(()=>{
		console.log("DATABASE RECREATED");
		}).catch((err)=>console.log("Error in sync()",err));
} else {
	console.log("DATABASE *NOT* RECREATED");
}

