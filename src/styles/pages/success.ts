import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },
  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 570,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "$lg",
    fontWeight: "bold",

    color: "$green500",

    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 138,
  height: 145,

  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  image: {
    objectFit: "cover",
  },
});
