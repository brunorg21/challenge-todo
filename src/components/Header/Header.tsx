import Logo from "../../assets/Logo.svg";
import * as S from "./style";

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />
    </S.HeaderContainer>
  );
}
