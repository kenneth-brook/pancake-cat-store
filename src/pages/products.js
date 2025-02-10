import React from "react"
import { graphql } from "gatsby"
import "../styles/global.css"

const ProductsPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Pancake Cat Merch
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(({ node }) => (
          <div
            key={node.title}
            className="bg-white rounded-2xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl p-4"
          >
            <img
              src={node.featuredImage?.originalSrc}
              alt={node.featuredImage?.altText || node.title}
              className="rounded-md object-cover h-48 w-full"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              {node.title}
            </h2>
            <p className="text-gray-600 mt-2">{node.description}</p>
            <button className="mt-4 w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allShopifyProduct(filter: { tags: { in: ["Pancake-Cat"] } }) {
      edges {
        node {
          title
          description
          tags
          featuredImage {
            originalSrc
            altText
          }
        }
      }
    }
  }
`

export default ProductsPage
