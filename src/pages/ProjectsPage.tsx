import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../projects-data.json";
import ProjectTile from "../components/ProjectTile";

const ProjectsPage = () => {
    // .filter(p => p.favorite)
    return (<>
        <Navbar />
        <section id="projects" className="text-left pt-5 px-5 md:px-0">
            <h2>Projects</h2>
            <div className="mt-3">
                <div>
                    {projects.map((p, i) => {
                        return <ProjectTile key={`project-tile-${p.slug}`} project={p} align={(((i + 1) % 2) === 0) ? "right" : "left"} />
                    })}
                </div>
            </div>
        </section>
        <Footer />
    </>);
}

export default ProjectsPage;