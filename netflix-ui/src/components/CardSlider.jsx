import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

const CardSlider = ({ data, title }) => {
  return (
    <Container>
      <div className="flex colomn">
        {data.map((movie, index) => {
          return <Card movieData={movie} index={index} key={movie.id} />;
        })}
      </div>
    </Container>
  );
};

export default CardSlider;
