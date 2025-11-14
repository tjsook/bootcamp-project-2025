import Link from "next/link";
import Image from "next/image";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    // Query for all projects
    const projects = await Project.find();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  // Handle null case if no projects are found or error occurs
  if (!projects || projects.length === 0) {
    return (
      <main className="main-portfolio">
        <div className="back-button">
          <Link href="/" style={{ textDecoration: "none" }}>
            home
          </Link>
        </div>
        <div className="rounded-square">
          <h1 className="mptext">my portfolio</h1>
          <p>No projects found. Add some projects to your database!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="main-portfolio">
      <div className="back-button">
        <Link href="/" style={{ textDecoration: "none" }}>
          home
        </Link>
        <Link
          href="#top-target"
          style={{ textDecoration: "none", marginLeft: "20px" }}
        >
          back up top
        </Link>
      </div>

      <div className="rounded-square" id="top-target">
        <h1 className="mptext">my portfolio</h1>
        <ul className="hplist" style={{ marginBottom: "30px" }}>
          {projects.map((project) => (
            <li key={project.slug} className="btext">
              <a href={`#${project.slug}`}>{project.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {projects.map((project) => (
        <div
          key={project.slug}
          id={project.slug}
          className="rounded-square-children"
        >
          <div className="website-text-block">
            <h1 className="mptext">{project.title}</h1>
            <p className="desctext">{project.description}</p>

            {project.technologies && project.technologies.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </div>
            )}

            <div style={{ marginTop: "15px" }}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "15px", textDecoration: "underline" }}
                >
                  View Project
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div className="website-text-block">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
