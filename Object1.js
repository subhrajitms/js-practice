//singleton

//object literals

const mySym=Symbol("key1");




const JsUser={
    name:"Hitesh",
    "first_name":"kalia",
    mySym:"mykey1"
}
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser.first_name);
// console.log(JsUser[first_name]);
console.log(JsUser.mySym);
