import React from "react"
import { graphql } from "gatsby"

import GatsbyLayout from "../components/layout"
import SEO from "../components/seo"

import Cta from 'western-up-react/02-molecules/cta/Cta.component';
import Heading from 'western-up-react/01-atoms/text/Heading.component';
import UnorderedList from 'western-up-react/01-atoms/lists/UnorderedList.component';
import Grid from 'western-up-react/03-organisms/grid/Grid.component';
import Card from 'western-up-react/02-molecules/cards/Card/Card.component';

import Breadcrumbs from '../data/breadcrumbs.data.json';

const IndexPage = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <GatsbyLayout
      BreadcrumbsData={Breadcrumbs}
      pageTitle={frontmatter.title}
      sidebarTrue={1}
      sidebarContents={
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
      <SEO title={frontmatter.title} />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Grid gridLabel="Development label repeat mints select pedagogy whiteboard click next asynchronous learning record instructional design" gridType="card">
        <Card
          additionalClasses={['grid__item']}
          outputImage={true}
          image={{
            alt: 'People',
            src: 'https://picsum.photos/id/987/480/300',
          }}
          heading="Assessment ipsum laboris incididunt list in consequat"
          subheading="Person of Interest"
          linkText="Continue Reading"
          linkUrl="#"
        >
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh.
        </Card>
        <Card
          additionalClasses={['grid__item']}
          outputImage={true}
          image={{
            alt: 'Nature',
            src: 'https://picsum.photos/id/678/480/300',
          }}
          heading="Aliqua irure training, ullamco deserunt ad"
          subheading=" Some pretty sweet nature"
        >
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo.
        </Card>
        <Card
          additionalClasses={['grid__item']}
          outputImage={true}
          image={{
            alt: 'Animals',
            src: 'https://picsum.photos/id/654/480/300',
          }}
          heading="SCORM anim assessment mints commodo"
          subheading="Awesome animals"
        >
          Tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
        </Card>
      </Grid>
      <Cta
        heading="See What Campus Has For You"
        buttonText="Request a Campus Visit"
      />
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
