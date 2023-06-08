import { styled } from "@/styles";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",

  variants: {
    centered: {
      true: {
        justifyContent: "center",
      },
      false: {
        justifyContent: "space-between",
      },
    },
  },
});
