import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Impressum</h1>
    <p>Anzengruberin. Helga-Mari Steininger, Katharina Wiegmann, Lysann Windisch GbR<br /><br /> 
    Anzengruberstr. 3<br />
    12043 Berlin</p>
    <Link to="/">Zurück</Link>
  </Layout>
)

export default SecondPage
