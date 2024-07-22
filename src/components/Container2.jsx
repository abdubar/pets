import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "", team2jpg, johnSmith }) => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://abdubar.github.io/segproject2/");
  }, []);

  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <img
            className={styles.team2jpgIcon}
            loading="lazy"
            alt=""
            src={team2jpg}
          />
        </div>
        <div className={styles.container3}>
          <div className={styles.heading3}>
            <h3 className={styles.johnSmith}>{johnSmith}</h3>
          </div>
          <div className={styles.container4}>
            <div className={styles.veterinarian}>Veterinarian</div>
          </div>
          <div className={styles.list}>
            <div className={styles.itemLink} onClick={onItemLinkClick}>
              <div className={styles.container5}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.itemLink1} onClick={onItemLinkClick}>
              <div className={styles.container6}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
              </div>
            </div>
            <div className={styles.itemLink2} onClick={onItemLinkClick}>
              <img className={styles.containerIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
  team2jpg: PropTypes.string,
  johnSmith: PropTypes.string,
};

export default Container2;
