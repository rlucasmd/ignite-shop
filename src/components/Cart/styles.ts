import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

const ModalContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  width: "30rem",
  padding: "3rem",
  paddingTop: "3.5rem",
  background: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
});
const CloseButton = styled(Dialog.DialogClose, {
  position: "absolute",
  top: 28,
  right: 28,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "$gray300",
});
const ModalTitle = styled(Dialog.Title, {
  color: "$gray100",
  fontSize: "$lg",
  fontWeight: 700,
  marginBottom: "2rem",
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "6.3125rem",
  height: "5.8125rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,

  img: {
    objectFit: "cover",
  },
});

const ProductList = styled("section", {
  marginTop: "2rem",
  display: "flex",
  gap: "1.5rem",
  flexDirection: "column",
  overflowY: "auto",
  flex: 1,
});
const Product = styled("div", {
  display: "flex",
  gap: "1.5rem",
  justifyContent: "flex-start",
});

const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  p: {
    color: "$gray300",
    size: "$md",
  },

  strong: {
    color: "$gray100",
    size: "$md",
    marginTop: 8,
    fontWeight: 700,
  },

  button: {
    cursor: "pointer",
    marginTop: "auto",
    border: "none",
    background: "transparent",
    color: "$green500",
    width: "max-content",
    fontSize: "$sm",
    fontWeight: 700,
    transition: "color 0.3s",

    "&:hover": {
      color: "$green300",
    },
  },
});

const CartFooter = styled("footer", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",

  button: {
    width: "100%",
    background: "$green300",
    color: "$white",
    fontSize: "$md",
    fontWeight: 700,
    borderRadius: 8,
    border: "none",
    height: "4.3125rem",
    cursor: "pointer",
    transition: "background-color 0.3s",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green500",
    },
  },
});

const CartDetailsFooter = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  margin: "55px 0",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    p: {
      fontSize: "$md",
      color: "$gry300",
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },

      p: {
        color: "$gray100",
        fontSize: "$xl",
      },
    },
  },
});

export {
  ModalContent,
  CloseButton,
  ModalTitle,
  CartFooter,
  CartDetailsFooter,
  ProductList,
  Product,
  ProductDetails,
  ImageContainer,
};
