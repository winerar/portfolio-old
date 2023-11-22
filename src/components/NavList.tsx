import { navLinks } from "../common/constants/nav";
import { NavLink } from "react-router-dom";

const NavList: React.FC = (): JSX.Element => {
  return (
    <ul className="nav-list">
      {navLinks.map((item) => (
        <li
          className="nav-list__item"
          key={item.name}
        >
          <NavLink
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "nav-list__link nav-list__link--active"
                : "nav-list__link"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
