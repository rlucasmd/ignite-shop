import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

export const CartButton = styled("button", {
  cursor: "pointer",
  display: "flex",
  background: "#202024",
  padding: 12,
  border: "none",
  borderRadius: 8,
  width: 48,
  height: 48,
  justifyContent: "center",
  alignItems: "center",
});
