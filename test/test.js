var Nightmare = require("nightmare");

var chai = require('chai');
var chaiHttp = require('chai-http');

var expect = chai.expect;


chai.use(chaiHttp);

console.log("Start Get User");

// describe('Signin', function () {
// it('should redirect to dashboard on successful login', function(done) {
//     chai.request('http://localhost:3000')
//       .post('/signin')
//       .set('Token', 'text/plain')
//       .set('content-type', 'application/x-www-form-urlencoded')
//       .type('form')
//       .send('grant_type=password')
//       .send('email=martinash@gmail.com')
//       .send('password=1234')
//       .end(function(err, res) {
//           console.log(res);
//         res.should.have.status(200);
//         //expect(res).to.redirectTo('http://localhost:3000/index');
//         done();
//       });
//   });
// });

describe('User', function () {
    const userCredentials = {
        firstname: "Test",
        lastname: "Test",
        username: "test",
        about: "",
        email: 'sponge@bob.com',
        password: '1234'
    };


    var idUser;

    describe('Create User', function () {
        it('responds with status 200 and get Id User', function (done) {
            chai.request("http://localhost:3000")
                .post('/api/users')
                .send(userCredentials)
                .end(function (err, res) {
                    idUser = res.body.id;
                    console.log("User id " + res.body.id);
                    expect(res).to.have.status(200);
                    done();


                    const cash = {
                        "amount": 60000,
                        "UserId": idUser
                    };

                    // describe('Create Cash', function () {
                    //     it('responds with status 200 and insert cash', function (done) {
                    //         chai.request("http://localhost:3000")
                    //             .post('/api/cash')
                    //             .send(cash)
                    //             .end(function (err, res) {
                    //                 expect(res).to.have.status(200);
                    //                 done();
                    //             });
                    //     });
                    // });

                    describe('Get Cash by User', function () {
                        it('responds with status 200 and get data', function (done) {
                            chai.request("http://localhost:3000")
                                .get('/api/cash/by-user/' + 1)
                                .end(function (err, res) {
                                    console.log("Cash list length " + res.body.length);
                                    expect(res).to.have.status(200);
                                    expect(res.body.length).to.be.at.least(0);
                                    done();
                                });
                        });
                    });


                    // const income = {
                    //     "isRecurring" : 0,
                    //     "amount": 30000,
                    //     "customer" : "Christian M",
                    //     "description" : ""
                    // };

                    // var User = {
                    //     id: idUser                        
                    // };

                    // describe('Create Income', function () {
                    //     it('responds with status 200 and insert income', function (done) {
                    //         chai.request("http://localhost:3000")
                    //             .post('/api/incomes')
                    //             .send(income) 
                    //             .send(User)                               
                    //             .end(function (err, res) {
                    //                 expect(res).to.have.status(200);
                    //                 done();
                    //             });
                    //     });
                    // });

                    describe('Get Income by User group by customer', function () {
                        it('responds with status 200 and get data', function (done) {
                            chai.request("http://localhost:3000")
                                .get('/api/incomes/by-customer/' + 1)
                                .end(function (err, res) {
                                    console.log("Income list length " + res.body.length);
                                    expect(res).to.have.status(200);
                                    expect(res.body.length).to.be.at.least(0);
                                    done();
                                });
                        });
                    });





                    // const expense = {
                    //     "isRecurring" : 0,
                    //     "amount": 30000,
                    //      "category": "Employees"
                    //     "vendor" : "Christian M",
                    //     "description" : ""
                    // };

                    // var User = {
                    //     id: idUser                        
                    // };

                    // describe('Create Income', function () {
                    //     it('responds with status 200 and insert income', function (done) {
                    //         chai.request("http://localhost:3000")
                    //             .post('/api/expenses')
                    //             .send(income) 
                    //             .send(User)                               
                    //             .end(function (err, res) {
                    //                 expect(res).to.have.status(200);
                    //                 done();
                    //             });
                    //     });
                    // });

                    describe('Get Expense by User group by category', function () {
                        it('responds with status 200 and get data', function (done) {
                            chai.request("http://localhost:3000")
                                .get('/api/expenses/by-category/' + 1)
                                .end(function (err, res) {
                                    console.log("Income list length " + res.body.length);
                                    expect(res).to.have.status(200);
                                    expect(res.body.length).to.be.at.least(0);
                                    done();
                                });
                        });
                    });
                });
        });
    });









    // describe('Get All User', function () {
    //     it('responds with status 200', function (done) {
    //         chai.request("http://localhost:3000")
    //             .get('/api/users')
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200);
    //                 done();
    //             });
    //     });
    // });
});


console.log("Start login test");

// STORY: As a developer nerd, I want to be able to take courses on web tech.
new Nightmare({ show: true })
    // Visit login page
    .goto("http://localhost:3000/signin")
    // Enter username.
    .type("#email", "martinash@gmail.com")
    // Enter password.
    .type("#password", "1234")
    // Take a screenshot of the login form.
    .screenshot("login.png")
    // Click login button. Always check if you've done this where necessary!
    // It's easy to forget.
    .click("#btn")
    // Click course catalog link.
    //.click("a[href='/index']")
    // Scroll down a few hundred pixels.
    .scrollTo(500, 0)
    // Take a screenshot and save it to the current directory.
    .screenshot("dashboard.png")
    // End test
    .end()
    // Execute commands
    .then(function () {
        console.log("Done login!");
    })
    // Catch errors
    .catch(function (err) {
        console.log(err);
    });

