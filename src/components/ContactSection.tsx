import { Link } from "react-router";
import Button from "./Button";
import EmailLink from "./EmailLink";
import GitHubLink from "./GitHubLink";
import LinkedInLink from "./LinkedInLink";
import XLink from "./XLink";

const ContactSection = () => {
    return (
        <section id="contact" className="mt-32 mb-16 flex flex-col items-center justify-center gap-5">
            <h2>Contact Me</h2>
            <h3 className="w-1/2 mx-auto">
                I&apos;m currently available for full-time or freelance opportunities. <br />
                However, if you have a question or you just want to say hi, <br />
                don&apos;t hesitate to contact me.
            </h3>
            <Link to="mailTo:ajibola03official@gmail.com">
                <Button>Get in touch</Button>
            </Link>
            <div className="flex items-center gap-x-12 mt-5">
                <GitHubLink />
                <XLink link="https://x.com/__jibs" />
                <LinkedInLink />
                <EmailLink />
            </div>
        </section>
    );
}

export default ContactSection;