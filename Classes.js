// ES5

var App = function() {
    console.log('Hello from App (via ES5)');
};

App.prototype.method = function() {
    console.log('Hello from App.Prototype.Method (via ES5)');
};

var app = new App();
app.method();


// ES2015 / ES6

class App2015 {
    constructor() {
        console.log('Hello from Class App2015 (via ES2015 / ES6)');
    }

    method(){
        console.log('Hello from Class App2015\'s Method (via ES2015 / ES6)');
    }
}

var app2015 = new App2015();
app2015.method();

// Hello from App (via ES5)
// Hello from App.Prototype.Method (via ES5)
// Hello from Class App2015 (via ES2015 / ES6)
// Hello from Class App2015's Method (via ES2015 / ES6)
