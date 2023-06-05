import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logoImage from "../assets/logo.svg";
import Image from "next/image";
import { Container } from "@/styles/pages/app";
import { Handbag } from "phosphor-react";
import { CartContextProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
