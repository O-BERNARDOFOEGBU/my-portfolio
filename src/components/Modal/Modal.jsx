// import { Link } from "react-router-dom";
// import "./Modal.scss";

// const Modal = ({
//   img,
//   title,
//   subTitle,
//   summary,
//   website,
//   github,
//   modalClose,
// }) => {
//   const modalStyle = {
//     backgroundColor: "rgba(0,0,0,0.8)",
//     display: "block",
//   };
//   return (
//     <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title">{title}</h4>
//             <button
//               type="button"
//               className="btn-close"
//               onClick={modalClose}
//             ></button>
//           </div>
//           <div className="modal-body">
//             <div className="st-flex-center">
//               <img src={img} />
//             </div>
//             <p className="modal-subtitle">{subTitle}</p>
//             <p className="modal-subtitle">{summary}</p>
//             <div className="link-container">
//               <Link
//                 // type="button"
//                 className="link-url"
//                 onClick={() => (window.location.href = `${website}`)}
//               >
//                 Website
//               </Link>
//               <Link
//                 // type="button"
//                 className="link-url"
//                 onClick={() => (window.location.href = `${github}`)}
//               >
//                 Github
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import { Link } from "react-router-dom";
import "./Modal.scss";

const Modal = ({
  img,
  imgLinks, // <-- array of images for carousel (SRE)
  title,
  subTitle,
  summary,
  website,
  github,
  modalClose,
}) => {
  const modalStyle = {
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "block",
  };

  const carouselId = `sreCarousel-${title.replace(/\s/g, "")}`;

  return (
    <div
      className="modal show fade bd-example-modal-lg"
      style={modalStyle}
      onClick={modalClose} // Close modal when clicking the overlay
      onKeyDown={(e) => {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          modalClose();
        }
      }}
      tabIndex={-1} // Make div focusable for keyboard events
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
        onKeyDown={(e) => e.stopPropagation()} // Prevent close when pressing keys inside modal
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="btn-close" onClick={modalClose} />
          </div>

          <div className="modal-body">
            <div className="st-flex-center">
              {imgLinks && imgLinks.length > 0 ? (
                <div
                  id={carouselId}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* Carousel Indicators */}
                  <div className="carousel-indicators">
                    {imgLinks.map((link, idx) => (
                      <button
                        key={link}
                        type="button"
                        data-bs-target={`#${carouselId}`}
                        data-bs-slide-to={idx}
                        className={idx === 0 ? "active" : ""}
                        aria-current={idx === 0 ? "true" : undefined}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  {/* Carousel Images */}
                  <div className="carousel-inner">
                    {imgLinks.map((link, index) => (
                      <div
                        key={link}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={link}
                          className="d-block w-100"
                          alt={`Slide ${index}`}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Carousel Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              ) : (
                <img src={img} alt={title} />
              )}
            </div>

            <p className="modal-subtitle">{subTitle}</p>
            <p className="modal-subtitle">{summary}</p>

            <div className="link-container">
              {website && (
                <Link
                  className="link-url"
                  onClick={() => {
                    window.location.href = website;
                  }}
                >
                  Website
                </Link>
              )}
              {github && (
                <Link
                  className="link-url"
                  onClick={() => {
                    window.location.href = github;
                  }}
                >
                  Github
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
