// Strings in PHP

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Strings = () => {
    return (
        <Layout>
            <SEO title={"Strings"}/>
            <IntroComponent heading={"Strings"} desc={"Time to play with text."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    Strings are bits of text that are created by wrapping text in quotes.
                    They are useful to display messages to the user.
                </p>
                <p>
                    Example : 
                </p>

                <CodeBlock>
                    {"<?php\n\t"}
                    $x = I am a string.{"\t\t"}// Invalid. Gives an error because not wrapped in quotes.{"\n\t"}
                    $x = "I am a string".{"\t\t"}// Valid or 'I am a string' too.{"\n\t"}

                    echo $x;{"\t\t\t"}// Prints "I am a string"
                    {"\n?>"}
                </CodeBlock>

                <h3>Concatenation</h3>
                
                Concatenation is joining one string to another. It is done using the Concatenation operator (<b>.</b>)
                <br/><br/>
                <CodeBlock>
                    {"<?php\n"}
                    {"\t"}$str1 = "String1";
                    {"\n\t"}$str2 = "String2";
                    {"\n\t"}$str = $str1 . $str2;
                    {"\n\t"}$str3 = $str1 . " " . $str2;

                    {"\n\t"}echo $str;{"\t\t"}// Prints "String1String2"
                    {"\n\t"}echo $str3;{"\t\t"}// Prints "String1 String2" (Notice the space in between we added.)
                    {"\n?>"}
                </CodeBlock>
                <br/>
                <h3>Interpolation</h3>
                Interpolation is embedding value of a variable inside a string. Just use the <code>$</code> symbol inside a string to interpolate a variable.
                <br/><br/>
                <CodeBlock>
                    {"<?php"}
                        {"\n\t"}$name = "Dennis";
                        {"\n\t"}$str = "My name is $name.";

                        {"\n\t"}echo $str;{"\t\t"}// Prints "My name is Dennis."{"\n"}
                    {"?>"}
                </CodeBlock>
                <h3>Quotes inside quotes</h3>
                You can put quotes inside quotes to include them in strings. It can be achieved by using <u>escape sequences</u> (\) or using alternating symbol of quotations.
                <br/><br/>
                <CodeBlock>
                    {"<?php\n"}
                        {"\t"}echo "'Quote' inside a quote.";
                        {"\n\t"}echo "\"Quote\" inside a quote.";{"\t\t"}// Prints ""Quotes" inside a quote".
                    {"\n?>"}
                </CodeBlock>
                <Linker previous={"/comments"} next={"/conditionals"} previousLabel={"Comments"} nextLabel={"Conditionals"}/>
            </div>
        </Layout>
    );
}

export default Strings;