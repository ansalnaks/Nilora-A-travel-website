
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <ContactInfo/>
      <ContactForm/>
      <ContactMap/>
    </main>
  );
};

export default Contact;
