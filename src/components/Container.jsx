import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({
  className = "",
  blog1jpg,
  keepingYourPetHealthy,
  discoverTipsAndAdviceOnHo,
  keepYourPetHealthyAndHapp,
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.border}>
        <img
          className={styles.blog1jpgIcon}
          loading="lazy"
          alt=""
          src={blog1jpg}
        />
        <div className={styles.searchField}>
          <h3 className={styles.keepingYourPet}>{keepingYourPetHealthy}</h3>
          <div className={styles.filterOptions}>
            <div className={styles.february092020}>February 09, 2020</div>
            <div className={styles.discoverTipsAndContainer}>
              <p className={styles.discoverTipsAnd}>
                {discoverTipsAndAdviceOnHo}
              </p>
              <p className={styles.keepYourPet}>{keepYourPetHealthyAndHapp}</p>
            </div>
          </div>
          <div className={styles.readMore}>Read More+</div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  blog1jpg: PropTypes.string,
  keepingYourPetHealthy: PropTypes.string,
  discoverTipsAndAdviceOnHo: PropTypes.string,
  keepYourPetHealthyAndHapp: PropTypes.string,
};

export default Container;
