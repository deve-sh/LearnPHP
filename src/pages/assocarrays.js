// Basic Arrays in PHP

import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const AssocArrays = () => {
    return (
        <Layout>
            <SEO title={"Associative Arrays"}/>
            <IntroComponent heading={"Associative Arrays"} desc={"Name what you store."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    In the previous tutorial, we saw how to access array elements with their index numbers.
                </p>
                <p>
                    Over that functionality, PHP also allows us to specify our own indices in the form of strings or numbers. (only these two, none other.)
                    <br/><br/>
                    The new indices we define are then called <b>keys</b> and the whole array is called a <b>key - value</b> pair or an <b>Associative Array</b> as every value is associated with a key.
                    <br/>
                    <br/>
                    They are defined just like a normal array, just in this that the key is followed by <code>=></code> and then the value associated with it. And every pair is seperated by a comma.
                </p>
                <p>
                    Let's look at one of them : 
                </p>

                <CodeBlock>
                    {"<?php\n\t"}
                        $assocarr = [
                            {"\n\t\t"}"Name" => "Andrew Garfield",
                            {"\n\t\t"}"Movie" => "Hacksaw Ridge",
                            {"\n\t\t"}"Year" => 2016
                        {"\n\t"}];
                    {"\n?>"}
                </CodeBlock>

                <p>
                    Now, that we have defined the variable assocarr, to access a value from it, just like a normal array, pass the key of the value.
                </p>

                <CodeBlock>echo $assocarr["Name"];{"\t\t"}// Prints Andrew Garfield
                    {"\n"}echo $assocarr["name"];{"\t\t"}// Prints nothing, as 'name' is not a key, 'Name' is.
                    {"\n"}echo $assocarr["Year"];{"\t\t"}// Prints 2016
                </CodeBlock>

                <p>
                    All other operations on Associative Arrays remain exactly the same as a normal array.
                </p>
                <Linker previous={"/basicarrays"} next={"/loops"} previousLabel={"Arrays"} nextLabel={"Loops"} />
            </div>
            </Layout>
    );
}

export default AssocArrays