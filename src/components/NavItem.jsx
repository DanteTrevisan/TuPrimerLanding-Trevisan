const NavItem = (props) => {
    return(
    <a
        className="rounded p-1 px-3 font-semibold hover:bg-amber-300 text-sky-50 transition duration-500"
        href={props.href}>{props.text}</a>
    );
}

export default NavItem;