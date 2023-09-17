const express = require('express');
var fs = require('fs'); // Require the 'fs' module
var app = express();
app.use(express.static('public'));

app.get('/exp3.html', function(req, res){
    res.sendFile(__dirname + "/" + "exp3.html");
});


app.get('/process_login', function(req, res){
    var response1 = {
        Username: req.query.Username,
        Password: req.query.Password
    };
    console.log(response1);
    // Store the data in a text file
    storeData('login_data.txt', JSON.stringify(response1));
    res.end(JSON.stringify(response1));
});

app.get('/process_register', function(req, res){
    var response2 = {
        Firstname: req.query.Firstname,
        Lastname: req.query.Lastname,
        Email: req.query.Email,
        Password: req.query.Password
    };
    console.log(response2);
    // Store the data in a text file
    storeData('registration_data.txt', JSON.stringify(response2));
    res.end(JSON.stringify(response2));
});

var server = app.listen(2000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

// Function to store data in a text file
function storeData(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.error("Error writing to " + fileName + ": " + err);
        } else {
            console.log("Data saved to " + fileName);
        }
    });
}
