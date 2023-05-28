import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  console.log(query);
  return <h1>Products</h1>;
}
