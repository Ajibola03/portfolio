import Navbar from "../components/Navbar";
import projects from "../projects-data.json";
import { Link, useParams } from "react-router";
import { useMemo } from "react";
import NotFoundPage from "./NotFoundPage";

const ProjectDetailsPage = () => {
    // .filter(p => p.favorite)
    let { slug } = useParams();
    const project = useMemo(() => projects.find(p => p.slug === slug), [projects, slug]);

    if(!project) 
        return <NotFoundPage />

    return (<>
        <Navbar />
        <section id="project" className="text-left pt-5">
            <Link to={"/projects"} className="!text-[#9AA7C9] inline-flex items-center gap-x-3">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6H3.14L6.77 1.64C6.93974 1.43578 7.0214 1.1725 6.99702 0.908077C6.97264 0.643651 6.84422 0.39974 6.64 0.230001C6.43578 0.0602625 6.1725 -0.0213994 5.90808 0.00298028C5.64365 0.02736 5.39974 0.155784 5.23 0.360001L0.23 6.36C0.196361 6.40772 0.166279 6.45786 0.14 6.51C0.14 6.56 0.14 6.59 0.0700002 6.64C0.0246737 6.75466 0.000941121 6.87671 0 7C0.000941121 7.12329 0.0246737 7.24534 0.0700002 7.36C0.0700002 7.41 0.0699999 7.44 0.14 7.49C0.166279 7.54214 0.196361 7.59228 0.23 7.64L5.23 13.64C5.32402 13.7529 5.44176 13.8437 5.57485 13.9059C5.70793 13.9681 5.85309 14.0002 6 14C6.23365 14.0005 6.46009 13.9191 6.64 13.77C6.74126 13.6861 6.82496 13.583 6.88631 13.4666C6.94766 13.3503 6.98546 13.2229 6.99754 13.092C7.00961 12.961 6.99573 12.8289 6.95669 12.7033C6.91764 12.5777 6.8542 12.4611 6.77 12.36L3.14 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6Z" fill="#9AA7C9" />
                </svg>

                Back to Projects
            </Link>
            <h2 className="my-5">{project?.name}</h2>
            <div>
                <section>
                    <div className="grid grid-cols-2">
                        <div className="col-span-full order-2 md:order-1 my-5 md:m-0 md:col-span-1">
                            <h3 className="raleway font-bold text-[20px]">Technologies used:</h3>
                            <ul className="list-none grid gap-y-3 mt-3 grid-cols-3 md:grid-cols-4 m-0">
                                {project?.tech.map((tech, i) =>
                                    <li key={`tech-${i}`}>{tech}</li>
                                )}
                            </ul>
                            {/* <?php if ($project->github) { ?> <a href="<?= $project->github ?>" target="_blank" className="mr-2"><img
                            src="{{ asset('img/portfolio/github.svg') }}" width="20px" alt="github"></a> <? php } ?>
                            <?php if ($project->url) { ?> <a href="<?= $project->url ?>" target="_blank" className="ml-2"><img
                            src="{{ asset('img/portfolio/link.svg') }}" width="20px" alt="link"></a> <? php } ?> */}
                        </div>
                        <div style={{ backgroundImage: `url('${project?.coverImage}')` }}
                            className="order-1 md:order-2 col-span-full md:col-span-1 min-h-[300px] bg-center bg-cover md:bg-contain bg-no-repeat">
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="font-raleway font-bold my-10 text-[20px]">Project Description</h3>
                    <p dangerouslySetInnerHTML={{ __html: project?.description || project?.shortDescription || "" }} />
                </section>
                <section>
                    <h3 className="font-raleway font-bold my-10 text-[20px]">Project Images</h3>
                    <div className="grid grid-cols-2 gap-5 mb-5">
                        {project?.images.slice(1).map((img, i) =>
                            <div
                                key={`img-${i}`}
                                style={{ backgroundImage: `url('${img}')` }}
                                className="col-span-full md:col-span-1 min-h-[300px] bg-center bg-cover md:bg-contain bg-no-repeat"
                            />
                        )}
                    </div>
                </section>
            </div>
        </section>
        {/* <Footer /> */}
    </>);
}

export default ProjectDetailsPage;