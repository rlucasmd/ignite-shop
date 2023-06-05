import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  marginLeft: "auto",
  minHeight: "656",
  position: "relative",
  marginBottom: "2rem",
});

export const Product = styled(Link, {
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  // padding: "0.25rem",
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minWidth: "520px",
  height: "556px",

  img: {
    objectFit: "cover",
  },

  overflow: "hidden",

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ">div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "2rem",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
});

const DefaultButton = styled("button", {
  border: 0,
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  height: "100%",
  width: 136,
  alignItems: "center",

  transition: "opacity 0.3s",
  color: "$gray300",
  // padding: "0 1rem",

  "&:disabled": {
    opacity: 0,
  },
});

export const ArrowButtonLeft = styled(DefaultButton, {
  position: "absolute",
  paddingLeft: 16,
  left: 0,
  background:
    "linear-gradient(270deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
});
export const ArrowButtonRight = styled(DefaultButton, {
  position: "absolute",
  paddingRight: 16,
  justifyContent: "flex-end",
  background:
    "linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
  right: 0,
});
