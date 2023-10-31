import Iframe from "react-iframe";

import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="">
      <div className="footer-information">
        <div className="contact">
          <h3 style={{ marginLeft: "32px" }}>Contact</h3>
          <h2 className="telephone">+49 999 999 99 99</h2>

          <div className="footer-icon">
            <div>
              <img
                style={{ marginLeft: "15px" }}
                src="../images/icons-instagram.png"
                alt="instagram icon"
              />
              <p>Instagram</p>
            </div>
            <div className="">
              <img
                style={{ marginLeft: "15px" }}
                src="../images/icons-whatsapp.png"
                alt="WhatsApp icon"
              />
              <p>WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="address">
          <h3>Address</h3>
          <a href="https://www.google.com/search?q=telranDE">
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <p className="hours">Working Hours:</p>
          <p className="day">24 hours a day</p>
        </div>
      </div>

      <div className="map">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409221635401!2d13.37504469999999!3d52.50793289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1696080303266!5m2!1sru!2sde"
          width="100%"
          position="absolute"
          height="436px"
          id="myMap"
          className="mapp"
          display="block"
        />
      </div>
    </footer>
  );
}

export default Footer;
