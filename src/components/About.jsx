import Vets from "./Vets";
import PropTypes from "prop-types";
import styles from "./About.module.css";

const About = ({ className = "" }) => {
  return (
    <section className={[styles.about, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <Vets
            experiencedAnd="Experienced and"
            lovingVeterinarians="Loving Veterinarians"
            ourTeamOfVeterinariansAnd="Our team of veterinarians and animal lovers is"
            dedicatedToProvidingTopNo="dedicated to providing top-notch care for"
            yourPets="your pets."
          />
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.vetImageBackground}>
                <div className={styles.background} />
                <img
                  className={styles.dog1jpgIcon}
                  loading="lazy"
                  alt=""
                  src="/dog1jpg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
