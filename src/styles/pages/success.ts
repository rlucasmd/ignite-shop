import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginTop: 52,
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

export const ImagesContainer = styled("div", {
  display: "flex",
});

export const ImageContainer = styled("div", {
  borderRadius: "50%",
  height: 140,
  width: 140,

  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
  padding: "0.25rem",

  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  image: {
    objectFit: "cover",
  },
  "&:not(:first-child)": {
    marginLeft: -58,
  },
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
});
