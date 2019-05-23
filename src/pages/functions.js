// Functions in PHP.

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Functions = () => {
    return (
        <Layout>
            <SEO title={"Functions"}/>
            <IntroComponent heading={"Functions"} desc={"Hey you. I'm calling you."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>A big part of porgramming is not repeating what you have already done.</p>

                <p>We have already seen how that is done using Loops. Now, there is one concept that is fundamental to every programming language, not just PHP.</p>

                <h3>Not repeating yourself with functions</h3>

                <p>Functions are components / <u>modules</u> in a program that one can define, that takes inputs, acts on them and returns a value.</p>
                <p>
                    They are defined in PHP by the following syntax : 
                </p>
                <CodeBlock>
                    {`<?php
    function function_name (parameters){
        // Code to execute
        .
        .
        .
        return <Value to return>
    }
?>`}
                </CodeBlock>
                <p>
                    The <code>function_name</code> is replaced by the name of the function, <code>parameters</code> are variables that the function needs to work on, they are optional. <code>return</code> specifies what the function should return to the program after it has finished processing. The return statement is optional when not necessary.
                </p>
                <p>
                    Suppose you have a program in which you need to find out the factorial of many numbers. You wouldn't go out and write a loop to find out the factorial for every single number, that would be tedious and time-consuming and lengthen the code with repetitions.
                </p>
                <p>
                    In such a case. We can create a function to find out the factorial of a number, and then <code>call</code> (Use) the function everytime we need it. A function is called by specifying its name and then the necessary parameters.
                </p>

                <h3>Examples</h3>
                <p>Lets create a function that will sum two numbers.</p>

                <CodeBlock>
{`<?php
    function sum ($a, $b){   // $a and $b are the parameters to be passed to the function.
        return ($a + $b);   // Returns the sum of the two numbers passed.
    }

    // Now let's use the function.

    $x = 5;             // It is not necessary to have the same name as the parameters.
    $y = 6;

    $z = sum($x, $y);   // The function sum is called this way returns the addition of $x and $y and is stored in $z.
    echo $z;            // Prints 11.
?>`}
                </CodeBlock>
                <p>Similarly, for complicated tasks like factorial of a number, it is convinient to have a single function for factorial you can reuse.</p>

                <CodeBlock>
{`
function factorial($num){
    $fact = 1;  // Factorial of $num, to be modified later.

    for($i = 1; $i <= $num; $i++){
        $fact *= $i;
    }

    return $fact;
}

$num1 = 5;
$num2 = 8;

echo "The factorial of ".$num1." is ".factorial($num1);     // 120
echo "The factorial of ".$num2." is ".factorial($num2);     // 40320
echo "The factorial of ".10." is ".factorial(10);           // Can call without variables too.  Just pass a value.
`}
                </CodeBlock>
                <p>
                    As you can see, we can use one function in a number of places, reduces the number of repetitions and cleans up the program.
                </p>

                <p>The functions we saw above all had parameters, it is totally possible to create functions without parameters like : </p>
                <CodeBlock>
{`function printer(){
    echo "Print something";
}

printer();      // Just prints "Print Something"
`}
                </CodeBlock>

                <h3>Setting Default Parameters</h3>
                
                <p>There could be a time when a user forgets to pass a parameter to a function. For example : </p> 
                
                <CodeBlock>
{`
function printer ($num){         // Default parameter is not specified.
    echo $num;
}

printer();      // Gives an error as no parameter is passed.
printer(4);     // Prints 4.
`}
                </CodeBlock>

                <p>In that case we need to specify a default parameter that work when there are no default parameters passed to a function.</p>

                <CodeBlock>
{`
function printnum ($num = 0){    // Default parameter is specified.
    echo "Number passed is ".$num;
}

printnum();     // Prints "Number passed is 0."
printnum(4);    // Prints "Number passed is 4."
`}
                </CodeBlock>

                <Linker previous={'/loops'} previousLabel={"Loops"}/>
            </div>
        </Layout>
    )
}

export default Functions