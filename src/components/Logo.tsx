import TextTyper from "./controls/TextTyper";

const Logo: React.FC = (): JSX.Element => {
  return (
    <a
      href="/"
      className="logo"
    >
      <strong>Web Developer</strong>{" "}
      <TextTyper
        text="Portfolio"
        interval={200}
        delay={1000}
      />
    </a>
  );
};

export default Logo;
