import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <div className={styles.heading1}>
                  <h1 className={styles.compassionateVeterinaryCareContainer}>
                    <p className={styles.compassionate}>Compassionate</p>
                    <p className={styles.veterinaryCare}>Veterinary Care</p>
                    <p className={styles.compassionate}>Compatissant</p>
                    <p className={styles.veterinaryCare}>Soins vétérinaires</p>


                  </h1>
                </div>
                <div className={styles.container4}>
                  <h3 className={styles.weProvideExceptionalContainer}>
                    <p className={styles.weProvideExceptional}>
                      We provide exceptional care for your beloved
                    </p>
                    <p className={styles.petsEnsuringTheir}>
                      pets, ensuring their health and happiness.
                    </p>
                  </h3>
                </div>
                <div className={styles.container4}>
                  <h3 className={styles.weProvideExceptionalContainer}>
                    <p className={styles.weProvideExceptional}>
                    Nous prodiguons des soins exceptionnels à votre bien-aimé
                    </p>
                    <p className={styles.petsEnsuringTheir}>
                    animaux de compagnie, assurant leur santé et leur bonheur.
                    </p>
                  </h3>
                </div>
                



                <div className={styles.container5}>
                  <button className={styles.link}>
                    <a
                      className={styles.contactUs}
                      href="#contact"
                    >
                      Contact Us
                    </a>
                  </button>
                  <button className={styles.link1}>
                    <a
                      className={styles.ourServices}
                      href="#services"
                    >
                      Our Services
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.container6}>
              <div className={styles.container7}>
                <img
                  className={styles.dogpngIcon}
                  loading="lazy"
                  alt=""
                  src="/dogpng@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
