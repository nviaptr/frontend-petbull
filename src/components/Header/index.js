import Logo from "./logo";
import ButtonText from "../Button";
import Navbar from "../Navbar";
import "./header.css";
export default function Header() {
  const handlerClickLogin = () => alert("Ini Login");
  const handlerClickRegister = () => alert("Ini Register");
  return (
    <header>
      <Logo />
      <Navbar />
      <ButtonText nama="Login" tesClick={handlerClickLogin} />
      <ButtonText nama="Register" tesClick={handlerClickRegister} className="register-btn" />
    </header>
  );
}

