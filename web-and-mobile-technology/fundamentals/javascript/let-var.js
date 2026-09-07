var varMain = "Var defiend globally";
let letMain = "Let defiend globally";
const pie = 22/7;

function testFunction(){
    console.log("test function");
    var varMain = "Var defined functionally";
    // let varMain = "Let defined functionally"; // cause to error
    console.log("varMain: ", varMain);
    console.log("letMain: ", letMain);
}

testFunction()

console.log("varMain: ", varMain);
console.log("letMain: ", letMain);

function testVarLet() {
    // Example 1: Block Scope
    if (true) {
        var x = 10;  // function-scoped
        let y = 20;  // block-scoped
        console.log("Inside block -> x:", x); // ✅ 10
        console.log("Inside block -> y:", y); // ✅ 20
    }

    console.log("Outside block -> x:", x); // ✅ 10 (var is accessible)
    let y = "asma";
    console.log("Outside block -> y:", typeof y); // ❌ Error: y is not defined
}

testVarLet();
