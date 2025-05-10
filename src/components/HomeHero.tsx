import { Link } from "react-router";
import Button from "./Button";
import EmailLink from "./EmailLink";
import GitHubLink from "./GitHubLink";
import LinkedInLink from "./LinkedInLink";
import XLink from "./XLink";

const HomeHero = () => {
    return (<section id="hero" className="min-h-[340px] py-10 md:py-30 flex flex-col items-center md:items-start justify-center gap-y-8 md:pr-40 bg-[url('/images/hero-bg.png')]">
        <h1 className="w-full text-center md:text-left text-[#BDC5DB] bg-y ellow-50">
            Hello, I&apos;m <span className="text-[#61F8D5]">Ajibola Atoyebi</span>.
            <br />
            A Full-Stack Web and Mobile Developer.
        </h1>
        <h6 className="md:w-1/2 text-center md:text-left leading-7">
            I specialize in creating amazing digital experiences by combining excellent
            front-end development skills with a solid back-end structure.
        </h6>
        <Link target="__blank" to="https://drive.google.com/file/d/1nK1PVQ29jDxizWrQKE9tCtsDuPip6Uer/view?usp=sharing">
            <Button>
                View my resume
            </Button>
        </Link>
        <div className="flex items-center gap-x-12 mt-5">
            <GitHubLink />
            <XLink link="https://x.com/__jibs" />
            <LinkedInLink link="https://www.linkedin.com/in/ajibola-atoyebi/" />
            <EmailLink link="mailTo:ajibola03official@gmail.com" />
        </div>
    </section>);
}

export default HomeHero;