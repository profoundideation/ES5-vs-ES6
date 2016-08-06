displayObjects({name: 'Stars'}, {name: 'Hearts'}, {name: 'Diamonds'});

function displayObjects() {

    // arguments = {name: 'Stars'}, {name: 'Hearts'}, {name: 'Diamonds'}
    // convert into an Array :

    let args = [].slice.call(arguments, 0);

    args.forEach(function(arg) {
        console.log('Arguments:', arg);
    });
}

// Rest Parameters: Object {name: "Stars"}
// Rest Parameters: Object {name: "Hearts"}
// Rest Parameters: Object {name: "Diamonds"}
