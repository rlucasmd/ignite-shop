import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "./styles";
import { ComponentProps, forwardRef, ElementRef } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number;
};

const CartButton = forwardRef<
  ElementRef<typeof CartButtonContainer>,
  CartButtonProps
>(({ quantity = 0, ...rest }, ref) => (
  <CartButtonContainer {...rest} ref={ref}>
    {quantity > 0 && <span>{quantity} </span>}
    <Handbag weight="bold" />
  </CartButtonContainer>
));

CartButton.displayName = "Cart button";

export { CartButton };
