///////////////////////// boolean logic

TTT = x => y => x;
FFF = x => y => y;

not = x => x(FFF)(TTT);
or = x => y => x(x)(y);
and = x => y => x(y)(x);
eq = x => y => x(y)(not(y));
xor = x => y => not(eq(x)(y));


///////////////////////// boolean logic demo

var BOOLS = [FFF,TTT];
bool2Str = b => b("T")("F");
printBool = b => console.log(bool2Str(b));

BOOLS.forEach(x => { printBool(x); });
console.log("---");

BOOLS.forEach(x => { console.log("NOT " + bool2Str(x) + " : " + bool2Str(not(x))) });
console.log("---");   

BOOLS.forEach(x => { BOOLS.forEach(y => { 
            console.log(bool2Str(x) + " OR " + bool2Str(y) + " : " + bool2Str(or(x)(y)));  }) });
console.log("---");    

BOOLS.forEach(x => 
    { BOOLS.forEach(y => { 
            console.log(bool2Str(x) + " AND " + bool2Str(y) + " : " + bool2Str(and(x)(y)));  }) });
console.log("---");    

BOOLS.forEach(x => 
    { BOOLS.forEach(y => { 
            console.log(bool2Str(x) + " == " + bool2Str(y) + " : " + bool2Str(eq(x)(y)));  }) });
console.log("---");    

BOOLS.forEach(x => 
    { BOOLS.forEach(y => { 
            console.log(bool2Str(x) + " XOR " + bool2Str(y) + " : " + bool2Str(xor(x)(y)));  }) });    
console.log("---");  


///////////////////////// numbers

ZERO = f => x => x;
//ONE = f => x => f(x);
//TWO = f => x => f(f(x));
succ = n => f => x => f(n(f)(x))
ONE = succ(ZERO);
TWO = succ(ONE);
THREE = succ(TWO);
FOUR = succ(THREE);

NUMBERS = [ZERO];
for (i=0; i<10; ++i)
{
    let last = NUMBERS[NUMBERS.length-1];
    NUMBERS.push(succ(last));
}

///////////////////////// numbers demo

num2Str = n => n (x=>x+1)(0);
printNum = n => console.log(num2Str(n));

printNum(ZERO);
printNum(ONE);
printNum(TWO);
printNum(THREE);
console.log("---");  
let numbersStr = "";
NUMBERS.forEach(n => numbersStr += (num2Str(n) + ", "));
console.log(numbersStr);
console.log("---");  
