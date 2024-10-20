import Brand from "./Brand";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
    return(
    <header className="container grid grid-cols-10 bg-red-900 text-sky-50 fixed w-full top-0 z-50 h-12">
        <Brand />
        <NavBar />
        <CartWidget />
    </header>
    );
}

export default Header;