import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Comments = () => {
    return (
        <Layout>
            <SEO title={"Comments"}/>
            <IntroComponent heading={"Comments"} desc={"Things can get messy, let's untangle!"}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    There can be times when writing some complicated code, things can get messy, plus, there might be times when you might want to remind yourself of something at some line.
                    <br/><br/>
                    Or maybe you may want to tell someone else who is reading your code about something in your code.
                    <br/><br/>
                    Or at the top of your file, you may want to make it clear who the author of a file is.
                </p>

                <p>
                    At times like these, <b>comments</b> come in. Comments are bits of code that are not executed with the program and serve the purpose of documentation.
                    <br/><br/>
                    May it be to someone else or just for the purpose of remembering something later.
                </p>

                <p>
                    Single-Line Comments are started using <code>//</code> or <code> #</code>.
                    <br/>
                    Multi-Line Comments are started using a <code>/*</code> and end with a <code>*/</code>
                </p>

                <CodeBlock>
                    {"<?php\n"}
                    {"\t"}// Single Line Comment{"\n\n"}
                    {"\t"}# Another Single Line Comment{"\n\n"}
                    {"\t"}/*{"\n"}
                    {"\t\t"}A Multi Line Comment{"\n"}
                    {"\t\t"}Can be used to write documentation that is long.{"\n"}
                    {"\t"}*/
                    {"\n?>"}
                </CodeBlock>

                For Example, Implementation :
                <br/><br/>

                <CodeBlock>
                    {"<?php\n\t\$x = 5;\t\t// x is a variable.\n\t$y = 6;\t\t# y is another variable.\n\n\t/*\n\t\tThe next line adds the two variables.\n\t*/\n\n\t$sum = \$x + \$y;\n\techo $sum;\n?>"}
                </CodeBlock>

                The output of the above will be <code>11</code>. All the comments will be ignored and not executed.

                <Linker previous={"/io"} next={"/strings"} previousLabel={"I/O"} nextLabel={"Strings"}/>
            </div>
        </Layout>
    );
}

export default Comments;