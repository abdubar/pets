import PropTypes from "prop-types";
import styles from "./Container3.module.css";

const Container3 = ({ className = "", vacimgjpeg }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.border}>
        <img
          className={styles.vacimgjpegIcon}
          loading="lazy"
          alt=""
          src={vacimgjpeg}
        />
      </div>
      <div className={styles.containerInner}>
        <div className={styles.frameParent}>
          <div className={styles.shopCardButtonsParent}>
            <div className={styles.shopCardButtons}>$50</div>
            <div className={styles.shopCardButtons1}>$30</div>
          </div>
          <div className={styles.linkWrapper}>
            <button className={styles.link}>
              <a
                className={styles.buyNow}
                href="https://abdubar.github.io/segproject2/#contact"
                target="_blank"
              >
                Buy Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
  vacimgjpeg: PropTypes.string,
};

export default Container3;
