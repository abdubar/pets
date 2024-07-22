import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Container1.module.css";

const Container1 = ({
  className = "",
  icon1png,
  postContainer,
  happyClients,
  propMarginLeft,
}) => {
  const containerStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      style={containerStyle}
    >
      <div className={styles.container1}>
        <div className={styles.clientStatIcon}>
          <img
            className={styles.icon1png}
            loading="lazy"
            alt=""
            src={icon1png}
          />
        </div>
        <div className={styles.clientStatName}>
          <div className={styles.postContainerWrapper}>
            <div className={styles.postContainer}>{postContainer}</div>
          </div>
          <h2 className={styles.happyClients}>{happyClients}</h2>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  icon1png: PropTypes.string,
  postContainer: PropTypes.string,
  happyClients: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
};

export default Container1;
