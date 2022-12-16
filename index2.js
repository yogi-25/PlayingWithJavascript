function a()
{
    var b=10;
    c();
    function c()
    {
        console.log(b);
    }
    console.log("Hello html and javascript")
}
a();
