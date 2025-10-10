// var blob= await fetch(`https://randomuser.me/api/`);
// var res = await blob.json();
// console.log(res);

//line by line code chle that is called synchronous
//jo bhi code async nature ka ho usse side stack mein bhejdo and 
//agle code ko chlao jo bhi sync nature ka ho, jab bhi sara sync code chl jae
//tab check karo async code complete hua ya nhi nad agr vo complete hua ho toh usse
//main Stack(FIFO) mein lao and chala do

async function abcd(){
var blob = await fetch(`https://randomuser.me/api/`)
var ans = await blob.json();
console.log(ans.results[0].name);
}
abcd();

