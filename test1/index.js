TTT = x => y => x;
FFF = x => y => y;

not = x => x(FFF)(TTT);
or = x => y => x(x)(y);
and = x => y => x(y)(x);
eq = x => y => x(y)(not(y));
xor = x => y => not(eq(x)(y));



var bools = [FFF,TTT];
bool2Str = b => b("T")("F");
printBool = b => console.log(bool2Str(b));

bools.forEach(x => { printBool(x); });
console.log("---");


bools.forEach(x => { console.log("NOT " + bool2Str(x) + " : " + bool2Str(not(x))) });

console.log("---");   

bools.forEach(x => { bools.forEach(y => { 
            console.log(bool2Str(x) + " OR " + bool2Str(y) + " : " + bool2Str(or(x)(y)));
    }) });

console.log("---");    

bools.forEach(x => 
    { bools.forEach(y => { 
            console.log(bool2Str(x) + " AND " + bool2Str(y) + " : " + bool2Str(and(x)(y)));
    }) });
    
console.log("---");    

bools.forEach(x => 
    { bools.forEach(y => { 
            console.log(bool2Str(x) + " == " + bool2Str(y) + " : " + bool2Str(eq(x)(y)));
    }) });
    
console.log("---");    

bools.forEach(x => 
    { bools.forEach(y => { 
            console.log(bool2Str(x) + " XOR " + bool2Str(y) + " : " + bool2Str(xor(x)(y)));
    }) });    