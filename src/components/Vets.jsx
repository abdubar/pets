import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Vets.module.css";

const Vets = ({
  className = "",
  experiencedAnd,
  lovingVeterinarians,
  ourTeamOfVeterinariansAnd,
  dedicatedToProvidingTopNo,
  yourPets,
  propMarginLeft,
}) => {
  const vetsStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={[styles.vets, className].join(" ")} style={vetsStyle}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.heading2}>
            <h1 className={styles.experiencedAndLovingContainer}>
              <p className={styles.experiencedAnd}>{experiencedAnd}</p>
              <p className={styles.lovingVeterinarians}>
                {lovingVeterinarians}
              </p>
            </h1>
          </div>
          <div className={styles.container2}>
            <div className={styles.ourTeamOfContainer}>
              <p className={styles.ourTeamOf}>{ourTeamOfVeterinariansAnd}</p>
              <p className={styles.dedicatedToProviding}>
                {dedicatedToProvidingTopNo}
              </p>
              <p className={styles.yourPets}>{yourPets}</p>
            </div>
          </div>
          <button className={styles.link}>
            <a
              className={styles.ourServices}
              href="https://abdubar.github.io/segproject2/#services"
              target="_blank"
            >
              Our Services
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

Vets.propTypes = {
  className: PropTypes.string,
  experiencedAnd: PropTypes.string,
  lovingVeterinarians: PropTypes.string,
  ourTeamOfVeterinariansAnd: PropTypes.string,
  dedicatedToProvidingTopNo: PropTypes.string,
  yourPets: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
};

export default Vets;
