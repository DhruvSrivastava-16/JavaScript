(function(){
    var a = 10;
    var b = a/5;
    console.log(a+b);
})();

if(true)
{
    (function(){
        var a = 200;
        var b = a/5;
        console.log(a+b);
    })();    
}

(function(l,p,r,s){            //Very Important Usage!

l("3^4= ",p(3,4))             

})(console.log,Math.pow,Math.sqrt,Math.sin)

console.log(a)     //you'll see tha outside IIFE the scope of a doesnt exist.

//IIFE is usally used inside "If".

