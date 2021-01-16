const num = require('./num');

///////////////////////// numbers

exports.ZERO = f => x => x;
//exports.ONE = f => x => f(x);
//exports.TWO = f => x => f(f(x));
exports.succ = n => f => x => f(n(f)(x))
exports.ONE = num.succ(num.ZERO);
exports.TWO = num.succ(num.ONE);
exports.THREE = num.succ(num.TWO);
exports.FOUR = num.succ(num.THREE);

exports.NUMBERS = [num.ZERO];
for (i=0; i<10; ++i)
{
    let last = num.NUMBERS[num.NUMBERS.length-1];
    num.NUMBERS.push(num.succ(last));
}

exports.add = n => m => n(num.succ)(m);
exports.mul = n => m => f => x => n(m(f))(x);
//exports.pow = n => m => f => x=> (m(n))(f)(x);
exports.pow = n => m => m(n);



///////////////////////// numbers demo

num2Str = n => n (x=>x+1)(0);
printNum = n => console.log(num2Str(n));

exports.runDemo = () =>
{
    console.log("==== numbers demo:");
    printNum(num.ZERO);
    printNum(num.ONE);
    printNum(num.TWO);
    printNum(num.THREE);
    console.log("---");  
    let numbersStr = "";
    num.NUMBERS.forEach(n => numbersStr += (num2Str(n) + ", "));
    console.log(numbersStr);
    console.log("---");  
    n1 = num.NUMBERS[3];
    n2 = num.NUMBERS[4];
    console.log(num2Str(n1) + " + " + num2Str(n2) + " == " + num2Str(num.add(n1)(n2))); 
    console.log(num2Str(n1) + " * " + num2Str(n2) + " == " + num2Str(num.mul(n1)(n2))); 
    console.log(num2Str(n1) + " ^ " + num2Str(n2) + " == " + num2Str(num.pow(n1)(n2))); 
    console.log("---");  
}