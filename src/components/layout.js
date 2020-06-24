/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SiteHeader from "western-up-react/03-organisms/site/SiteHeader/SiteHeader.component.js";
import SiteFooter from "western-up-react/03-organisms/site/SiteFooter/SiteFooter.component.js";

import MenuData from '../data/menu.data.json';
import FooterData from '../data/footer.data.json';
import Hero from "western-up-react/02-molecules/Hero/Hero.component.js";

import "./styles.scss";
import "./layout.css"

const Layout = ({ children, BreadcrumbsData, heroImage, heroTitle }) => {
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
      <SiteHeader breadcrumbs={BreadcrumbsData} menu={MenuData} />
      {heroImage && 
        <Hero image={heroImage} heading={heroTitle} />
      }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <SiteFooter items={FooterData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
