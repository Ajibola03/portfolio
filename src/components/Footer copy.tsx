import EmailLink from "./EmailLink";
import GitHubLink from "./GitHubLink";
import LinkedInLink from "./LinkedInLink";
import XLink from "./XLink";

const Footer = () => {
    return (<footer className="text-center flex justify-center align-middle" id="footer">
        {/* <h2 className="font-raleway font-bold my-10 text-[30px]">Contact Me</h2>
            <p className="md:w-[40%] mx-auto">
                I&apos;m currently available for full-time or freelance opportunities.
                However, if you have a question or you just want to say hi,
                don&apos;t hesitate to contact me.
            </p>
            <a href="mailto:ajibola03official@gmail.com" className="btn-outline-secondary inline-block my-10 mx-auto">Get in
                touch</a> */}
        {/* <div className=""> */}
        {/* <a href="https://github.com/Ajibola03" target="_blank" className="mr-5"> */}
        <GitHubLink />

        {/* </a> */}
        {/* <a href="https://twitter.com/AtoyebiAjibola" target="_blank" className="mx-5"> */}
        <XLink />

        {/* </a> */}
        {/* <a href="https://www.linkedin.com/in/ajibola-atoyebi-23b59b217/" target="_blank" className="mx-5"> */}
        <LinkedInLink />

        {/* </a> */}
        {/* <a href="mailto:ajibola03official@gmail.com" className="ml-5"> */}
        <EmailLink />
        {/* </a> */}
        {/* </div> */}
    </footer>);
}

export default Footer;