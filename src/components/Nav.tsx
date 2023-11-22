import Logo from "./Logo";
import NavList from "./NavList";
import DarkModeButton from "./controls/DarkModeButton";

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Logo />
          <DarkModeButton />
          <NavList />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
