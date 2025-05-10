const AboutSection = () => {
    return (<section id="about" className="text-left pt-5 px-5 md:px-0">
        <h2>About Me</h2>
        <div className="grid grid-cols-12 bg -red-600 my-5">
            <div className="col-span-12 bg -green-500 md:col-span-6 order-3 md:order-1">
                <p>
                    Hey there! My name is Ajibola. I am full-stack web and mobile developer
                    with over 4 years of professional experience. I enjoy coding, creating
                    beautiful digital experiences and getting things to work. I am a team player
                    with great communication skills and very passionate about learning new things
                    and technologies.
                </p>
                <p className="my-5">
                    I've worked with several companies and individuals and have acquired valuable skills and
                    knowledge. I currently work as a freelance full-stack developer.
                </p>
                <p>
                    Here are some of the technologies I&apos;ve been able to work with:
                </p>
                <div className="grid grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-5 text-left ml-[8vw] md:ml-0">
                    <div className="tech-item">HTML</div>
                    <div className="tech-item">CSS</div>
                    <div className="tech-item">Javascript</div>
                    <div className="tech-item">Typescript</div>
                    <div className="tech-item">PHP</div>
                    <div className="tech-item">Dart</div>
                    <div className="tech-item">MongoDB</div>
                    <div className="tech-item">React</div>
                    <div className="tech-item">Laravel</div>
                    <div className="tech-item">Flutter</div>
                    <div className="tech-item">Firestore</div>
                    <div className="tech-item">Tailwind</div>
                    <div className="tech-item">Bootstrap</div>
                    <div className="tech-item">Node.js</div>
                    <div className="tech-item">MySQL</div>
                    <div className="tech-item">PostgreSQL</div>
                    <div className="tech-item">Git</div>
                    <div className="tech-item">Paystack</div>
                    <div className="tech-item">Stripe</div>
                </div>
            </div>
            <div className="col-span-12 my-[10px] bg -blue-50 md:m-0 md:col-span-2 order-2"></div>
            <div className="col-span-12 f lex justify-center md:inline-block bg- yellow-50 md:col-span-3 order-1 md:order-3">
                <div
                    className="relative profile-img inline-block w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-[url('/images/profile.png')] bg-contain md:bg-cover bg-no-repeat bg-center transition-all hov er:bottom-5 hov er:right-5">
                </div>
            </div>
            <div className="col-span-12 md:col-span-2 order-4">
            </div>
        </div>
    </section>);
}

export default AboutSection;