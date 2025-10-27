import PropTypes from "prop-types";
import "./Founder.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const Founder = ({ data }) => {
  const { founderItems } = data;

  return (
    <section id="founder" className="st-founder-wrap">
      <div className="st-height-b100 st-height-lg-b80" />
      <SectionHeading title={"Founder Experience"} />
      <div className="container">
        {founderItems.map((item) => {
          const { imgLink, url, subtitle, text } = item;
          return (
            <div className="row" key={item.id}>
              <div className="col-lg-6">
                <div className="st-founder-img-wrap">
                  <div
                    className="st-founder-img st-bg"
                    style={{ backgroundImage: `url(${imgLink})` }}
                    onClick={() => window.open(url, "_blank")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.open(url, "_blank");
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  />
                </div>
                <div className="st-height-b0 st-height-lg-b30" />
              </div>
              <div className="col-lg-6">
                <div className="st-vertical-middle">
                  <div className="st-vertical-middle-in">
                    <div
                      className="st-text-block st-style1"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      {/* <h2 className="st-text-block-title">{title}</h2> */}
                      <h4 className="st-text-block-subtitle">{subtitle}</h4>
                      <div className="st-text-block-text">
                        <p>{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Founder.propTypes = {
  data: PropTypes.shape({
    founderItems: PropTypes.arrayOf(
      PropTypes.shape({
        imgLink: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
};

export default Founder;
