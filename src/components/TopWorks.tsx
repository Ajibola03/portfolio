import Button from "./Button";
import ProjectTile from "./ProjectTile";
import projects from "../projects-data.json";
import { Link } from "react-router";

const TopWorks = () => {
    return (
        <section id="projects" className="text-left mt-32 px-5 md:px-0">
            <h2>Some things I&apos;ve worked on</h2>
            <div>
                {projects.filter(p => p.favorite).map((p, i) => {
                    return <ProjectTile key={`project-tile-${p.slug}`} project={p} align={(((i + 1) % 2) === 0) ? "right" : "left"} />
                })}
            </div>
            <div className="flex items-center justify-center">
                <Link to={"/projects"}>
                    <Button>See more projects</Button>
                </Link>
            </div>
        </section>
    );
}

export default TopWorks;