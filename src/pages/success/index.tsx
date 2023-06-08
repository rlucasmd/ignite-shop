import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | ignite-shop</title>
        <meta name="robot" content="noindex"></meta>
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} width={130} height={132} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1>Compra Efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          {products.length === 1 ? (
            <strong>{products[0].name}</strong>
          ) : (
            `Compra de ${products.length}`
          )}{" "}
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const customerName = session.customer_details?.name;
  // const product = session.line_items?.data[0].price?.product as Stripe.Product;
  const products = session.line_items?.data.map((product) => {
    return product.price?.product as unknown as Stripe.Product;
  });

  return {
    props: {
      customerName,
      // product: {
      //   name: product.name,
      //   imageUrl: product.images[0],
      // },
      products: products?.map((p) => ({
        name: p.name,
        imageUrl: p.images[0],
      })),
    },
  };
};
