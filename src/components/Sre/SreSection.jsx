import PropTypes from "prop-types";
import "./Sre.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import SingleSre from "./SingleSre";
import Modal from "../Modal/Modal";

const SreSection = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (images, title, subTitle, summary, website, github) => {
    const tempData = [images, title, subTitle, summary, website, github];
    setTempData((item) => [1, ...tempData]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  // Load Items
  const { sreItems } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    sreItems.slice(0, itemsPerPage)
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = sreItems.slice(
      currentLength,
      currentLength + itemsPerPage
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= sreItems.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section id="sre">
        <div className="st-height-b100 st-height-lg-b80" />
        <SectionHeading title={"SRE Impact & Dashboards (Case Studies)"} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element) => (
              <SingleSre data={element} key={element.id} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    type="button"
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80" />
      </section>
      {modal === true ? (
        <Modal
          imgLinks={tempData[1]}
          title={tempData[2]}
          subTitle={tempData[3]}
          summary={tempData[4]}
          website={tempData[5]}
          github={tempData[6]}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
    </>
  );
};

SreSection.propTypes = {
  data: PropTypes.object,
};

export default SreSection;
