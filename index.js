//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scope=["Scope refers to the availability of variables and functions in certain parts of the code.","A variable declared at the top of a program or outside of a function is considered a global scope variable.","If a variable is used without declaring it, that variable automatically becomes a global variable.","A variable can also have a local scope, i.e it can only be accessed within a function.","The let keyword is block-scoped (variable can be accessed only in the immediate block)."];
var hoisting=["The process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.","Hoisting allows functions to be safely used in code before they are declared.","Variable and class declarations are also hoisted, so they too can be referenced before they are declared.","One of the advantages of hoisting is that it lets you use a function before you declare it in your code.","Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class.","Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized."];
var constructor=["The constructor method is a special method of a class for creating and initializing an object instance of that class.","A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.","If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:","If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided","However, if you provide your own constructor, and your class derives from some parent class, then you must explicitly call the parent class constructor using super.","There can be only one special method with the name constructor in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error."];
var prototype=["Prototypes are the mechanism by which JavaScript objects inherit features from one another.","Every object in JavaScript has a built-in property, which is called its prototype.","The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.","The property of an object that points to its prototype is not called prototype.","Its name is not standard, but in practice all browsers use __proto__","The standard way to access an object's prototype is the Object.getPrototypeOf() method."];


var arr=[{
    scope:scope
},
{
    hoisting:hoisting
},
{
    constructor:constructor
},
{
    prototype:prototype
}];

for(let i of arr){
    for(let key in i){
        localStorage.setItem(key,JSON.stringify(i[key]));
    }
}

var buttonArr=["scope","hoisting","constructor","prototype"];

for(let i of buttonArr){
    // console.log(i);
    document.getElementById(i).addEventListener('click',()=>DisplayFn(i));
}


function DisplayFn(name){
    // console.log(name);
    document.getElementById('display').innerHTML="";
    let ul=document.createElement('ul');

    let video=document.createElement('video');
    video.setAttribute('controls',"");
    let source=document.createElement('source');
    source.src=`zoom_recordings/${name}.mp4`;
    source.type="video/mp4";
    video.append(source);
    let data=JSON.parse(localStorage.getItem(name));
    for(let d of data){
        let li=document.createElement('li');
        li.innerText=d;
        // console.log(li);
        ul.append(li);
        // console.log(ul);
    }
    // console.log(ul);
    document.getElementById('display').append(ul,video);
    // console.log(display);
}
