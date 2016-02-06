function howdy(firstName, lastName) {
    return firstName + ' ' + lastName + ' says hey!';
}

console.log( howdy('Samantha', 'Webb') );

var numba = function(string) {
    if (string.length < 7) {
        console.log( 'What a short little word!' );
    } else if (string.length > 7) {
        console.log( 'I\'m sorry, but that\'s too many to count.' );
    } else {
        console.log( '7, what a perfect choice!' );
    }
};

console.log( numba('7') );

console.log( numba('seventy') ) ;

console.log( numba('university') );
