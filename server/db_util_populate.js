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

// create seed records
billing1={billingId:null, usersUserId:1, companyName:"Initech",billingAddress:"1 Somewhere ave",billingPlan:1};
user1={userId:1,firstName:"Fred",lastName:"Flintstone",isTc:1,isCc:0,isS:1,isB:1,isAdmin:0,email:"ff@bedrock.com",
		mobile:"777-7777",jobTitle:"Mayor",department:"Rock sorting",billingId:1,picturePath:"",pictureBlob:"",
		expertise:"Dinosaur hunting",isActive:1,passwordHash:"password"};

BillingModel.bulkCreate([billing1]).then(()=>{
	console.log("created billing records");
	UsersModel.bulkCreate([user1]).then(()=>{
		console.log("created billing records");
		});
	});

   

