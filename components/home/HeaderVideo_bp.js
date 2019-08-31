import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_TOPSTORIES  = gql`
{
    findHomes(topicsPage: 1 , productsPage: 1, storiesPage: 1, storesPage: 2, industrySectorsPage: 1,retailersPage:1) {
      topStories {
        title,
        bannerUrls,videoUrls,
        viewsCount,dislikesCount,likesCount,commentsCount,sharesCount,        
        customer{
          firstName
        }
      }
    }
}
`;

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
  state = {
    activeSlide: 0,
    activeSlide2: 0,
    currentslide:0
  };

  render() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
        afterChange: current => this.setState({ currentslide: current })
    };
    const sliderstyle = {
        margin:"0px",
        padding:"3px"
    }
    return (
      <div>
        <Slider {...settings}>
          <Query query={GET_TOPSTORIES}>

            {({ loading, error, data }) => {
              
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.findHomes.topStories.map(({ bannerUrls,title,customer,viewsCount,dislikesCount,likesCount,commentsCount,sharesCount },index) => (
              
                <div key={index} className="col-md-4">
                  <CustomSlide index={index} currentSlide={this.state.currentslide}/>
                </div>
              ));

            }}
          </Query>
        </Slider> 

      </div>
    );
  }
}


class CustomSlide extends Component {

  render() {
    const { index, ...props } = this.props;
    const cur = this.props.currentSlide + 1;
    if (cur==index) {
      return(
        <div {...props} className={"slide"+index}>
          <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' playing width={300} controls="true"/>
        </div>
      );
    }
    else{
      return(
        <div {...props} className={"slide"+index}>
         Test Content
        </div>
      );
    }
  }
}