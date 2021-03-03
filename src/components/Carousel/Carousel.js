import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css";

function Carousel({ images, id, setLink }) {
  const history = useHistory();

  const onClickHandler = useCallback(() => history.push(`/item/${id}`), [
    history,
  ]);

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const items = [
    <img
      onClick={setLink ? onClickHandler : null}
      src={images[0]}
      onDragStart={handleDragStart}
      alt={id}
    />,
    <img
      onClick={setLink ? onClickHandler : null}
      src={images[1]}
      onDragStart={handleDragStart}
      alt={id}
    />,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoHeight={450}
      autoWidth={300}
      infinite={true}
    />
  );
}

export default Carousel;
