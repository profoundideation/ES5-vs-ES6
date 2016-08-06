displayObjects({name: 'Stars'}, {name: 'Hearts'}, {name: 'Diamonds'});

// Add Prefix
function displayObjects(Prefix, ...args) {
    args.forEach(function(arg) {
        console.log(Prefix, arg);
    });
}

// Object {name: "Stars"} Object {name: "Hearts"}
// Object {name: "Stars"} Object {name: "Diamonds"}

// ^ This is NOT What we wanted! ^
