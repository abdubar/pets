import PropTypes from "prop-types";
import styles from "./Container4.module.css";

const Container4 = ({
  className = "",
  servicesjpg,
  veterinarian,
  comprehensiveVeterinaryCa,
  includingCheckUpsDiagnost,
  treatmentForVariousHealth,
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.containerWrapper}>
        <div className={styles.container1}>
          <img
            className={styles.servicesjpgIcon}
            loading="lazy"
            alt=""
            src={servicesjpg}
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.veterinarianWrapper}>
          <h2 className={styles.veterinarian}>{veterinarian}</h2>
        </div>
        <div className={styles.comprehensiveVeterinaryCareContainer}>
          <p className={styles.comprehensiveVeterinaryCare}>
            {comprehensiveVeterinaryCa}
          </p>
          <p className={styles.includingCheckUpsDiagnosti}>
            {includingCheckUpsDiagnost}
          </p>
          <p className={styles.treatmentForVarious}>
            {treatmentForVariousHealth}
          </p>
        </div>
      </div>
    </div>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
  servicesjpg: PropTypes.string,
  veterinarian: PropTypes.string,
  comprehensiveVeterinaryCa: PropTypes.string,
  includingCheckUpsDiagnost: PropTypes.string,
  treatmentForVariousHealth: PropTypes.string,
};

export default Container4;
