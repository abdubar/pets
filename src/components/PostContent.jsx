import Container from "./Container";
import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import styles from "./PostContent.module.css";

const PostContent = ({ className = "" }) => {
  return (
    <section className={[styles.postContent, className].join(" ")}>
      <div className={styles.postTitle}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.heading2}>
                <h1 className={styles.recentPosts}>Recent Posts</h1>
              </div>
              <div className={styles.container3}>
                <div className={styles.stayUpdatedWithContainer}>
                  <p className={styles.stayUpdatedWith}>
                    Stay updated with our latest news and articles on
                  </p>
                  <p className={styles.petCare}>pet care.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blogPostDate}>
            <Container
              blog1jpg="/blog1jpg@2x.png"
              keepingYourPetHealthy="Keeping Your Pet Healthy"
              discoverTipsAndAdviceOnHo="Discover tips and advice on how to"
              keepYourPetHealthyAndHapp="keep your pet healthy and happy."
            />
            <div className={styles.container4}>
              <div className={styles.border}>
                <img
                  className={styles.blog2jpgIcon}
                  loading="lazy"
                  alt=""
                  src="/blog2jpg@2x.png"
                />
                <div className={styles.vaccinationGuidelinesParent}>
                  <div className={styles.vaccinationGuidelines}>
                    Vaccination Guidelines
                  </div>
                  <div className={styles.february092020Parent}>
                    <div className={styles.february092020}>
                      February 09, 2020
                    </div>
                    <div className={styles.learnAboutTheContainer}>
                      <p className={styles.learnAboutThe}>
                        Learn about the importance of
                      </p>
                      <p className={styles.vaccinationsAndHow}>
                        vaccinations and how they protect
                      </p>
                      <p className={styles.yourPets}>your pets.</p>
                    </div>
                  </div>
                  <div className={styles.readMore}>Read More+</div>
                </div>
              </div>
            </div>
            <Container
              blog1jpg="/blog3jpg@2x.png"
              keepingYourPetHealthy="Dental Care for Pets"
              discoverTipsAndAdviceOnHo="Find out how to maintain your pet's"
              keepYourPetHealthyAndHapp="oral health with our expert tips."
            />
          </div>
        </div>
        <div className={styles.container5}>
          <h1 className={styles.searchOurProducts}>Search Our Products</h1>
          <div className={styles.container6}>
            <div className={styles.container7}>
              <div className={styles.background}>
                <div className={styles.productCard}>
                  <h3 className={styles.filters}>Filters</h3>
                  <div className={styles.category}>Category</div>
                  <div className={styles.list}>
                    <div className={styles.item}>
                      <input className={styles.input} type="checkbox" />
                      <div className={styles.veterinarian}> Veterinarian</div>
                    </div>
                    <div className={styles.item1}>
                      <input className={styles.input1} type="checkbox" />
                      <div className={styles.vaccination}> Vaccination</div>
                    </div>
                    <div className={styles.item2}>
                      <input className={styles.input2} type="checkbox" />
                      <div className={styles.dentalCare}> Dental Care</div>
                    </div>
                  </div>
                </div>
                <div className={styles.contactForm}>
                  <div className={styles.price}>Price</div>
                  <div className={styles.contactInfo}>
                    <input className={styles.contactHeader} type="checkbox" />
                    <div className={styles.contactList}> $0 - $30</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <input className={styles.contactIcon} type="checkbox" />
                  <div className={styles.nameField}> $31 - $50</div>
                </div>
              </div>
            </div>
            <div className={styles.container8}>
              <div className={styles.container9}>
                <BackgroundBorder
                  vetimgjpg="/vetimgjpg-1@2x.png"
                  veterinarianCare="Veterinarian Care"
                  newsletter="$50"
                />
                <BackgroundBorder
                  vetimgjpg="/vacimgjpeg-1@2x.png"
                  veterinarianCare="Vaccination Care"
                  newsletter="$30"
                />
                <BackgroundBorder
                  vetimgjpg="/dentimgjpg-1@2x.png"
                  veterinarianCare="Dental Care"
                  newsletter="$30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PostContent.propTypes = {
  className: PropTypes.string,
};

export default PostContent;
