import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GatsbyLayout from "../components/layout"
import SEO from "../components/seo"

import Heading from "western-up-react/01-atoms/text/Heading.component";
import TextWithImage from "western-up-react/02-molecules/TextWithImage/TextWithImage.component";
import Grid from "western-up-react/03-organisms/grid/Grid.component.js";
import NewsCard from "western-up-react/02-molecules/cards/NewsCard/NewsCard.component";
import Hr from "western-up-react/01-atoms/hr/Hr.component";
import Cta from 'western-up-react/02-molecules/cta/Cta.component';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroPlaceholderImage: file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentPlaceholderImage: file(relativePath: { eq: "sitting.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GatsbyLayout heroImage={data.heroPlaceholderImage.childImageSharp.fluid} heroTitle="#1 Fake Law School">
      <SEO title="Home" />
      <Heading level="2">One of the Nation's Great Universities</Heading>
      <TextWithImage
        content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        image={data.contentPlaceholderImage.childImageSharp.fluid}
      />
      <Grid gridLabel="Latest Articles" gridType="card">
        <NewsCard
          additionalClasses={['grid__item']}
          outputImage={true}
          image={{
            alt: 'People',
            src: 'https://picsum.photos/id/987/480/300',
          }}
          heading="Assessment record repeat whiteboard, define reaction Moodle."
          subheading="Knowles Cognitive Information Processing reaction label draft training"
          linkText="Read more"
          linkUrl="/articles/assessment-record/"
          body="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat."
          tag="People"
          date="2119-01-09T12:00:00"
        />
        <NewsCard
          additionalClasses={['grid__item']}
          outputImage={true}
          image={{
            alt: 'Nature',
            src: 'https://picsum.photos/id/678/480/300',
          }}
          heading="Hike the Hills and Valleys of PA"
          subheading="Visiting Our National Parks"
          body="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo."
          tag="Nature"
          date="2119-04-11T12:00:00"
        />
        <NewsCard
          additionalClasses={['grid__item']}
          outputImage={true}
          image={{
            alt: 'Animals',
            src: 'https://picsum.photos/id/654/480/300',
          }}
          heading="Going Ape for the Environmental Job Fair"
          subheading="Pittsburgh Zoo Hosts Environmental Job Fair in August"
          body="Tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.. Nulla quis lorem ut libero malesuada feugiat."
          tag="Animals"
          date="2119-12-09T12:00:00"
        />
      </Grid>
      <Hr />
      <Cta
        modifiers={['home']}
        heading="World Class Library System"
        buttonText="Visit in Virtual Reality"
      />
    </GatsbyLayout>
  );
}

export default IndexPage
