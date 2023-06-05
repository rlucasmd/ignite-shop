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

const ImageContainer = styled("div", {});

const ProductList = styled("section", {});
const Product = styled("div", {});

export {
  ModalContent,
  ModalOverlay,
  CloseButton,
  ModalTitle,
  ProductList,
  Product,
};
