import Container4 from "./Container4";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <h1 className={styles.ourServices}>Our Services</h1>
          <div className={styles.weOfferA}>
            We offer a wide range of veterinary services to keep your pets
            healthy and happy.
          </div>
        </div>
        <div className={styles.serviceCards}>
          <Container4
            servicesjpg="/servicesjpg@2x.png"
            veterinarian="Veterinarian"
            comprehensiveVeterinaryCa="Comprehensive veterinary care,"
            includingCheckUpsDiagnost="including check-ups, diagnostics, and"
            treatmentForVariousHealth="treatment for various health conditions."
          />
          <Container4
            servicesjpg="/services1jpg@2x.png"
            veterinarian="Vaccination Care"
            comprehensiveVeterinaryCa="Protect your pets with our extensive"
            includingCheckUpsDiagnost="vaccination programs, tailored to their"
            treatmentForVariousHealth="specific needs."
          />
          <Container4
            servicesjpg="/services3jpg@2x.png"
            veterinarian="Dental Care"
            comprehensiveVeterinaryCa="Ensure your pet's oral health with our"
            includingCheckUpsDiagnost="professional dental cleaning and"
            treatmentForVariousHealth="treatment services."
          />
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
