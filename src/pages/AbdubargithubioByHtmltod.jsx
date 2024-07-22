import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Section from "../components/Section";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import PostContent from "../components/PostContent";
import SocialIconItem from "../components/SocialIconItem";
import Footer from "../components/Footer";
import styles from "./AbdubargithubioByHtmltod.module.css";

const AbdubargithubioByHtmltod = () => {
  return (
    <div className={styles.abdubargithubioByHtmltod}>
      <Header />
      <Hero />
      <About />
      <section className={styles.services}>
        <Section />
        <FrameComponent3 />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <PostContent />
      <SocialIconItem />
      <Footer />
    </div>
  );
};

export default AbdubargithubioByHtmltod;
