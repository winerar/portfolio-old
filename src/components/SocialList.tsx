import { social } from "../common/constants/social";

const SocialsList: React.FC = (): JSX.Element => {
  return (
    <ul className="social">
      {social.map((item, index) => (
        <li
          className="social__item"
          key={index}
        >
          <a href={item.link}>
            <img
              src={item.icon}
              alt={item.name}
              className="social__icon"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
