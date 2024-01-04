const date=new Date();
// console.log(date);


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// let myCreatedDate=new Date("01-14-2023");
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


newDate.toLocaleString('default', {
weekday:"long",
// timeZone:''
})