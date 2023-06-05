import { styled } from "@/styles";

const CartButtonContainer = styled("button", {
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",

  ">span": {
    position: "absolute",
    background: "$green500",
    color: "$white",
    borderRadius: "50%",
    top: "calc(-1.5rem / 2)",
    right: "calc(-1.5rem / 2)",
    display: "flex",
    width: "1.5rem",
    height: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    outline: "3px solid $gray900",
  },

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray500",
      },
      green: {
        background: "$green500",
        color: "$white",

        "&:not(:disabled):hover": {
          backgroundColor: "$green300",
        },
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",
        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",

        svg: {
          fontSize: 22,
        },
      },
    },
  },
  defaultVariants: {
    color: "gray",
    size: "medium",
  },
});

export { CartButtonContainer };
