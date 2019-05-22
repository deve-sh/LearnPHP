// Input and Output in PHP
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const IO = () => {
    return (
        <Layout>
            <SEO title={"Input / Output"}/>
            <IntroComponent heading={"Input / Output"} desc={"We need to print stuff too."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    There comes a time when we need to take data from the user and print data to the user, or just print data to the screen in general.
                </p>
                <p>
                    In those cases, we need a way to do so. That's where I/O comes in. It allows you to print messages to the screen and take data from the user.
                </p>
                <p>
                    Taking data from the user in PHP is done using HTML forms, teaching which is outside the scope of these tutorials, but we can teach you to print stuff.
                </p>
                <p>
                    Printing is done using <code>echo</code> statement in PHP. Remember we used echo in our Hello World Program? That's exactly what it does, it <u>echoes</u> stuff to the screen.
                </p>
                <CodeBlock>
                    {"<?php\n\techo \"Hey There\";\t// Prints text.\n\t\$x = 5;\n\techo $x;\t\t// Prints value of variable (5).\n\techo $x + 2;\t\t// Can perform operations too.\n\techo \"Echoes can span\n\t\tmultiple lines\n\t\ttoo.\";\n\techo \"<br>\";\t\t// Can even print HTML Tags.\n?>"}
                </CodeBlock>
                <Linker previous={"/variables"} next={"/comments"} previousLabel={"Variables"} nextLabel={"Comments"} />
            </div>
        </Layout>
    );
}

export default IO;