var User        = require('../models/user')

module.exports = function(router) {
	//USER REGISTRATION ROUTE
	router.post('/users', function(req, res) {
	    var user = new User();
	    user.name = req.body.name;
	    user.email = req.body.email;
	    user.username = req.body.username;
	    user.password = req.body.password;
	   
	    
	    if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '' || req.body.name == null || req.body.name == '') {
		    res.json({ success: false, message: 'Ensure username, email, and password were provided' });
	    } else {
            user.save(function(err) {
            	if (err) {
            		if (err.errors != null) {
            			if (err.errors.name) {
            				res.json({ success: false, message: err.errors.name.message});
            			} else if (err.errors.email) {
            				res.json({ success: false, message: err.errors.email.message});
            			} else if (err.errors.username) {
            				res.json({ success: false, message: err.errors.username.message});
            			} else if (err.errors.password) {
            				res.json({ success: false, message: err.errors.password.message});
            			} else {
            				res.json({ success: false, message: err});
            			}
            		} else if (err) {
            			if (err.code == 11000) {
            				// if (err.errmsg[61] == "u") {
            				// 	res.json({ success: false, message: 'That Username is already taken'});
            				// } else if (err.errmsg[61] == "e") {
            				// 	res.json({ success: false, message: 'That E-mail is already taken'});
            				// }
            				res.json({ success: false, message: err.errmsg});
            			} else {
            				res.json({ success: false, message: err});
            			}
            		}
            	} else {
                	res.json({ success: true, message: 'user created'});
		        }
	        });
	    }
    });

    //USER LOGIN ROUTE
    router.post('/authenticate',function(req,res){
	User.findOne({ username: req.body.username}).select('email username password').exec(function(err, user) {
		if(err) throw err;

		if(!user) {
			res.json({ success:false, message: 'Could not authenticate user'});
		}else if(user) {
			if (req.body.password) {
			var validPassword = user.comparePassword(req.body.password);
		    }else {
		    	res.json({ success: false, message: 'No password provided'});
            }
			if(!validPassword) {
				res.json({ success: false, message: 'Could not authenticate password'});
			}else {
		//		var token = jwt.sign({ username: user.username, email: user.email}, secret, {expiresIn: '24h'});
				res.json({ success: true, message: 'User authenticate'});
			}
		}

	});
});

    return router;
}