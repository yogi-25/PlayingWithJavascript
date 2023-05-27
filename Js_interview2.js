//Variable shadowing 
function test()
{
    let a = "Hello";
    if(true)
    {
        let a = "hi";
        console.log(a);
    }
    console.log(a);
}
test();

//showding of var to let is allowed 
//wherese the shadowing of let to var is not allowed
