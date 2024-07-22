import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://abdubar.github.io/segproject2/");
  }, []);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.heading3}>
                <h2 className={styles.about}>About</h2>
              </div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.link}>
                    <a
                      className={styles.history}
                      href="https://abdubar.github.io/segproject2/#about"
                      target="_blank"
                    >
                      History
                    </a>
                  </div>
                </div>
                <div className={styles.item1}>
                  <div className={styles.link1}>
                    <a
                      className={styles.ourTeam}
                      href="https://abdubar.github.io/segproject2/#about"
                      target="_blank"
                    >
                      Our Team
                    </a>
                  </div>
                </div>
                <div className={styles.item2}>
                  <div className={styles.link2}>
                    <a
                      className={styles.brandGuidelines}
                      href="https://abdubar.github.io/segproject2/#about"
                      target="_blank"
                    >
                      Brand Guidelines
                    </a>
                  </div>
                </div>
                <div className={styles.item3}>
                  <div className={styles.link3}>
                    <a
                      className={styles.termsConditions}
                    >{`Terms & Conditions`}</a>
                  </div>
                </div>
                <div className={styles.item4}>
                  <div className={styles.link4}>
                    <a className={styles.privacyPolicy}>Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.heading31}>
                <h2 className={styles.services}>Services</h2>
              </div>
              <div className={styles.list1}>
                <div className={styles.item5}>
                  <div className={styles.link5}>
                    <a
                      className={styles.howToOrder}
                      href="https://abdubar.github.io/segproject2/#services"
                      target="_blank"
                    >
                      How to Order
                    </a>
                  </div>
                </div>
                <div className={styles.item6}>
                  <div className={styles.link6}>
                    <a
                      className={styles.ourProducts}
                      href="https://abdubar.github.io/segproject2/#services"
                      target="_blank"
                    >
                      Our Products
                    </a>
                  </div>
                </div>
                <div className={styles.item7}>
                  <div className={styles.link7}>
                    <a
                      className={styles.orderStatus}
                      href="https://abdubar.github.io/segproject2/#services"
                      target="_blank"
                    >
                      Order Status
                    </a>
                  </div>
                </div>
                <div className={styles.item8}>
                  <div className={styles.link8}>
                    <a
                      className={styles.promo}
                      href="https://abdubar.github.io/segproject2/#services"
                      target="_blank"
                    >
                      Promo
                    </a>
                  </div>
                </div>
                <div className={styles.item9}>
                  <div className={styles.link9}>
                    <a
                      className={styles.paymentMethod}
                      href="https://abdubar.github.io/segproject2/#services"
                      target="_blank"
                    >
                      Payment Method
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <h2 className={styles.subscribe}>Subscribe</h2>
            <div className={styles.newsletter}>
              <div className={styles.stayUpdatedWithContainer}>
                <p className={styles.stayUpdatedWith}>
                  Stay updated with our latest news and offers. Subscribe to our
                </p>
                <p className={styles.newsletter1}>newsletter.</p>
              </div>
              <div className={styles.form}>
                <div className={styles.input}>
                  <div className={styles.enterYourEmail}>Enter your email</div>
                </div>
                <button className={styles.button}>
                  <img className={styles.icon} alt="" src="/icon-12.svg" />
                </button>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.itemLink} onClick={onItemLinkClick}>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/icon-13.svg"
                />
              </div>
              <div className={styles.itemLink1} onClick={onItemLinkClick}>
                <img
                  className={styles.icon2}
                  loading="lazy"
                  alt=""
                  src="/icon-14.svg"
                />
              </div>
              <div className={styles.itemLink2} onClick={onItemLinkClick}>
                <img
                  className={styles.icon3}
                  loading="lazy"
                  alt=""
                  src="/icon-15.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
