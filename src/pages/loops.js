// Loops in PHP. For and While.

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Loops = () => {
    return (
        <Layout>
            <SEO title={"Loops"}/>
            <IntroComponent heading={"Loops"} desc={"Have I been here before?"}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    Picture this, you are writing a program to print the first 10 natural numbers, I don't know why you would write one, but just for explanation's sake, would you write it like this?
                </p>
                <CodeBlock>
                    {"<?php\n"}
                        {"\t"}echo 1;
                        {"\n\t"}echo 2;
                        {"\n\t"}.
                        {"\n\t"}.
                        {"\n\t"}.
                        {"\n\t"}echo 10;
                    {"\n?>"}
                </CodeBlock>
                <p>
                    Probably not? So programmers tackle such things using one of the most useful parts of programming called <b>Loops</b>. They help us iterate over a particular code until a particular condition is met.
                </p>

                <h3>For Loops</h3>
                <p>
                    One of the most useful and widely used loops is a for loop. It starts with a start expression, ends when a particular condition is false and runs a code everytime it is run.
                </p>
                <p>Its syntax is as follows : </p>
                <CodeBlock>
                    for (start-expression; test-expression; update-expression){"{"}
                        {"\n\t"} // Put the code to execute here.{"\n"}
                    }
                </CodeBlock>

                <p>Let's write the above program using a for loop.</p>
                <CodeBlock>
                    for ($i = 1; $i {"<="} 10; $i++){"{\n"}
                        {"\t"}echo $i;
                    {"\n"}}
                </CodeBlock>
                <p>The above code prints 1 to 10. Let's look at what we have done here.</p>
                <p>The for loop defines a variable i that starts with 1, and runs until i is less than or equal to 10. And increments i everytime a loop is run. So it pritns 1 to 10. As soon as 10 is printed, the value of i becomes 11 and the condition is false, hence, the loop breaks.</p>

                <h3>While Loops</h3>

                <p>Another highly used loop is the while loop, in this loop, just the test-expression (condition) is present and the start and update expressions have to be written explicitly.</p>

                <CodeBlock>
                    {"// <Initialization Here>\n\n"}
                    while (condition){"{\n"}
                        {"\t"}// Run some code here.
                        {"\n\t"}.
                        {"\n\t"}.
                        {"\n\t"}.
                        {"\n\t"}// Update expession here.
                    {"\n"}}
                </CodeBlock>

                Now let's write the above program using a while loop.

                <CodeBlock>
                    $i = 1;
                    {"\n\n"}
                    while ($i {"<="} 10){"{"}{"\n"}
                    {"\t"}echo $i;
                    {"\n\t"}$i++;
                    {"\n"}}
                </CodeBlock>

                <p>The above code sample does the same thing too, prints 1 to 10. However, we have defined the variable i outside the while loop, and we have added an update expression inside it so the value of i inreases by 1 every time the loop is run. Remember to do it, otherwise you risk running into infinite loops which can crash the webpage.</p>
                <p>
                    Similarly, for a challenge, you try printing all the even numbers between 1 to 100 (Hint : Use the modulo operator). Use any loop you may want to.
                </p>
                <Linker previous={"/assocarrays"} next={"/functions"} previousLabel={"Assoc. Arrays"} nextLabel={"Functions"}/>
            </div>
        </Layout>
    )
}

export default Loops