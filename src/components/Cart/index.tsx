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

function Cart() {
  const { cart, totalCartPrice } = useCart();
  const moneyFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format;
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
                  <button>Remover</button>
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
            <button>Finalizar compra</button>
          </CartFooter>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
export { Cart };
