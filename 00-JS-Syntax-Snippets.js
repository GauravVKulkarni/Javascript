//This is how you write a comment in Javascript
/*
Here
is
how
you
write
multiline
comment.
*/
/*
    2:41 Thu 11 Apr 2024 
    Author: Gaurav Kulkarni
    Javascript Tutorial
*/
//Index
{
/*
    Chapter 1: Getting Started
    Chapter 2: Variables & Constants
    Chapter 3: Arithmetic Operations
    Chapter 4: Inputs
    Chapter 5: Type Conversion
*/
}
//Chapter 1: Getting Started
{

    //Outputting to the console
        console.log(`Hello JS!`);

    //Outputting to alert
    //Note: commented this because each time you run the file, the alert appears. remove '//' to run
        //window.alert(`JS Alert!`);

    //Accessing the h1 element using ID and assigning a value to it
        document.getElementById("heading").textContent=`Hello!`;
}
//Chapter 2: Variables & Constants
{
    //Variables
    //Declaration
        let a;
        let b;

    //Assignment
        a = 2;
        b = 15.7;

    //Declaration + Assignment in one line
        let c = 10;
        let myName = `Gaurav`;
        let string = `abcdefghijklmnopqrstuvwxyz`;
        let numString = `1234`;

    //Displaying the values of variables
        console.log(a);
        console.log(b+c);
        console.log(string);
        console.log(`The name is ${myName}`);

    //Displaying the type of the value of a variable
        console.log(typeof a);
        console.log(typeof string);

    //Booleans
        let isOnline = true;
        console.log(isOnline);

    //Constants
        const str = `Unchangeable String`;
        const num = 4;

    //Displaying variables in tabular format
        console.table([a, b, c, myName, string, numString, isOnline, str, num]);
}
//Chapter 3: Arithmetic Operations
{


    // 1. Arithmetic Operators
        var addition       = 5 + 3;                      // addition = 8
        var subtraction    = 10 - 3;                     // subtraction = 7
        var multiplication = 4 * 6;                      // multiplication = 24
        var division       = 20 / 5;                     // division = 4
        var exponentiation = 2 ** 3;                     // exponentiation = 8
        var modulus        = 10 % 3;                     // modulus = 1
        var increment      = 5;
        increment++;                                     // increment = 6
        var decrement      = 8;
        decrement--;                                     // decrement = 7

    // 2. Assignment Operators
        var x = 10;
        x += 5;                                          // x = x + 5 (x is now 15)
        var y = 20;
        y -= 3;                                          // y = y - 3 (y is now 17)

    // 3. Comparison Operators
        var isEqual        = (10 == 10);                 // isEqual = true
        var isNotEqual     = (5 != 10);                  // isNotEqual = true
        var isStrictEqual  = (10 === "10");              // isStrictEqual = false
        var isGreaterThan  = (20 > 15);                  // isGreaterThan = true
        var isLessThan     = (10 < 8);                   // isLessThan = false

    // 4. Logical Operators
        var logicalAnd     = (true && false);            // logicalAnd = false
        var logicalOr      = (true || false);            // logicalOr = true
        var logicalNot     = !true;                      // logicalNot = false

    // 5. Bitwise Operators
        var bitwiseAnd     = 5 & 3;                      // bitwiseAnd = 1
        var bitwiseOr      = 5 | 3;                      // bitwiseOr = 7
        var bitwiseXor     = 5 ^ 3;                      // bitwiseXor = 6
        var bitwiseNot     = ~5;                         // bitwiseNot = -6
        var leftShift      = 5 << 1;                     // leftShift = 10
        var rightShift     = 5 >> 1;                     // rightShift = 2

    // 6. Ternary Operator
        var age = 20;
        var isAdult        = (age >= 18) ? "Yes" : "No"; // isAdult = "Yes"

    // 7. Unary Operators
        var unaryPlus      = +10;                        // unaryPlus = 10
        var unaryMinus     = -5;                         // unaryMinus = -5
        var notOperator    = !true;                      // notOperator = false
        var typeofOperator = typeof 10;                  // typeofOperator = "number"
        var voidOperator   = void(0);                    // voidOperator = undefined

    // 8. Miscellaneous Operators
        var commaOperator  = (5, 10);                    // commaOperator = 10
}
//Chapter 4: Inputs
{

    //2 ways to take user inputs

    //1: Window prompt
        let input1 = window.prompt("Enter input");

    //2: HTML textbox
        let input2

        //When submit button is clicked, the function runs
        document.getElementById("submitButton").onClick = function(){
            input2 = document.getElementById("inputText").value;
            document.getElementById("outputText").textContent = input2;
        }
} 
//Chapter 5: Type Conversion
{

    //Displaying the type of a variable/constant
        console.log(typeof(a));
        console.log(typeof(string));

    //Changing type of varible
        a  = String(a);
        num = Number(numString);
        
}