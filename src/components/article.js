import React from "react"
import { graphql } from "gatsby"

import GatsbyLayout from "../components/layout"
import SEO from "../components/seo"

import Layout from 'western-up-react/04-templates/Layout/Layout.component';
import PageTitle from "western-up-react/02-molecules/PageTitle/PageTitle.component.js";
import Cta from 'western-up-react/02-molecules/cta/Cta.component';
import Heading from 'western-up-react/01-atoms/text/Heading.component';
import UnorderedList from 'western-up-react/01-atoms/lists/UnorderedList.component';

import Breadcrumbs from '../data/breadcrumbs.data.json';

const IndexPage = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <GatsbyLayout BreadcrumbsData={Breadcrumbs}>
      <SEO title="Home" />
      <Layout
        hasSidebar={1}
        sidebar={
          <>
            <Cta
              heading="Education Podcast"
              buttonText="Subscribe"
            />
            <Heading level={3}>Upcoming Events</Heading>
            <UnorderedList
              items={[
                { content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                },
                {
                  content: "Aliquam tincidunt mauris eu risus.",
                },
                { content: "Vestibulum auctor dapibus neque."},
                { content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." },
              ]}
            />
          </>
        }
      >
        <PageTitle>
          {frontmatter.title}
        </PageTitle>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </GatsbyLayout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
