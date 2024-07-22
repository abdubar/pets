import PropTypes from "prop-types";
import styles from "./BackgroundBorder.module.css";

const BackgroundBorder = ({
  className = "",
  vetimgjpg,
  veterinarianCare,
  newsletter,
}) => {
  return (
    <div className={[styles.backgroundborder, className].join(" ")}>
      <img
        className={styles.vetimgjpgIcon}
        loading="lazy"
        alt=""
        src={vetimgjpg}
      />
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.veterinarianCare}>{veterinarianCare}</div>
          <div className={styles.footerLinkItemWrapper}>
            <div className={styles.footerLinkItem}>
              <div className={styles.footerLink}>
                <div className={styles.newsletter}>{newsletter}</div>
              </div>
              <button className={styles.button}>
                <div className={styles.buyNow}>Buy Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  vetimgjpg: PropTypes.string,
  veterinarianCare: PropTypes.string,
  newsletter: PropTypes.string,
};

export default BackgroundBorder;
