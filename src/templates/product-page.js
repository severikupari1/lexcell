import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pricing from '../components/Pricing'
import MarkdownContent from "../components/MardownContent";

export const ProductPageTemplate = ({
  heading,
  description,
  pricing,
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <MarkdownContent content={ description }/>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">

              <h2 className="has-text-weight-semibold is-size-2">
                <MarkdownContent content={pricing.heading}/>
              </h2>

              <p className="is-size-5">
                  <MarkdownContent content={pricing.description}/>
              </p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
        pricing {
          heading
          description
          plans {
            description
            plan
            price
          }
        }
      }
    }
  }
`
