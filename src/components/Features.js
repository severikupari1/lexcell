import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { HTMLContent } from "./Content";
import MarkdownContent from "./MardownContent";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered mb-2">
            <div
              style={{
                width: '200px',
                display: 'inline-block',
                filter: 'grayscale(70%)'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <MarkdownContent content={item.text}></MarkdownContent>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
