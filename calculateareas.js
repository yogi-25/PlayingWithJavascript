function area1(r)
{
    return 2*3.14*r*r;
}

function Diameter(r)
{
    return 2*3.14*r*r;
}
//problem stattement is caluculate the area of diameter , circle 

console.log(area1(2));
const output = [];
const input = [1,2,3,4,5];
var a = input.map(function xyz(y)
{
   return area1(y);

})
console.log(a)


// function diameter1(r)
// {
//     return 2*3.14*r;
// }
// var input = [1,2,3,4];
// var output = function x(x)
// {
//     return input.map(x);
// }
// console.log(area1(output));

