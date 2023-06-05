import { HeaderContainer } from "./styles";
import logoImage from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Cart } from "../Cart";

function Header() {
  const { pathname } = useRouter();
  const showCartButton = pathname !== "/success";
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImage} alt="" />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}

export { Header };
