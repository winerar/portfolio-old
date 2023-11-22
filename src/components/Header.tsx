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
      </div>
    </header>
  );
};

export default Header;
