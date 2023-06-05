import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "./styles";
import { ComponentProps, forwardRef } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number;
};

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ quantity, ...rest }, ref) => (
    <CartButtonContainer {...rest} ref={ref}>
      {quantity && quantity > 0 && <span>{quantity} </span>}
      <Handbag weight="bold" />
    </CartButtonContainer>
  ),
);

CartButton.displayName = "Cart button";

export { CartButton };
