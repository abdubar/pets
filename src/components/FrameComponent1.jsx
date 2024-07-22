import { useCallback } from "react";
import Container2 from "./Container2";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://abdubar.github.io/segproject2/");
  }, []);

  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.heading2}>
              <h1 className={styles.meetOurTeam}>Meet Our Team</h1>
            </div>
            <div className={styles.container3}>
              <div className={styles.ourTeamOfContainer}>
                <p className={styles.ourTeamOf}>
                  Our team of experienced veterinarians and
                </p>
                <p className={styles.animalCareExperts}>
                  animal care experts are here to help your pets
                </p>
                <p className={styles.thrive}>thrive.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.teamMembers}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.container6}>
                <img
                  className={styles.team1jpgIcon}
                  loading="lazy"
                  alt=""
                  src="/team1jpg@2x.png"
                />
              </div>
              <div className={styles.container7}>
                <div className={styles.heading3}>
                  <h3 className={styles.samanthaPullen}>Samantha Pullen</h3>
                </div>
                <div className={styles.container8}>
                  <div className={styles.veterinarian}>Veterinarian</div>
                </div>
                <div className={styles.list}>
                  <div className={styles.itemLink} onClick={onItemLinkClick}>
                    <div className={styles.container9}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.itemLink1} onClick={onItemLinkClick}>
                    <div className={styles.container10}>
                      <img className={styles.icon1} alt="" src="/icon-1.svg" />
                    </div>
                  </div>
                  <div className={styles.itemLink2} onClick={onItemLinkClick}>
                    <div className={styles.container11}>
                      <img
                        className={styles.icon2}
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container2 team2jpg="/team2jpg@2x.png" johnSmith="John Smith" />
          <Container2 team2jpg="/team3jpg@2x.png" johnSmith="Emily Brown" />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
