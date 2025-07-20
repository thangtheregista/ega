import React from "react";

export default function CertificationSection() {
  const logos = [
    {
      src: "https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/brand_1.jpg?1746582633520",
      link: "https://fsc.org"
    },
    {
      src: "https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/brand_2.jpg?1746582633520",
      link: "https://www.oeko-tex.com"
    },
    {
      src: "https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/brand_3.jpg?1746582633520",
      link: "https://www.cradletocradle.com"
    },
    {
      src: "https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/brand_4.jpg?1746582633520",
      link: "https://www.mas-certification.com"
    }
  ];

  return (
      <div style={styles.wrapper}>
        <h4
            style={styles.sectionTitle}
            onMouseEnter={(e) => e.target.style.color = "#f97b22"}
            onMouseLeave={(e) => e.target.style.color = "#000"}
        >
          CHỨNG NHẬN CỦA CHÚNG TÔI
        </h4>
        <div style={styles.certContainer}>
          {logos.map((item, i) => (
              <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.certLink}
              >
                <img
                    src={item.src}
                    alt={`cert-${i}`}
                    style={styles.certImg}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                />
              </a>
          ))}
        </div>
      </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    marginBottom: "40px",
    marginTop: "60px"
  },
  sectionTitle: {
    fontSize: "30px",
    fontWeight: "700",
    textTransform: "uppercase",
    margin: "30px 0 20px",
    color: "#000",
    transition: "color 0.3s ease"
  },
  certContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  certLink: {
    display: "inline-block",
    transition: "transform 0.3s ease"
  },
  certImg: {
    width: "304px",
    height: "170px",
    objectFit: "contain",
    transition: "transform 0.3s ease"
  }
};
