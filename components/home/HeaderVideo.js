import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const sliderstyle = {
        margin:"0px",
        padding:"3px",
        width:"300px"
    }
    return (
      <div style={{
        width: "600px"
      }}>
        
        <Slider {...settings}>
          <div>
          <div style={sliderstyle}><img src="/static/placeholder-600x400.png" width="100%"/></div>
          </div>
          <div>
          <div style={sliderstyle}><img src="/static/placeholder-600x400.png" width="100%"/></div>
          </div>
          <div>
          <div style={sliderstyle}><img src="/static/placeholder-600x400.png" width="100%"/></div>
          </div>
          <div>
          <div style={sliderstyle}><img src="/static/placeholder-600x400.png" width="100%"/></div>
          </div>
          <div>
          <div style={sliderstyle}><img src="/static/placeholder-600x400.png" width="100%"/></div>
          </div>
          <div>
          <div style={sliderstyle}><img src="/static/placeholder-600x400.png" width="100%"/></div>
          </div>
        </Slider>
      </div>
    );
  }
}
