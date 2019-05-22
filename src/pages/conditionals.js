// Conditionals for PHP

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Conditionals = () => {
    return (
        <Layout>
            <SEO title={"Conditionals"}/>
            <IntroComponent heading={"Conditionals"} desc={"This could go any way we want it to."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    Life is restrictive enough, the last thing we would want is to be restricted to just basic operations in a programming language.
                </p>
                <p>
                    Seeing that, programming languages, including PHP come with a set of code templates that allow us to make decisions based on values we pass to it.
                </p>
                <p>
                    They are the <b>if</b>, <b>else</b> and <b>else if</b> statements.
                </p>

                <CodeBlock>
                    {"<?php"}
                    {"\n\tif (Condition 1){\n\t\t// Do something here.\n\t}\n\telse if (Condition 2){\n\t\t// Do something else here.\n\t}\n\t.\n\t.\n\t.\n\telse {\n\t\t// Finally do something here.\n\t}"}
                    {"\n?>"}
                </CodeBlock>

                <p>
                    The if statement takes a condition, if its true then the statements inside the curly braces/block of if statement is executed and the evaluation is stopped. If not, then it moves on to the else if part and checks if the condition 2 is true and executes its block's components if true and so on until a final else statement is met.
                    <br/>
                    <br/>
                    Conditions are created using logical and relational operators, remember from the variables and operators tutorial?
                </p>

                <p>
                    <b>Note</b> : Keep the following points in mind when using conditionals :
                    <br/><br/>
                    <ul>
                        <li>An else and else if statements are optional to an if statement.</li>
                        <li>An if statement can have as many else if statements but only one else statement.</li>
                        <li>An else if or an else statement requires an if statement first, otherwise an error is caused.</li>
                    </ul>
                </p>

                <p>
                    Let's look at a demo program : 
                </p>

                <CodeBlock>
                    {"<?php\n"}
                    {"\t"}$x = 5;{"\n"}
                    {"\t"}if ($x == 5){"{"}
                        {"\n\t\t"}echo "Equal to 5.";{"\t"}// This will print.
                    {"\n\t"}}
                    {"\n\t"}else {"{"}
                        {"\n\t\t"}echo "Not equal to 5.";
                    {"\n\t"}}
                    {"\n?>"}
                </CodeBlock>

                <Linker previous={"/strings"} next={"/basicarrays"} previousLabel={"Strings"} nextLabel={"Basic Arrays"}/>
            </div>
            </Layout>
    );
}

export default Conditionals;