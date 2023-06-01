import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logoImage from "../assets/logo.svg";
import Image from "next/image";
import { CartButton, Container, Header } from "@/styles/pages/app";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt="" />
        <CartButton>
          <Handbag size={24} color="#8D8D99" weight="bold" />
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
