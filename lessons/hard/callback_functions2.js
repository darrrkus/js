"use strict";


// Example of why callback functions needed

function first(){
    //Do something

    setTimeout(
        function(){
        console.log(1);
        },
        500
    );
}


function second(){
    console.log(2);
}

first();
second();