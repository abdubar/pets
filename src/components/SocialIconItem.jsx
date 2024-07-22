import PropTypes from "prop-types";
import styles from "./SocialIconItem.module.css";

const SocialIconItem = ({ className = "" }) => {
  return (
    <section className={[styles.socialIconItem, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.heading2}>
            <h1 className={styles.confirmedPurchases}>Confirmed Purchases</h1>
          </div>
        </div>
      </div>
      <div className={styles.contactDetailsContainer}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <form className={styles.container3}>
              <div className={styles.contactUsWrapper}>
                <h2 className={styles.contactUs}>Contact Us</h2>
              </div>
              <div className={styles.labelYour}>Your Name</div>
              <div className={styles.nameField}>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.labelYour1}>Your Email</div>
              <div className={styles.emailField}>
                <input className={styles.input1} type="text" />
              </div>
              <div className={styles.labelYour2}>Your Message</div>
              <div className={styles.messageField}>
                <input className={styles.textarea} type="text" />
              </div>
              <button className={styles.button}>
                <div className={styles.sendMessage}>Send Message</div>
              </button>
            </form>
            <div className={styles.container4}>
              <div className={styles.container5}>
                <div className={styles.heading3}>
                  <h2 className={styles.contactInformation}>
                    Contact Information
                  </h2>
                </div>
                <div className={styles.container6}>
                  <div className={styles.wedLoveToContainer}>
                    <p className={styles.wedLoveTo}>
                      We'd love to hear from you! Reach out to us for any
                      questions
                    </p>
                    <p className={styles.orToSchedule}>
                      or to schedule an appointment.
                    </p>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.container7}>
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/icon-9.svg"
                      />
                    </div>
                    <div className={styles.petStreetVeterinary}>
                      {" "}
                      1234 Pet Street, Veterinary City, Petland
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.container8}>
                      <img
                        className={styles.icon1}
                        loading="lazy"
                        alt=""
                        src="/icon-10.svg"
                      />
                    </div>
                    <div className={styles.phone}> (123) 456-7890</div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.container9}>
                      <img
                        className={styles.icon2}
                        loading="lazy"
                        alt=""
                        src="/icon-11.svg"
                      />
                    </div>
                    <div className={styles.contactvetcarecom}>
                      {" "}
                      contact@vetcare.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SocialIconItem.propTypes = {
  className: PropTypes.string,
};

export default SocialIconItem;
