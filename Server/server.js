
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'

const app = express();




app.use(cors(
));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));


//connect with database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project"


})
//connect with database
connection.connect(function (err) {

    if (err) {
        return console.error('error: ' + err.message);
    }
    else {
        console.log('Connected to the MySQL server.');
    }

});




// upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename for the stored file
    }
})
const upload = multer({
    storage: storage
})




/*
//addEmployee.jsx
//api create employee
//file upload to node express
app.post('/create', upload.single('image'), (req, res) => {
    //console.log(req.file);
    //console.log(req.body);
    const sql = "INSERT INTO employee (`name`,`email`,`password`, `address`, `salary`,`image`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if (err) return res.json({ Error: "Error in hashing password" });

        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.address,
            req.body.salary,
            req.file.filename
        ]
        connection.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Inside singup query" });
            return res.json({ Status: "Success" });
        })
    })




})




//get information by id
app.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee where id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json({ Error: "Get employee error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})

//update information 
app.put('/update/:id', (req, res) => {
    console.log(req.body)
    const id = req.params.id;
    const sql = "UPDATE employee set salary = ?   WHERE id = ?";
    connection.query(sql, [req.body.salary, id], (err, result) => {
        if (err) return res.json({ Error: "update employee error in sql" });
        return res.json({ Status: "Success" })
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "Delete FROM employee WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json({ Error: "delete employee error in sql" });
        return res.json({ Status: "Success" })
    })
})

app.get('/adminCount', (req, res) => {
    const sql = "Select count(id) as admin from users";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Error in runnig query" });
        return res.json(result);
    })
})
app.get('/employeeCount', (req, res) => {
    const sql = "Select count(id) as employee from employee";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Error in runnig query" });
        return res.json(result);
    })
})

app.get('/salary', (req, res) => {
    const sql = "Select sum(salary) as sumOfSalary from employee";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Error in runnig query" });
        return res.json(result);
    })
})

*/


app.listen(8081, () => {
    console.log("Running");
})



/*

//add joblist Api
// http://localhost:8081/Employers/AddJobList/ReactFront/at least 3 year exp /Part Time/1400
app.post('/Employers/AddJobList/:title/:decr/:reqq/:salary', (req, res) => {
    const title = req.params.title;
    const decr = req.params.decr;
    const reqq = req.params.reqq;

    const salary = req.params.salary;


    const values = [title, decr, reqq, salary,];

    const sql =
        "INSERT INTO joblist (`title`, `decr`, `req`,  `salary`) VALUES (?)";

    connection.query(sql, [values], (err, result) => {
        if (err) {
            return res.json({ Error: "Inside Create query" });
        }
        return res.json({ Status: "Success" });
    });

});*/


/*
//read JobList Api
//http://localhost:8081/getEmployee
// http://localhost:8081/Employers/getJobList
app.get('/Employers/getJobList', (req, res) => {
    const sql = "SELECT * FROM joblist";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Get JobList error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/


/*
//get information about job
// http://localhost:8081/getInfoJob/1
app.get('/getInfoJob/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM joblist where id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json({ Error: "Get joblist error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/




/*
//read JobList by seekers Api
// http://localhost:8081/Seekers/getJobList
app.get('/Seekers/getJobList', (req, res) => {
    const sql = "SELECT * FROM joblist";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Get JobList error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/


/*
//read Seekers information  Api

// http://localhost:8081/Seekers/
app.get('/Seekers/', (req, res) => {
    const sql = "SELECT * FROM seekers";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Get seekers error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/



/*
//get information about Seeker
// http://localhost:8081/getInfoseekers/1
app.get('/getInfoseekers/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM seekers where id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json({ Error: "Get seekers error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/


/*
//sign up
//add seekers api
// http://localhost:8081/Seekers/AddSeekers/reyad kharraz/reyad@gmail.com/0599317052
app.post('/Seekers/AddSeekers/:name/:email/:phone', (req, res) => {
    const name = req.params.name;
    const email = req.params.email;
    const phone = req.params.phone;

    const cv = "";


    const values = [name, email, phone, cv];

    const sql =
        "INSERT INTO seekers (`name`, `email`, `phone`,  `cv`) VALUES (?)";

    connection.query(sql, [values], (err, result) => {
        if (err) {
            return res.json({ Error: "Inside Create query" });
        }
        return res.json({ Status: "Success" });
    });

});*/



/*
//read Request information  Api
// http://localhost:8081/RequestsJobList/
app.get('/RequestsJobList/', (req, res) => {
    const sql = "SELECT * FROM request";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Get request error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/




/*

//add requestJobList and cv  Api
// http://localhost:8081/RequestsJobList/1/2/LamaKharaz.pdf
app.post('/RequestsJobList/:idSeekers/:idJoblist/:cv', (req, res) => {
    const idSeekers = req.params.idSeekers;
    const idJoblist = req.params.idJoblist;
    const cv = req.params.cv;
    const values = [idSeekers, idJoblist, cv];

    const sql =
        "INSERT INTO request (`id_seeker`, `id_joblist`, `cv`) VALUES (?)";

    connection.query(sql, [values], (err, result) => {
        if (err) {
            return res.json({ Error: "Inside Create query" });
        }
        return res.json({ Status: "Success" });
    });

});*/

/*
//get information about (request to this job)
// http://localhost:8081/getRequesttothisJob/3
app.get('/getRequesttothisJob/:id', (req, res) => {
    const id_joblist = req.params.id;
    const sql = "SELECT * FROM request where id_joblist = ?";
    connection.query(sql, [id_joblist], (err, result) => {
        if (err) return res.json({ Error: "Get seekers error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})*/




//////////////////////////////////////////////start


// Define a middleware function for authentication
function authenticate(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // Perform authentication logic here (e.g., compare with stored hashed passwords)
  // For simplicity, let's assume you have a "admin" table in your database with "email" and "password" columns
  const sql = "SELECT * FROM admin WHERE email = ?";
  connection.query(sql, [email], (err, results) => {
    if (err) {
      return res.json({ Status: "Error", Error: "Error in running query" });
    }

    if (results.length === 0) {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }

    const admin = results[0];
    bcrypt.compare(password, admin.password, (err, isMatch) => {
      if (err) {
        return res.json({ Status: "Error", Error: "Error in comparing passwords" });
      }

      if (isMatch) {
        // Authentication successful
        req.admin = admin; // Store the authenticated admin object in the request
        next(); // Proceed to the next middleware or route handler
      } else {
        return res.json({ Status: "Error", Error: "Wrong Email or Password" });
      }
    });
  });
}

// Use the authenticate middleware in the '/LoginAdmin' route
//http://localhost:8081/LoginAdmin/
app.post('/LoginAdmin/', authenticate, (req, res) => {
  return res.json({ Status: "Login Admin Success" });
});




//api login admin
// http://localhost:8081/LoginAdmin
app.get('/LoginAdmin', (req, res) => {
    const sql = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
        if (result.length > 0) {

            return res.json({ Status: " Login Admin Success" })


        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
})



//read JobList Api
// http://localhost:8081/LoginAdmin/getJobList
app.get('/LoginAdmin/getJobList', (req, res) => {
    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
        if (result.length > 0) {
            const sql = "SELECT * FROM joblist";
            connection.query(sql, (err, result) => {
                if (err) return res.json({ Error: "Get JobList error in sql" });
                return res.json({ Status: "Success to get jobList by admin", Result: result })
            })




        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
})





//add joblist Api
// http://localhost:8081/LoginAdmin/AddJobList/ios Devloper/at least 10 year exp/Part Time/1300/Nablus
// http://localhost:8081/LoginAdmin/AddJobList/andriod Devloper/at least 20 year exp/Full Time/2000/Rammallah

app.post('/LoginAdmin/AddJobList/:title/:decr/:reqq/:salary/:location', (req, res) => {

    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });

        if (result.length > 0) {
            const title = req.params.title;
            const decr = req.params.decr;
            const reqq = req.params.reqq;
            const salary = req.params.salary;
            const location = req.params.location;
            const values = [title, decr, reqq, salary, location];
            const sql =
                "INSERT INTO joblist (`title`, `decr`, `req`, `salary`,`location`) VALUES (?)";

            connection.query(sql, [values], (err, result) => {
                if (err) {
                    return res.json({ Error: "Inside Create query" });
                }
                return res.json({ Status: "Success to add job" });
            });

        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
});
//delete job byid
// http://localhost:8081/LoginAdmin/deleteJob/4
app.delete('/LoginAdmin/deleteJob/:id', (req, res) => {

    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });

        if (result.length > 0) {
            const id = req.params.id;
            const sql = "Delete FROM joblist WHERE id = ?";
            connection.query(sql, [id], (err, result) => {
                if (err) return res.json({ Error: "delete employee error in sql" });
                return res.json({ Status: "Success" })
            })


        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })

})

// http://localhost:8081/LoginAdmin/UpdateJob/3/QAtesting/at least 10 year exp/Full Time/2500/Ramallah
app.put('/LoginAdmin/UpdateJob/:id/:title/:decr/:reqq/:salary/:location', (req, res) => {
    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });

        if (result.length > 0) {
            const id = req.params.id;
            const title = req.params.title;
            const decr = req.params.decr;
            const reqq = req.params.reqq;
            const salary = req.params.salary;
            const location = req.params.location;

            const sql = "UPDATE joblist SET title = ?, decr = ?, req = ?, salary = ?,location=?  WHERE id = ?";
            const values = [title, decr, reqq, salary, location, id];

            connection.query(sql, values, (err, result) => {
                if (err) {
                    return res.json({ Error: "Inside Create query" });
                }
                return res.json({ Status: "Success to update job" });
            });

        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })

})




//read Request information  Api
// http://localhost:8081/LoginAdmin/RequestsJobList/
app.get('/LoginAdmin/RequestsJobList/', (req, res) => {

    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });

        if (result.length > 0) {
            const sql = "SELECT * FROM request";
            connection.query(sql, (err, result) => {
                if (err) return res.json({ Error: "Get request error in sql to readJobList By admin" });
                return res.json({ Status: "Success to read request By Admin", Result: result })
            })

        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }
    })
})


//get information about job
// http://localhost:8081/LoginAdmin/getInfoJob/3
app.get('/LoginAdmin/getInfoJob/:id', (req, res) => {
    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
        if (result.length > 0) {
            const id = req.params.id;
            const sql = "SELECT * FROM joblist where id = ?";
            connection.query(sql, [id], (err, result) => {
                if (err) return res.json({ Error: "Get joblist error in sql" });
                return res.json({ Status: "Success to get about this job by admin", Result: result })
            })
        }
        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }
    })
})

//
//who seeker apply to this job
//get information about  who apply(request to this job)
// http://localhost:8081/LoginAdmin/getRequesttothisJob/2 
//2 id_joblist
app.get('/LoginAdmin/getRequesttothisJob/:id', (req, res) => {
    const admin = "SELECT * FROM admin WHERE email = ? AND password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });
        if (result.length > 0) {
            const id_joblist = req.params.id;
            const sql = "SELECT * FROM request WHERE id_joblist = ?";
            connection.query(sql, [id_joblist], (err, requestResults) => {
                if (err) return res.json({ Error: "Get seekers error in sql" });
                const seekers = [];
                requestResults.forEach((requestObj) => {
                    const id = requestObj.id_seeker;
                    
                    



                    const sql = "SELECT * FROM seekers WHERE id = ?";
                    connection.query(sql, [id], (err, seekerResults) => {
                        if (err) return res.json({ Error: "Get seekers error in sql" });
                        seekers.push(seekerResults);
                        if (seekers.length === requestResults.length) {
                            // all requests have been processed
                            return res.json({ Status: "Success", Result: seekers });
                        }
                    });

                });
            });
        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }



    });


});


//get information about Seeker
// http://localhost:8081/LoginAdmin/getInfoseekers/1
//1 id_seeker
app.get('/LoginAdmin/getInfoseekers/:id', (req, res) => {
    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
        if (result.length > 0) {
            const id = req.params.id;
            const sql = "SELECT * FROM seekers where id = ?";
            connection.query(sql, [id], (err, result) => {
                if (err) return res.json({ Error: "Get seekers error in sql" });
                return res.json({ Status: "Success", Result: result })
            })

        }
        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }
    })
})

//read Seekers information  Api
// http://localhost:8081/LoginAdmin/Seekers/
app.get('/LoginAdmin/Seekers/', (req, res) => {
    const admin = "SELECT * FROM admin Where email = ? AND  password = ?";
    connection.query(admin, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
        if (result.length > 0) {
            const sql = "SELECT * FROM seekers";
            connection.query(sql, (err, result) => {
                if (err) return res.json({ Error: "Get seekers error in sql" });
                return res.json({ Status: "Success", Result: result })
            })


        }
        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }
    })

})




//Part2

//FILTER
//filter by location
// http://localhost:8081/Seekers/getJobList/FilterByLocation/Nablus
//Ramallah
app.get('/Seekers/getJobList/FilterByLocation/:location', (req, res) => {
    const location = req.params.location;
    const sql = "SELECT * FROM joblist WHERE location = ?";
    connection.query(sql, [location], (err, results) => {
        if (err) {
            return res.json({ Status: "Error", Error: "Error in running query" });
        }
        return res.json(results);
    });


})

//filter by tittle
//http://localhost:8081/Seekers/getJobList/FilterBytittle/DevOP
app.get('/Seekers/getJobList/FilterBytittle/:title', (req, res) => {
    const title = req.params.title;
    const sql = "SELECT * FROM joblist WHERE title = ?";
    connection.query(sql, [title], (err, results) => {
        if (err) {
            return res.json({ Status: "Error", Error: "Error in running query" });
        }
        return res.json(results);
    });


})
//filter by range salary
//http://localhost:8081/Seekers/getJobList/FilterBySalary/1400/2500
app.get('/Seekers/getJobList/FilterBySalary/:minSalary/:maxSalary', (req, res) => {
    const minSalary = req.params.minSalary;
    const maxSalary = req.params.maxSalary;
    const sql = "SELECT * FROM joblist WHERE salary >= ? AND salary <= ?";
    connection.query(sql, [minSalary, maxSalary], (err, results) => {
        if (err) {
            return res.json({ Status: "Error", Error: "Error in running query" });
        }
        return res.json(results);
    });
})











//SAVE 

//Save joblist Api
// http://localhost:8081/LoginSeeker/SaveJobList/5
app.post('/LoginSeeker/SaveJobList/:id_joblist', (req, res) => {

    const seeker = "SELECT * FROM seekers Where email = ? AND  phone = ?";
    connection.query(seeker, [req.body.email, req.body.phone], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });

        if (result.length > 0) {


            const id_seeker = result[0].id;
            const id_joblist = req.params.id_joblist;

            const values = [id_seeker, id_joblist];
            const sql =
                "INSERT INTO savejob (`id_seeker`, `id_joblist`) VALUES (?)";

            connection.query(sql, [values], (err, result) => {
                if (err) {
                    return res.json({ Error: "Inside Create query" });
                }
                return res.json({ Status: "Success to Save job" });
            });

        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
});

//un save
//http://localhost:8081/LoginSeeker/UnSaveJobList/5
app.delete('/LoginSeeker/UnSaveJobList/:id_joblist', (req, res) => {
    const seeker = "SELECT * FROM seekers Where email = ? AND  phone = ?";
    connection.query(seeker, [req.body.email, req.body.phone], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });

        if (result.length > 0) {


            const id_seeker = result[0].id;
            const id_joblist = req.params.id_joblist;

            const values = [id_seeker, id_joblist];


            const query = "DELETE FROM savejob WHERE id_seeker = ? AND id_joblist = ?";

            connection.query(query, [id_seeker, id_joblist], (err, result) => {
                if (err) {
                    return res.json({ Error: "Inside Create query" });
                } 
               
               if (!result.length && result.length == 0) {
                    // handle case where result is empty or null
                   // console.log("Result is empty or null");
                    return res.json({ Status: "Not Save it Before", Error: "Result Not is save it before" });
                }
                return res.json({ Status: "Success to unSave job" });
               
            });

          

        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or phone" });
        }
    })

})


// give me all saved jobs  by id_seeker
// http://localhost:8081/LoginSeeker/SaveJobList
app.get('/LoginSeeker/SaveJobList', (req, res) => {
    const seekersql = "SELECT * FROM seekers Where email = ? AND  phone = ?";

    connection.query(seekersql, [req.body.email, req.body.phone], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });

        if (result.length > 0) {

            const id_seeker = result[0].id;
            const sql = "SELECT * FROM savejob WHERE id_seeker = ?";
            connection.query(sql, [id_seeker], (err, requestResults) => {
                if (err) return res.json({ Error: "Get jobs save by seekers error in sql" });

                if (!requestResults.length || requestResults.length === 0) {
                    // handle case where result is empty or null
                    console.log("Result is empty or null");
                    return res.json({ Status: "Empty", Error: "Result is empty or null" });
                }


                const jobs = [];
                requestResults.forEach((requestObj) => {
                    const id = requestObj.id_joblist;
                    const sql = "SELECT * FROM joblist WHERE id = ?";
                    connection.query(sql, [id], (err, seekerResults) => {
                        if (err) return res.json({ Error: "Get seekers error in sql" });


                        jobs.push(seekerResults);

                        if (jobs.length === requestResults.length) {
                            // all requests have been processed
                            return res.json({ Status: "Success", Result: jobs });
                        }
                    });
                });
            });
        }


        else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }
    });
});




//PART 3
//global joblist 
//read JobList by seekers if log or not log Api
// http://localhost:8081/Seekers/getJobList
app.get('/Seekers/getJobList', (req, res) => {
    const sql = "SELECT * FROM joblist";
    connection.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Get JobList error in sql" });
        return res.json({ Status: "Success", Result: result })
    })
})


//Sign up seekers
//add seekers api  
// http://localhost:8081/Seekers/AddSeekers/reyad kharraz/reyad@gmail.com/0599317052
//http://localhost:8081/Seekers/AddSeekers/Leen sharaf/leen@gmail.com/0597369625
//http://localhost:8081/Seekers/AddSeekers/amjad/amjad@gmail.com/0591234567
app.post('/Seekers/AddSeekers/:name/:email/:phone', (req, res) => {
    const name = req.params.name;
    const email = req.params.email;
    const phone = req.params.phone;
    const cv = "";
    const values = [name, email, phone, cv];
    const sql =
        "INSERT INTO seekers (`name`, `email`, `phone`,  `cv`) VALUES (?)";
    connection.query(sql, [values], (err, result) => {
        if (err) {
            return res.json({ Error: "Inside Create query" });
        }
        return res.json({ Status: "Success" });
    });

});





// http://localhost:8081/LoginSeeker
app.get('/LoginSeeker', (req, res) => {
    const seekersql = "SELECT * FROM seekers Where email = ? AND  phone = ?";
    connection.query(seekersql, [req.body.email, req.body.phone], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });
        if (result.length > 0) {
            return res.json({ Status: "Success", seekerId: result[0].id });
        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Admin" });
        }
    });
});

//http://localhost:8081/LoginSeeker/uploadCv/1
app.post('/LoginSeeker/uploadCv/:idJoblist', upload.single('pdf'), (req, res) => {
    const seekersql = "SELECT * FROM seekers Where email = ? AND  phone = ?";
    connection.query(seekersql, [req.body.email, req.body.phone], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });
        if (result.length > 0) {
            const id_seeker = result[0].id;
            const idJoblist = req.params.idJoblist;

            const file = req.file;

            // Access the uploaded file details
            if (file) {
               

                const values = [id_seeker, idJoblist, file.originalname];
                const sql =
                    "INSERT INTO request (`id_seeker`, `id_joblist`,`cv`) VALUES (?)";
                connection.query(sql, [values], (err, result) => {
                    if (err) {
                        return res.json({ Error: "Error posting job" });
                    }
                    return res.json({ Status: "Success to post to this job" });
                });

             

                   const Cv =  file.originalname;
                    const sqll = `UPDATE seekers SET cv = ? WHERE id = ?`;
                    const valuess = [Cv, id_seeker];
                  
                    connection.query(sqll, valuess, (err, result) => {
                      if (err) {
                        return res.json({ Error: "Error posting job" });
                      }
                 
                      return res.json({ message: 'File uploaded successfully!' });
                    });
                  
            } else {
                return res.json({ Status: "Error", Error: "No file uploaded" });
            }

        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password Seekers" });
        }
    });

});



//what the seeker requests
// http://localhost:8081/LoginSeeker/getRequest/

app.get('/LoginSeeker/getRequest/', (req, res) => {
    const seekersql = "SELECT * FROM seekers Where email = ? AND  phone = ?";
    connection.query(seekersql, [req.body.email, req.body.phone], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });
        if (result.length > 0) {
            const id_seeker = result[0].id;
            const sql = "SELECT * FROM request WHERE id_seeker = ?";
            connection.query(sql, [id_seeker], (err, requestResults) => {
                if (err) return res.json({ Error: "Get seekers error in sql" });
                const joblist = [];
                requestResults.forEach((requestObj) => {
                    const id = requestObj.id_joblist;
                    
                    const sql = "SELECT * FROM joblist WHERE id = ?";
                    connection.query(sql, [id], (err, seekerResults) => {
                        if (err) return res.json({ Error: "Get joblist error in sql" });
                        joblist.push(seekerResults);
                        if (joblist.length === requestResults.length) {
                            // all requests have been processed
                            return res.json({ Status: "Success", Result: joblist });
                        }
                    });

                });
            });
        }

        else {
            return res.json({ Status: "Error", Error: "Wrong Email or phone seeker" });
        }



    });


});

