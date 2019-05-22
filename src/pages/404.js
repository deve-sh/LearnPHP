import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import IntroComponent from "../components/introcomponent";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <IntroComponent heading={"404!"} desc={"We could not found what you were looking for."}>
        <Link to='/'><span className='introbutton' style={{boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,borderRadius:`0.15rem`}}>Go Home</span></Link>
    </IntroComponent>
  </Layout>
)

export default NotFoundPage
