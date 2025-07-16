import { useNavigate } from "react-router";
import Project from "../types/project";
import ExternalLink from "./ExternalLink";
import GitHubLink from "./GitHubLink";
import { useMemo } from "react";

interface ProjectTileProps {
    project: Project
    align?: "left" | "right"
    title?: string
}

const ProjectTile = ({ project, align = "left", title = "Featured Project" }: ProjectTileProps) => {
    const background = useMemo(() => project.images[0], [project]);
    const link = useMemo(() => `/projects/${project.slug}`, [project]);

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(link)} className="grid cursor-pointer grid-cols-12 gap-5 my-[50px]">
            <div
                style={{ backgroundImage: `url(${background})` }}
                className={`${align === "left" ? "md:order-1" : "md:order-2"} hidden col-span-full md:col-span-6 min-h-[350px] lg:inline-block bg-no-repeat bg-center bg-cover`}>
            </div>
            <div className={`${align === "left" ? "md:order-2" : "md:order-1"} col-span-full lg:col-span-6 text-right flex flex-col`}>
                <p className="text-[#61F8D5]">{title}</p>
                <h3 className="raleway font-bold text-[20px]">{project.name}</h3>
                <div
                    style={{ backgroundImage: `url(${background})` }}
                    className="lg:hidden col-span-full md:col-span-6 min-h-[300px] inline-block bg-center bg-cover bg-no-repeat">
                </div>
                <div className="bg-[#112240] text-left grow p-6 my-5" dangerouslySetInnerHTML={{ __html: project.shortDescription }} />
                <div className="flex flex-wrap justify-center md:justify-end gap-x-3 my-2 text-sm">
                    {project.tech.map((t, i) => <span key={`${project.name}-tech-${i}`}>{t}</span>)}
                </div>
                <div className="flex justify-center gap-x-8 md:justify-end mt-3">
                    {project.github && <GitHubLink link={project.github} />}
                    {project.url && <ExternalLink link={project.url} />}
                </div>
            </div>
        </div>
    );
}

export default ProjectTile;