import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Projects from "./Projects";

const Landing: React.FC = (): JSX.Element => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
