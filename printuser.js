const users = [
    {FirstName:"Yogita" ,LastName:"Misal", age:23},
    {FirstName:"Bhaskar" ,LastName:"Mahershwari", age:23},
    {FirstName:"Sneha", LastName:"Dixson", age:25}
      ]

    console.log(users);
    // const op = users.map(function xyz(x)
    // {
    //     //return x.FirstName,x.LastName,x.age;   //we cannot return multiple pararmters 
    //     return x.FirstName;
    // })
    // console.log(op)
const op = users.reduce(function(acc,curr)
{
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age];
        // console.log(curr.age);
    }
    else{
        acc[curr.age] =1;
    }
    return acc;

},{})
console.log(op);



