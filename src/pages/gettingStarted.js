// Getting Started with PHP

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const gettingStarted = () => {
    return (
        <Layout>
            <SEO title={"Getting Started"}/>
            <IntroComponent heading={"Getting Started"} desc={"Let's get started! Shall we?"}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`,fontFamily:`georgia,arial`}}>
                <p>Before we get started, there are a few things one needs to remember. PHP is a <u>Server-Side</u> language, and hence requires a server to run on.</p>
                <p>If you have ever written HTML, then you probably know that you just need to write HTML and then open the page in a web browser in order to run the HTML page.</p>
                <p>Things are basically the same here too, just the slight change being is that the file has to be saved with a <b>.php</b> extenstion. Plus, you need to run a web server for it.</p>

                <h3>A brief on Syntax and Structure.</h3>
                <p>
                    If you have ever coded in a programming language like C, there is a chance that you know how code works.
                </p>
                <p>
                    Statements are written and read up to down, meaning that every line of code you write is first evaluated/<i>interpreted</i> and checked for errors. If no error is found, then the checking moves on to the next line of code and so on.
                </p>
                <p>
                    If not, or even if you have, there is another thing PHP has that is shared by almost every other widely used Programming Language : <b>Semicolons (;)</b>.
                    <br/><br/>
                    <u>Every line of code in PHP needs to end with a semicolon. PERIOD!</u> Remember this as this is the biggest source of errors in many programs.
                </p>
                <p>That's basically the only two things you need to know from the beginning. Rest everything we will learn as we go.</p>
                <h3>Getting a Web Server</h3>
                <p>
                    A web server is basically a computer that provides data or webpages to users. A lot of us thinking of servers think of a big cuboidal box with a large number of sockets connected to them making noises, but a server is just a program that knows what to do.
                </p>

                <p>   
                     Some of the common web server stacks I would suggest is : 
                    <br/><br/>
                    <ul>
                        <li>AMPPS</li>
                        <li>WAMP Server</li>
                        <li>XAMP</li>
                    </ul>
                    Just Google and install anyone of them. After installation, pay a visit to the <b>www</b> folder inside them, that's where we will be working.
                    <br/>
                    Run the web server and navigate to <code>localhost</code> in your browser. It will probably open up a tree of files.
                </p>

                <h3>Getting Familiar with PHP</h3>
                <p>
                    Every PHP File ends with a <b>.php</b> extension.
                    <br/><br/>
                    Perform the following steps to creating your first PHP File.
                    <br/><br/>
                    <ul>
                        <li>Create a folder and name it <code>practise</code>.</li>
                        <li>Navigate to the created folder and create a file <code>index.php</code>.</li>
                        <li>Start your web server and open your browser.</li>
                        <li>Navigate to <code>localhost/practise</code> in your browser.</li>
                    </ul>
                </p>
                <p>
                What loads up next is probably a blank page. And that's because the name <b>index.php</b> is the page the server will send everytime someone visits a website without specifying a particular filename.
                </p>

                <p>Let's move on to our first PHP Program now.</p>
                
                <Linker previous={""} next={"/helloworld"} previousLabel={""} nextLabel={"Hello World"}/>
            </div>
        </Layout>
    );
}

export default gettingStarted;