// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var result1 = name.toUpperCase();
console.log(result1);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function capitalLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1,string.length);
}
var sp = sentence.split(" ");
var result2 = "";
for (var i = 0; i < sp.length; i++){
    result2 += capitalLetter(sp[i]);
    result2 += " ";
}

console.log(result2);



// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var price = money.substring(1,money.length);
var result3 = Number(price);
console.log(result3);
