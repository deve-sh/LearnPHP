// Variables

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Variables = () => {
    return (
        <Layout>
            <SEO title={"Variables"}/>
            <IntroComponent heading={"Variables and Operators"} desc={"Pass info around and do stuff."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>At some point, in fact, very early in programming you would be tired of entering values for stuff yourself. (Called Hardcoding of values.)</p>
                <p>
                    At that point, you would need something to hold values to be used throughout the program.
                    <br/>
                    <br/>
                    At that point, variables come in, they hold a particular value over the run of the entire program.
                    <br/>
                    For example, if you are using a value 5 many times in a program, then it is a good idea to store it in a variable and then use that value everytime you need to use 5.
                    <br/><br/>
                    Variables are created using a <code>$</code> symbol and their name afterwards. Consider the following codeblock.
                </p>
                <CodeBlock>
                    {"<?php\n"}
                    {"\t\$a = 1.5;\n\t\$x = 5;\n\t\$y = true;\n\t$z = \"This is text.\";"}
                    {"\n?>"}
                </CodeBlock>
                In the above codeblock, there are variables named a, x, y and z.<br/><br/>x is of type <code>integer</code>, a is of type <code>float (Decimal Numbers)</code>, y is of type <code>boolean</code> (True or False), z is of type <code>string</code> (More on strings in the next tutorial.)<br/>
                <br/> Just remember for now, that strings / text have to be enclosed in quotation marks. (" " or  ' ')
                <br/><br/>
                The type of data a variable holds is called its <u>data type</u>.<br/><br/>
                Variables can also be set to NULL, which means that the variables exist, but do not contain any value.
                <br/><br/>
                <h3>Operations on variables</h3>
                Variables are useless if you can't do anything with them. In such cases, a special type of program components come in named <b>Operators</b>.
                <br/><br/>
                They are symbols that specify an operation on operands. In mathematics, you already know a few operators, I.E : + (Addition Operator), - (Subtraction Operator), * (Multiplication Operator - Asterisk) and / (Division Operator).
                <br/><br/>
                <CodeBlock>
                {`\$x = 5                # Assignment
\$y = 6

# ----------------------------------------------
# ARITEMATIC AND SHORTHAND ASSIGNMENT OPERATORS
# ----------------------------------------------

\$z = \$x + \$y          # Assignment with addition of two values
\$x += 6               # Adds 6 to x and stores it inside x. Equivalent to x = x + 6.
\$y -= 5               # Subtracts 5 from y and stores it inside y.
\$x *= 3               # Multiplies 3 to x and stores it inside x.
\$y /= 4               # Divides the value of y by 4 and stores it inside y.
\$x %= 2               # Modulo Operator, returns the remainder when x is divided by 2.
\$x++;                 # Shorthand Increment Operator. Increments the value of x by 1.
\$y--;                 # Shorthand Decrement Operator. Decrements the value of y by 1.

# -------------------------------------------------------------------------------------------
# RELATIONAL OPERATORS -> They check for relation between operands and return True or False.
# -------------------------------------------------------------------------------------------

\$x <= \$y               # Checks if x is less than or equal to y.
\$y < \$x                # Checks if y is less than x.
\$z >= \$x               # Checks if z is equal to or greater than x.
\$x == \$y               # Checks if x is equal to y.
\$x != \$y               # Checks if x is not equal to y.

# -------------------------------------------------
# LOGICAL OPERATORS  -> They define logic.
# -------------------------------------------------

!true                # Read as 'Not' True. Gives False.
!false               # Read as 'Not' False. Gives True.
true || false        # Logical OR. Returns True if any of the operand is true.
true && false        # Logical AND. Returns False if any of the operand is false.`
}
                </CodeBlock>
                
                <h3>Checking for existence of a variable.</h3>
                It can be checked if a variable exists by using the <code>isset</code> function (More on functions later.) It gives true or false depending on the existence of the variable.
                <br/><br/>
                We will be learning how to use functions and validations in the upcoming tutorials.
                <br/><br/>
                Knowing this is important as there will be times when you need to check if a variable exists inside a program or not given PHP does not give you an error when you try to use a variable that has not been defined or created yet. It just gives an empty value in its place.
                <Linker previous = {"/helloworld"} next={"/io"} previousLabel={"Hello World"} nextLabel = {"I/O"}/>
            </div>
        </Layout>);
}

export default Variables