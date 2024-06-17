/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import {YouTube} from '../images/yt.svg'
import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="bg-backgroundPrimary text-slate-300 pt-20 pb-5 px-5">
          <div className="container max-w-[1400px]">
            <h5 className="text-xl">
              Nexster is the first ever social networking platform built by a
              Sri Lankan community.
            </h5>

            <h6 className="text-xl mt-10">
              Do you want to be a witness to a remarkable journey.
            </h6>

            <div className="flex items-center mt-10 text-xl">
              <p>Get in touch</p>
              <a
                className=" ml-10"
                href="https://www.linkedin.com/company/nexster-org"
                target="_blank"
              >
                <StaticImage
                  quality={100}
                  src="../images/linkedin.png"
                  alt="linkedin"
                  className="h-8 w-8"
                />
              </a>
              <a
                className="ml-10"
                href="https://www.youtube.com/@NexsterOrg"
                target="_blank"
              >
                <StaticImage
                  quality={100}
                  src="../images/yt.png"
                  alt="youtube"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>

          <p className="text-center mt-10">
            © {new Date().getFullYear()} &middot; Nexster Community
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
