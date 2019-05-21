import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const Hello = () => {
    return (
        <Layout>
            <SEO title={"Getting Started"}/>
            <IntroComponent heading={"Hello World"} desc={"Let's get our hands dirty!"}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>A Hello World program is usually the first program anyone writes when starting with a new language.</p>

                In PHP, a hello world program looks like : 
                <br/>
                <br/>
                <CodeBlock>
                    {"<?"}php{"\n"}
                    {"\t"}echo "Hello World";{"\n"}
                    {"?"}>
                </CodeBlock>

                <p>Write it to the <code>index.php</code>&nbsp; file we created previously and run it to see Hello World printed to the page.
                Congrats, this was the first program we wrote in PHP.</p>
                
                <p>In this tutorial, we learnt that every PHP code has to be wrapped inside a <b>{"<?php"}</b> and <b>{"?>"}</b>. Everything else statys exactly like an HTML Page.</p>

                What everything else means in the above code sample, that will be seen in the upcoming tutorials.
                
                <br/><br/>
                Sit back and enjoy. ;)
                <br/><br/>
                <Linker previous={"/gettingStarted"} next={"/variables"} previousLabel={"Getting Started"} nextLabel={"Variables"}/>
            </div>
        </Layout>
    );
}

export default Hello;