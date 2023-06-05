import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  ProductList,
  Product,
} from "./styles";
import { X } from "phosphor-react";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

function Cart() {
  const { cart } = useCart();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={1} />
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
                <Image src={product.imageUrl} alt="" width={102} height={94} />
                <div>
                  <span>{product.name}</span>
                  <strong>{product.price}</strong>
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
