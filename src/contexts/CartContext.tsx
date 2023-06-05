import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

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
