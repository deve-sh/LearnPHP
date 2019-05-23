// Basic Arrays in PHP

import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from '../components/codeblock';
import Linker from '../components/linker';
import IntroComponent from "../components/introcomponent";

const BasicArrays = () => {
    return (
        <Layout>
            <SEO title={"Basic Arrays"}/>
            <IntroComponent heading={"Arrays"} desc={"Reduce the work load."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>
                    There will come a time when you need a lot of variables in a program. In such cases, it can become overwhelming to handle so many variables.
                </p>

                <p>
                    Arrays are variables that can hold more than one value.
                    <br/><br/>
                    To create arrays, we just specify their name like a normal variable and then enter the values to be stored inside it seperated by commas, wrapped inside square brackets [].
                    <br/><br/>
                    For example, to store numbers from 0 to 9. Instead of creating 10 variables, we can just create an array named numbers : 
                </p>

                <CodeBlock>
                    {"<?php\n\t\$numbers = [0,1,2,3,4,5,6,7,8,9];\n?>"}
                </CodeBlock>

                <p>You can put any type of values inside an array : </p>

                <CodeBlock>
                    {"<?php\n\t"}
                    $arr = ["String", 1, true, 1.4];
                    {"\n?>"}
                </CodeBlock>

                <h3>
                    Finding Length of an array.
                </h3>
                <p>
                    Its a good idea to know how to find the number of elements are inside an array. That is found by using the <code>count</code> function.
                    <br/>
                    <br/>
                    For example : <code>count($arr)</code> returns the number of elements inside the array $arr.
                </p>

                <h3>Accessing Values inside an array.</h3>

                <p>Well, we have created an array, now let's learn how to access the elements. The counting of elements inside an array starts from 0 (I.E : Index 0).</p>
                <p>To access the first element of an array we just write the name of the variable and after it we add square brackets in front of them and in those brackets, we add the index of the element. In this case : 0.</p>

                <CodeBlock>
                    {"<?php\n\t"}
                        $arr = ['a', 'b', 'c', 'd', 'e', 5];
                    {"\n\t"}
                        echo $arr[0];{"\t"}// Prints a.
                    {"\n\t"}echo $arr[3];{"\t"}// Prints d. 
                    {"\n?>"}
                </CodeBlock>

                <h3>Printing an entire array.</h3>
                <p>Echo statements don't work entirely with an array. Try <code>echo $arr;</code> and you shall see.</p>
                <p>In that case, we use <code>print_r</code> function.</p>

                <CodeBlock>
                    print_r($arr);{"\t"}// Prints array with index and value of elements.
                </CodeBlock>

                <h3>Merging two arrays</h3>

                <p>The simple plus or concatenation operator do not work on arrays. To merge two arrays together we use the <code>array_merge</code> function.</p>

                <CodeBlock>
                    $arr = array_merge($arr1,$arr2);{"\t"}Merges $arr1 and $arr2 together.
                </CodeBlock>
                <Linker previousLabel={"Conditionals"} nextLabel={"Assoc. Arrays"} previous={"/conditionals"} next={"/assocarrays"}/>
            </div>
        </Layout>
    )
}

export default BasicArrays