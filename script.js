var json='{"name":"john", "age":30,"city":"New York"}';
var obj=JSON.parse(json);
console.log(obj);
var response=[obj];
//console.log("JSON Object", response);
console.log(" ");
console.log(" ");


console.log("************for loop*****************");

for(var i=0; i<response.length; i++)
{
    console.log("ITERATE FOR LOOP", response[i]);
}
console.log("  ");
console.log("  ");
console.log("  ");
console.log("************for of loop*****************");

for(var val of response)
{
    console.log("ITERATE FOR OF", val);
}
console.log("  ");
console.log("  ");
console.log("  ");
console.log("************for in loop*****************");

for(var res in response)
{
    console.log("ITERATE FOR IN LOOP", res);
}
console.log("  ");
console.log("  ");
console.log("  ");
console.log("************forEach loop*****************");

response.forEach((person)=>{
    console.log("ITERATE FOR EACH LOOP", person);
})
