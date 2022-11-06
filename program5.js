let multiply = function(x,y){
    console.log(x*y);
}

let multiplybytwo = multiply.bind(this,2);
multiplybytwo(5);

let multiplybythree = multiply.bind(this,3);
multiplybythree(4);


