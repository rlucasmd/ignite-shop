import { GetStaticProps } from "next";
import Image from "next/image";

import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";

import {
  ArrowButtonLeft,
  ArrowButtonRight,
  HomeContainer,
  Product,
} from "@/styles/pages/home";
import { stripe } from "@/lib/stripe";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setSliderLoaded(true);
    },
  });
  console.log(instanceRef.current?.track.details.slides.length);

  return (
    <>
      <Head>
        <title>Home | ignite-shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              className="keen-slider__slide"
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Image src={product.imageUrl} alt="" width={520} height={480} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          );
        })}
        {sliderLoaded && instanceRef.current && (
          <>
            <ArrowButtonLeft
              onClick={(e) => {
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            >
              <CaretLeft size={48} weight="bold" />
            </ArrowButtonLeft>
            <ArrowButtonRight
              onClick={(e) => {
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current!.track.details.slides.length - 1
              }
            >
              <CaretRight size={48} weight="bold" />
            </ArrowButtonRight>
          </>
        )}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
