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
            <IntroComponent heading={"Variables"} desc={"Pass info around."}/>
            <div style={{margin:`0 auto`,maxWidth: 960,padding: `2rem 1rem`}}>
                <p>At some point, in fact, very early in programming you would be tired of entering values for stuff yourself. (Called Hardcoding of values.)</p>/p>

            </div>
        </Layout>);
}

export default Variables