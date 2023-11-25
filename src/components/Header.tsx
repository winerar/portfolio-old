import CV from "../assets/files/alexander-karachevtsev-cv-en.pdf";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alexander</em>
          </strong>
          <br />
          I'm a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating</p>
        </div>
        <a
          className="btn"
          href={CV}
          download
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
