import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Start" />
    <section className="welcome cursor">
      <article className="LogoFontWrapper">
        <h1 className="LogoFont">Anzengruberin</h1>
        <h1 className="LogoFont2">Anze</h1>
      </article>
      <article className="welcomeintro">
        <div>
        <p>Kneipencafé & Coworking in der<br/><br/><a href="https://goo.gl/maps/XAzSkJpCaSU87U6d9">Anzengruberstr 3<br/>12043 Berlin</a><br/><br/>Öffnungszeiten:<br/>
Di&thinsp;&&thinsp;Mi: 10&thinsp;&ndash;&thinsp;00&thinsp;Uhr<br/>
Do&thinsp;&&thinsp;Fr: 10&thinsp;&ndash;&thinsp;02&thinsp;Uhr<br/>
Sa: 14&thinsp;&ndash;&thinsp;02&thinsp;Uhr<br/>
So&thinsp;&&thinsp;Mo: Ruhetage</p>
        </div>
      </article>
      <article className="contactintro">
        <p><a href="mailto:anzengruberinnen@gmail.com">anzengruberinnen@gmail.com</a><br/><a href="https://www.instagram.com/anzengruberin/">Instagram</a>, <a href="https://www.facebook.com/anzengruberin/">Facebook</a></p>
      </article>
    </section>
  </Layout>
)

export default IndexPage
