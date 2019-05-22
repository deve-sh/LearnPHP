/*
  Web App For PHP Tutorials.
  @author : Devesh Kumar
  Built Using : Gatsby
*/

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroComponent from '../components/introcomponent';

// Sub-Components

const Tile = (props) => <div className='topictile'>{props.children}</div>;

// List of Tiles.

const TileList = (props) => {
  return (
    <div className='titelist'>
      <Link to='/gettingStarted'><Tile>Getting Started</Tile></Link>
      <Link to='/helloworld'><Tile>Hello World</Tile></Link>
      <Link to='/variables'><Tile>Variables and Operators</Tile></Link>
      <Link to='/io'><Tile>Input/Output</Tile></Link>
      <Link to='/comments'><Tile>Comments</Tile></Link>
      <Link to='/strings'><Tile>Strings</Tile></Link>
      <Link to='/conditionals'><Tile>Conditionals</Tile></Link>
      <Link to='/basicarrays'><Tile>Basic Arrays</Tile></Link>
      <Link to='/assocarrays'><Tile>Associative Arrays</Tile></Link>
      <Link to='/functions'><Tile>Functions</Tile></Link>
    </div>
  );
}

// Main Component

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroComponent heading={"</> Get Started with PHP!"} desc={"A tutorial made by learners for learners."}>
      <a href='#list'><span className='introbutton' style={{boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,borderRadius:`0.15rem`}}>Get Started</span></a>
    </IntroComponent>
    <div id='list' style={{maxWidth: 960,margin: `0 auto`,padding: `2rem 1rem`}}>
    <p>Your Guide to Learning the basics of PHP from Scratch.</p>

    <p><b>PHP</b> is a general-purpose programming language, and a great programming language. Even as your first programming language. It is a language built to be used primarily in the backend of websites. It powers a vast chunk of the websites of the web.</p>

    <p>Hence, it is actually a good idea to know at least its basics, given that we use the web daily in some form or another. Given that some of the biggest websites like Facebook, Airbnb use it. </p>

    <p><b>Note</b> : You need to have a great amount of knowledge of HTML before you start.</p>
    <TileList/>
    </div>
  </Layout>
)

export default IndexPage