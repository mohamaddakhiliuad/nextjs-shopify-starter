// /src/app/api/products/route.ts
export const runtime = 'edge'; // می‌تونی حذف کنی اگر نمی‌خوای روی edge اجرا بشه

export async function GET(request: Request) {
  const SHOPIFY_DOMAIN = process.env.SHOPIFY_DOMAIN!;
  const STOREFRONT_TOKEN = process.env.SHOPIFY_TOKEN!;
  const { searchParams } = new URL(request.url)

  const count = searchParams.get('count') || '3'
  const collection = searchParams.get('collection') || null


  const query = `
  {
    products(first: ${count}) {
      edges {
        node {
          id
          title
          description
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
        }
      }
    }
  }
`


  const response = await fetch(`${SHOPIFY_DOMAIN}/api/2023-07/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();

  return new Response(JSON.stringify(json.data), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
