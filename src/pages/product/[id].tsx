import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
// import { useRouter } from "next/router";
import imageDefault from "../../assets/camisetas/1.png";
import Image from "next/image";

export default function Product() {
  // const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={imageDefault} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores
          repudiandae dolorem autem facere porro qui inventore? Magni
          repudiandae amet ipsam aut culpa voluptas aperiam voluptatem quis
          quod. Architecto, et.
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
