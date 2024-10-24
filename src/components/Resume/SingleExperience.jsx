import PropTypes from "prop-types";

const SingleExperience = ({ element }) => {
  const { title, duration, subTitle, text } = element;
  return (
    <div className="st-resume-experience-timeline">
      <h3 className="st-resume-experience-timeline-title">{title}</h3>
      <div className="st-resume-experience-timeline-duration">{duration}</div>
      <h4 className="st-resume-experience-timeline-subtitle">{subTitle}</h4>
      <div className="st-resume-experience-timeline-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

SingleExperience.propTypes = {
  element: PropTypes.object,
};

export default SingleExperience;
