import { Link } from "react-router";

const Logo = () => {
    return (
        <Link to={"/"}>
            <img src="/images/logo.png" className="w-[200px]" alt="ajibola atoyebi" />
        </Link>
    );
}

export default Logo;