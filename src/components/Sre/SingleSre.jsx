import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SingleSre = ({ data, getData }) => {
  const {
    imgLink,
    imgLinkLg,
    title,
    subTitle,
    effect,
    duration,
    delay,
    summary,
    website,
    github,
  } = data;

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <button
        type="button"
        className="st-sre-single st-style1"
        onClick={() =>
          getData(data.images, title, subTitle, summary, website, github)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            getData(data.images, title, subTitle, summary, website, github);
          }
        }}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          width: "100%",
        }}
      >
        <div className="st-sre-item">
          <div className="st-sre st-zoom">
            <div className="st-sre-img st-zoom-in">
              <img src={imgLink} alt="sre" />
            </div>
            <div className="st-sre-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

SingleSre.propTypes = {
  data: PropTypes.object,
};

export default SingleSre;
