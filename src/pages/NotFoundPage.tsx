import { Link } from "react-router";
import Button from "../components/Button";
import Logo from "../components/Logo";

const NotFoundPage = () => {
    return (<div className="flex flex-col gap-y-8 justify-center items-center h-screen">
        <div className="w-full text-left">
            <Logo />
        </div>
        <div>
            <img src="/images/404.png" alt="lost in space" />
        </div>
        <h2>Oops!</h2>
        <p className="text-[#9AA7C9]">
            Seems you stumbled in here along the way.
            There is nothing to be scared of. <br />
            Use the button below to go back to the homepage.
        </p>
        <Link to="/">
            <Button>Back to homepage</Button>
        </Link>
    </div>);
}

export default NotFoundPage;