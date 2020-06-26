/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "western-up-react/04-templates/Layout/Layout.component.js";

import MenuData from '../data/menu.data.json';
import FooterData from '../data/footer.data.json';
import Hero from "western-up-react/02-molecules/Hero/Hero.component.js";

import "./styles.scss";

const GatsbyLayout = ({ children, BreadcrumbsData, heroImage, heroTitle, sidebarTrue, sidebarContents, pageTitle }) => {
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
      <Layout
        breadcrumbs={BreadcrumbsData}
        menu={MenuData}
        footerItems={FooterData}
        hasSidebar={sidebarTrue}
        sidebar={sidebarContents}
        hero={heroImage && 
          <Hero image={heroImage} heading={heroTitle} />
        }
        title={pageTitle}
      >
        {children}
      </Layout>
  )
}

GatsbyLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GatsbyLayout
