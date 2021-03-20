import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from "lodash";

const Pricing = ({ data }) => {
    const chunks = chunk(data,4);
    return (
        chunks.map((chunk) => (
            <div className="tile is-ancestor">
                {
                    chunk.map((price) => (
                        <div key={ price.plan } className="tile is-parent">
                            <div className="tile is-child">
                                <h4 className="has-text-centered has-text-weight-semibold">
                                    { price.plan }
                                </h4>
                                <h2 className="is-size-2 margin-top-0 has-text-weight-bold has-text-primary has-text-centered">
                                    { price.price }
                                </h2>
                                <p className="has-text-weight-semibold">{ price.description }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        ))
    );
}

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
