printArguments(1, 2, 3);

function printArguments(...args) {
    args.forEach(function(arg) {
        console.log('Rest Parameters:', arg);
    });
}

// Rest Parameters: 1
// Rest Parameters: 2
// Rest Parameters: 3