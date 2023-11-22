import ProjectsList from "../components/ProjectsList";

const Projects: React.FC = (): JSX.Element => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ProjectsList />
      </div>
    </div>
  );
};

export default Projects;
