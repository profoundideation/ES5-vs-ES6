displayObjects('Hello', {name: 'Stars'}, {name: 'Hearts'}, {name: 'Diamonds'});

function displayObjects(Prefix, ...args) {
    args.forEach(function(arg) {
        console.log(Prefix, arg.name);
    });
}

// Hello Stars      ( RestParameters-example3.js:5 )
// Hello Hearts     ( RestParameters-example3.js:5 )
// Hello Diamonds   ( RestParameters-example3.js:5 )
