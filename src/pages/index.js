import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Start" />
    <section className="welcome">
      {/* <h1>Coming soon!</h1> */}
      <p>Willkommen auf der Website der Anzengruberin! Wir brauchen leider noch ein bisschen. Bis ganz bald!</p>
      <p>Wenn ihr vorher schonmal Kontakt mit uns aufnehmen möchtet, schreibt eine Mail an: <a href="mailto:anzengruberinnen@gmail.com">anzengruberinnen@gmail.com</a></p>
      <Link to="/page-2/">Impressum</Link>
    </section>
  </Layout>
)

export default IndexPage
