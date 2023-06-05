import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

const ModalOverlay = styled(Dialog.Overlay, {});
const ModalContent = styled(Dialog.Content, {
  display: "flex",
  flexDirection: "column",
  width: 480,
  padding: 48,
  background: "$gray800",
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
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
  fontWeight: "bold",
});

const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 102,
  height: 94,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  border: "none",
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
});
const Product = styled("div", {
  display: "flex",
  gap: "1.5rem",
  justifyContent: "flex-start",

  ">div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ">div": {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      span: {
        color: "$gray100",
        size: "$md",
      },
      strong: {
        color: "$gray100",
        size: "$md",
      },
    },
    ">button": {
      border: "none",
      background: "transparent",
      color: "$green500",
      fontWeight: "bold",
      marginRight: "auto",
      cursor: "pointer",
    },
  },
});

export {
  ModalContent,
  ModalOverlay,
  CloseButton,
  ModalTitle,
  ProductList,
  Product,
  ImageContainer,
};
