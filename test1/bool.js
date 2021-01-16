const bool = require('./bool');


///////////////////////// boolean logic

exports.TRUE = x => y => x;
exports.FALSE = x => y => y;
exports.BOOLS = [bool.FALSE, bool.TRUE];

exports.not = x => x(bool.FALSE)(bool.TRUE);
exports.or = x => y => x(x)(y);
exports.and = x => y => x(y)(x);
exports.eq = x => y => x(y)(bool.not(y));
exports.xor = x => y => bool.not(bool.eq(x)(y));


///////////////////////// boolean logic demo

bool2Str = b => b("T")("F");
printBool = b => console.log(bool2Str(b));

exports.runDemo = () =>
{
    console.log("==== boolean logic demo:");
    bool.BOOLS.forEach(x => { printBool(x); });
    console.log("---");

    bool.BOOLS.forEach(x => { console.log("not " + bool2Str(x) + " == " + bool2Str(bool.not(x))) });
    console.log("---");   

    bool.BOOLS.forEach(x => 
        { bool.BOOLS.forEach(y => { 
                console.log(bool2Str(x) + " or " + bool2Str(y) + " == " + bool2Str(bool.or(x)(y)));  }) });
    console.log("---");    

    bool.BOOLS.forEach(x => 
        { bool.BOOLS.forEach(y => { 
                console.log(bool2Str(x) + " and " + bool2Str(y) + " == " + bool2Str(bool.and(x)(y)));  }) });
    console.log("---");    

    bool.BOOLS.forEach(x => 
        { bool.BOOLS.forEach(y => { 
                console.log(bool2Str(x) + " eq " + bool2Str(y) + " == " + bool2Str(bool.eq(x)(y)));  }) });
    console.log("---");    

    bool.BOOLS.forEach(x => 
        { bool.BOOLS.forEach(y => { 
                console.log(bool2Str(x) + " xor " + bool2Str(y) + " == " + bool2Str(bool.xor(x)(y)));  }) });    
    console.log("---");  
}
