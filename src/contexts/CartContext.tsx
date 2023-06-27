import { ReactNode, createContext, useEffect, useState } from "react";
const version = process.env.npm_package_version || "0.1.0";
export interface IProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

const localStorageCartKey = `ignite-shop@cart-${version}`;

interface CartContextProps {
  cart: IProduct[];
  isProductAlreadyInCart: (productId: string) => boolean;
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (productId: string) => void;
  totalCartPrice: number;
}
interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storageCartItens = localStorage.getItem(localStorageCartKey);
    if (!storageCartItens) return;
    const cartItens = JSON.parse(storageCartItens);
    setCart(cartItens);
  }, []);

  useEffect(() => {
    console.log(cart);
    localStorage.setItem(localStorageCartKey, JSON.stringify(cart));
  }, [cart]);

  function isProductAlreadyInCart(productId: string) {
    return cart.some((product) => product.id === productId);
  }

  function addProductToCart(product: IProduct) {
    if (!isProductAlreadyInCart(product.id)) {
      setCart((state) => [...state, product]);
    }
  }
  function removeProductFromCart(productId: string) {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart((state) => newCart);
  }
  const totalCartPrice = cart.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isProductAlreadyInCart,
        addProductToCart,
        removeProductFromCart,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
