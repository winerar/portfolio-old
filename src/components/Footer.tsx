import Copyright from "./Copyright";
import SocialsList from "./SocialList";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <SocialsList />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
