import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("");
  }, []);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.linkmargin}>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <img
                className={styles.outputOnlinepngtoolspngIcon}
                loading="lazy"
                alt=""
                src="/outputonlinepngtoolspng@2x.png"
              />
            </div>
          </div>
          <nav className={styles.container1}>
            <nav className={styles.list}>
              <div className={styles.item}>
                <div className={styles.link1}>
                  <a className={styles.home}>Home</a>
                </div>
              </div>
              <div className={styles.item1}>
                <div className={styles.link2}>
                  <a className={styles.about}>About</a>
                </div>
              </div>
              <div className={styles.item2}>
                <div className={styles.link3}>
                  <a className={styles.services}>Services</a>
                </div>
              </div>
              <div className={styles.item3}>
                <div className={styles.link4}>
                  <a className={styles.contact}>Contact</a>
                </div>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
