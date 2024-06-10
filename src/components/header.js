import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-backgroundSecondary drop-shadow-lg">
      <div className="container flex items-center justify-between">
        <StaticImage
          src="../images/logo.png"
          alt="logo"
          className="h-16 w-16"
        />
        {/* add nexter text. make logo bigger */}
        <div className="flex items-center gap-x-6">
          <a href="#">
            <div className="hover:border-2 text-white py-1 px-5 rounded-lg">
              Sign In
            </div>
          </a>
          <a href="#">
            <div className="border-2 bg-white hover:bg-transparent hover:text-white py-1 px-5 rounded-lg">
              Sign Up
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
