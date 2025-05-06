// /src/app/api/products/route.ts
export const runtime = 'edge'; // می‌تونی حذف کنی اگر نمی‌خوای روی edge اجرا بشه

export async function GET() {
  const SHOPIFY_DOMAIN = "https://xrxnq7-16.myshopify.com";
  const STOREFRONT_TOKEN = "67ae2aa6cb19d23b206e29fd651e6b6b";

  const query = `
    {
      products(first: 3) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              url
              altText
            }
          }
        }
      }
    }
  `;

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
