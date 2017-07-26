// NOTE: the user info is in req.body.User.* (not in req.body.*)

/*
		userId         INTEGER(11)
		firstName      STRING
		lastName       STRING
		isTc           INTEGER(4)
		isCc           INTEGER(4)
		isS            INTEGER(4)
		isB            INTEGER(4)
		isAdmin        INTEGER(4)
		email          STRING
		mobile         STRING
		jobTitle       STRING
		department     STRING
		billingId      INTEGER(11)
		picturePath    STRING
		pictureBlob    BLOB
		expertise      STRING
		isActive       INTEGER(4)
		passwordHash   STRING
		
*/


// Create a new user
// POST /api/users
// This function returns the function that will handle the actual request
var create = function(dbmodels) {
   return function(req, res) {
	console.log("create()",req.body);
      dbmodels.Users.create({
			userId       : req.body.User.userId,
			firstName    : req.body.User.firstName,
			lastName     : req.body.User.lastName,
			isTc         : req.body.User.isTc,
			isCc         : req.body.User.isCc,
			isS          : req.body.User.isS,
			isB          : req.body.User.isB,
			isAdmin      : req.body.User.isAdmin,
			email        : req.body.User.email,
			mobile       : req.body.User.mobile,
			jobTitle     : req.body.User.jobTitle,
			department   : req.body.User.department,
			billingId    : req.body.User.billingId,
			picturePath  : req.body.User.picturePath,
			pictureBlob  : req.body.User.pictureBlob,
			expertise    : req.body.User.expertise,
			isActive     : req.body.User.isActive,
			passwordHash : req.body.User.passwordHash,
      })
		.then(function(new_user) {
         console.log(new_user.get({ plain: true }));
         res.status(200).json({user:new_user});
      }).catch(function(err) {
         res.status(500).json(err);
      });
   }
};

// Retrieve user by id
// GET /api/users/:id
// This function returns the function that will handle the actual request
var retrieve = function(dbmodels) {
  return function (req, res) {
		// console.log("retrieve() req.query=",req.query,"req.params=",req.params);
		var where = {};
		where.userId = req.params.userId;

      dbmodels.Users.findOne({
			where: where
		})
		.then(function (found_user) {
			res.status(200).json({user:found_user});
		})
		.catch(function (err) {
			res.status(500).json({error: true});
		});
	}
};

// Update user record
// PUT /api/users/:id
// This function returns the function that will handle the actual request
var update = function(dbmodels) {
   return function (req, res) {
      var where = {};
		where.userId = req.params.userId;
      dbmodels.Users.update({
			userId       : req.body.User.userId,
			firstName    : req.body.User.firstName,
			lastName     : req.body.User.lastName,
			isTc         : req.body.User.isTc,
			isCc         : req.body.User.isCc,
			isS          : req.body.User.isS,
			isB          : req.body.User.isB,
			isAdmin      : req.body.User.isAdmin,
			email        : req.body.User.email,
			mobile       : req.body.User.mobile,
			jobTitle     : req.body.User.jobTitle,
			department   : req.body.User.department,
			billingId    : req.body.User.billingId,
			picturePath  : req.body.User.picturePath,
			pictureBlob  : req.body.User.pictureBlob,
			expertise    : req.body.User.expertise,
			isActive     : req.body.User.isActive,
			passwordHash : req.body.User.passwordHash,
      },
			{where: where}
		)
		.then(function(result) {
			console.log("SUCCESS updating user");
			res.status(200).json(req.body);
		})
		.catch(function(err) {
		 	console.log("ERROR updating user");
			res.status(500).json({error:true});
		});
	}
}

// Delete user record
// DELETE /api/users/:id", function (req, res) {
// This function returns the function that will handle the actual request
var destroy = function(dbmodels) {
	return function(req,res) {
      var where = {};
		where.userId = req.params.userId;

	   dbmodels.Users.destroy({where:where})
	  	.then(function(result) {
	  		console.log("SUCCESS DELETING user");
	  		res.status(200).json(req.body);
	  	})
	  	.catch(function(err) {
	  		console.log("ERROR DELETING user");
	  		res.status(500).json({error:true});
	  	});
	}
};

// Search DB (logical "or") for all users where string occurs in firstName,lastName,or expertise.
// Can also indicate on which field to sort the results, and the sort order.
// GET /api/users?firstName=qqq&lastName=rrr&expertise=sss&orderfield=lastName&orderdirection=a
// GET /api/users  - return all users subject to LIMIT
// This function returns the function that will handle the actual request
var search = function(dbmodels) {
   return function (req, res) {
		var valid_fields=["firstName","lastName","expertise"];
		var or_list=[];
		var orderfield="";
		var orderdirection="ASC";
		var searchspec={};
		console.log("search() req.query=",req.query,"req.params=",req.params);
		// if no query parameters given, interpret as return all users 
		if (req.query && Object.keys(req.query).length==0) {
			searchspec={
				where:{userId:{$like:"%"}},
				limit:100 // limit 100 if no query given
			}; 
		}
		else { // build query from given parameters
			for (x of Object.keys(req.query)) {
				var lx=x.toLowerCase();
				// if a valid fieldname then add it to the 'or' query
				if (valid_fields.includes(lx)) {
					var term={}
					term[lx]={$like:"%"+req.query[x]+"%"}
					or_list.push(term);
				}
				// field to order by has been provided
				else if (lx=="orderfield") {
					var fieldname=req.query[x].toLowerCase();
					if (valid_fields.includes(fieldname)) orderfield=fieldname;
				}
				// sort order has been provided
				else if (lx=="orderdirection") {
					var dir=req.query[x].toLowerCase();
					if (dir.substring(0,1)=="d") orderdirection="DESC";
				}
			}
			searchspec['where']={$or:or_list};
			searchspec['limit']=20;
			if (orderfield) searchspec['order']=[[orderfield,orderdirection]];
		}
		console.log("searchspec=",searchspec);
		// do the query
		dbmodels.Users.findAll(searchspec)
		.then(function(found_users) {
			res.status(200).json({users:found_users});
		})
		.catch(function(err) {
			console.log("users search error: " + err);
			res.status(500).json(err);
		});
	}
};



// Export route handlers
// note: each of the values in this dictionary is a function call which returns a function
module.exports = function(dbmodels) {
   return {
      create   : create(dbmodels),
      retrieve : retrieve(dbmodels),
      update   : update(dbmodels),
      destroy  : destroy(dbmodels),
	  search   : search(dbmodels),
   }
};
