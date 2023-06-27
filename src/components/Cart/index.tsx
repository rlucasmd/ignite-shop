import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import {
  CloseButton,
  ModalContent,
  ModalTitle,
  ProductList,
  Product,
  ImageContainer,
  CartDetailsFooter,
  ProductDetails,
  CartFooter,
} from "./styles";
import { X } from "phosphor-react";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

function Cart() {
  const { cart, totalCartPrice, removeProductFromCart } = useCart();
  const moneyFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format;

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        products: cart,
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      console.error(err);
      setIsCreatingCheckoutSession(false);
    }
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={cart.length} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalContent>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <ModalTitle>Sacola de compras</ModalTitle>
          <ProductList>
            {cart.length === 0 && (
              <div>
                <h2>O carrinho está vazio</h2>
              </div>
            )}
            {cart.map((product) => (
              <Product key={product.id}>
                <ImageContainer>
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={100}
                    height={93}
                  />
                </ImageContainer>
                <ProductDetails>
                  <p>{product.name}</p>
                  <strong>{product.price}</strong>
                  <button onClick={() => removeProductFromCart(product.id)}>
                    Remover
                  </button>
                </ProductDetails>
              </Product>
            ))}
          </ProductList>
          <CartFooter>
            <CartDetailsFooter>
              <div>
                <span>Quantidade</span>
                <p>{cart.length === 1 ? "1 item" : `${cart.length} itens`}</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{moneyFormat(totalCartPrice / 100)}</p>
              </div>
            </CartDetailsFooter>
            <button
              disabled={isCreatingCheckoutSession || cart.length <= 0}
              onClick={handleCheckout}
            >
              Finalizar compra
            </button>
          </CartFooter>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
export { Cart };
