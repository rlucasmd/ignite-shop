import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  ProductList,
  Product,
  ImageContainer,
} from "./styles";
import { X } from "phosphor-react";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

function Cart() {
  const { cart } = useCart();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={cart.length} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
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
                    width={102}
                    height={94}
                  />
                </ImageContainer>
                <div>
                  <div>
                    <span>{product.name}</span>
                    <strong>{product.price}</strong>
                  </div>
                  <button>Remover</button>
                </div>
              </Product>
            ))}
          </ProductList>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { Cart };
