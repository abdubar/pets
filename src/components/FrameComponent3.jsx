import Vets from "./Vets";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.careDogBackground}>
                <div className={styles.background} />
                <img
                  className={styles.dog2pngIcon}
                  loading="lazy"
                  alt=""
                  src="/dog2png@2x.png"
                />
              </div>
            </div>
          </div>
          <Vets
            experiencedAnd="Passionate About"
            lovingVeterinarians="Animal Care"
            ourTeamOfVeterinariansAnd="We are committed to providing the best care"
            dedicatedToProvidingTopNo="for your pets, ensuring their well-being and"
            yourPets="happiness."
            propMarginLeft="-2px"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
