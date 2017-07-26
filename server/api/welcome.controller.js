// check if user is logged in
// This function returns the function that will handle the actual request

var isloggedin = function(dbmodels) {
  return function (req, res) {
		console.log("isloggedin() req.query=",req.query,"req.params=",req.params);
		if (parseInt(process.env.AUTH)==1) {
			console.log("all good");
			res.status(200).json({message:"All good"});
		} else {
			console.log("never heard of you");
			res.status(401).json({message:"Never heard of you"});
		}
	}
};

// Export route handlers
// note: each of the values in this dictionary is a function call which returns a function
module.exports = function(dbmodels) {
   return {
      isloggedin: isloggedin(dbmodels),
   }
};
