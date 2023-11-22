import lightModeImage from "../../assets/images/icons/sun-fill.svg";
import darkModeImage from "../../assets/images/icons/moon-stars-fill.svg";

const DarkModeButton: React.FC = (): JSX.Element => {
  return (
    <button className="dark-mode-btn">
      <img
        className="dark-mode-btn__icon"
        src={lightModeImage}
        alt="Light mode"
      />
      <img
        className="dark-mode-btn__icon"
        src={darkModeImage}
        alt="Dark mode"
      />
    </button>
  );
};

export default DarkModeButton;
