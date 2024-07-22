import Container3 from "./Container3";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.heading2}>
                <h1 className={styles.shop}>Shop</h1>
              </div>
              <div className={styles.container3}>
                <div className={styles.findAVarietyContainer}>
                  <p className={styles.findAVariety}>
                    Find a variety of products to keep your pets
                  </p>
                  <p className={styles.healthyAndHappy}>healthy and happy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shopItems}>
            <div className={styles.container4}>
              <div className={styles.border}>
                <img
                  className={styles.vetimgjpgIcon}
                  loading="lazy"
                  alt=""
                  src="/vetimgjpg@2x.png"
                />
              </div>
              <div className={styles.containerInner}>
                <div className={styles.frameParent}>
                  <div className={styles.emptyPlaceholdersWrapper}>
                    <div className={styles.emptyPlaceholders}>$50</div>
                  </div>
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
            <Container3 vacimgjpeg="/vacimgjpeg@2x.png" />
            <Container3 vacimgjpeg="/dentimgjpg@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
