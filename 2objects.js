var obj = {
    name: "harsh",
    age:12
}
//we can access this name by obj.name and obj['name']
//if we want that no one change the value of age we will freeze it
Object.freeze(obj); 
obj.age = 25;//use to change the value of age

// function abcd(a,b,c){ if i write abcd.length it gives me output = 3

// }

function abcd(){
    return 12;
}
var ans = abcd();
console.log(ans);