// src/app/api/shopify/products/route.ts

export const runtime = 'edge' // Enable Edge Runtime for faster response time

/**
 * Shopify Product API Proxy
 * --------------------------
 * This API route handles two use cases:
 * - GET /api/shopify/products             → Fetch multiple products
 * - GET /api/shopify/products?handle=xyz → Fetch a single product by handle
 * 
 * Accepts optional query params:
 * - handle: string  → fetch a specific product
 * - count: number   → number of products to fetch (default: 3)
 */

export async function GET(request: Request) {
  // Env vars
  const SHOPIFY_DOMAIN = process.env.SHOPIFY_DOMAIN!
  const STOREFRONT_TOKEN = process.env.SHOPIFY_TOKEN!

  const { searchParams } = new URL(request.url)
  const handle = searchParams.get('handle')
  const count = searchParams.get('count') || '3'

  let query = ''

  // --------------------------------------------
  // Build GraphQL Query
  // --------------------------------------------

  if (handle) {
    // Fetch single product by handle
    query = `
      {
        productByHandle(handle: "${handle}") {
          id
          title
          description
          handle
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                image {
                  url
                  altText
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    `
  } else {
    // Fetch a list of products
    query = `
      {
        products(first: ${count}) {
          edges {
            node {
              id
              title
              description
              handle
              featuredImage {
                url
                altText
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    title
                    image {
                      url
                      altText
                    }
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  }

  // --------------------------------------------
  // Fetch from Shopify Storefront API
  // --------------------------------------------

  try {
    const response = await fetch(`${SHOPIFY_DOMAIN}/api/2023-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query }),
    })

    const json = await response.json()

    // If specific product is requested
    if (handle) {
      return new Response(
        JSON.stringify({ product: json.data.productByHandle }),
        {
          headers: { 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    // Return multiple products
    return new Response(JSON.stringify(json.data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error('[Shopify API Error]', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch data from Shopify' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
}
