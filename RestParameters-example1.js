displayObjects({name: 'Stars'}, {name: 'Hearts'}, {name: 'Diamonds'});

// turn it into a REST !

function displayObjects(...args) {
    args.forEach(function(arg) {
        console.log('Rest Parameters:', arg);
    });
}

// Rest Parameters: Object {name: "Stars"}
// Rest Parameters: Object {name: "Hearts"}
// Rest Parameters: Object {name: "Diamonds"}
