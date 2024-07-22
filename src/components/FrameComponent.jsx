import Container1 from "./Container1";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <Container1
              icon1png="/icon1png@2x.png"
              postContainer="+34,793"
              happyClients="Happy Clients"
            />
            <Container1
              icon1png="/icon2png@2x.png"
              postContainer="+45,382"
              happyClients="Departments"
              propMarginLeft="-2px"
            />
            <Container1
              icon1png="/icon3png@2x.png"
              postContainer="+54,762"
              happyClients="Vaccinations"
              propMarginLeft="-2px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
