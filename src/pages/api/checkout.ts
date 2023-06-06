import { IProduct } from "@/contexts/CartContext";
import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as { products: IProduct[] };
  console.log(products);
  // const { priceId } = req.body;
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method is not allowed" });
  }
  if (!products) {
    return res.status(400).json({ error: "Price not found" });
  }
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
    cancel_url: cancelUrl,
    success_url: successUrl,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
