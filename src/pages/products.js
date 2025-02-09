import React from "react"
import { graphql } from "gatsby"

const ProductsPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Pancake Cat Merch</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(({ node }) => (
          <div key={node.title} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={node.featuredImage?.originalSrc}
              alt={node.featuredImage?.altText || node.title}
              className="rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{node.title}</h2>
            <p className="text-gray-600">{node.description}</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
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
