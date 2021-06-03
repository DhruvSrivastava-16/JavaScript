console.log("start");
setTimeout(function (){
    console.log('done')
},3000)
console.log('end')

//In this you saw that "done" printed after "end" and it happened because the 
//the interpreter understood that "the function has to be executed after 3000" and till
//then the interpreter can continue doing other works and need not wait for 3000. 