import React, { Component } from "react";
import Link from 'next/link'
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
        bannerUrls,videoUrls,videoUrlsGroup,
        viewsCount,dislikesCount,likesCount,commentsCount,sharesCount,        
        customer{
          firstName
        }
      }
    }
}
`;

class CustomSlide extends Component {

  render() {
    const { index, ...props } = this.props;
    const cur = this.props.currentslide + 1;
    const divstyle = {
      border: '6px solid #ffffff',
      boxShadow: '0px 0px 10px #cccccc',
      borderRadius:'20px',
      overflow:'hidden',
      backgroundImage: 'url('+this.props.banner+')',
      backgroundSize: '100%'
    };
    const videocontainer = {
      marginLeft:'-85%',
      width: '540px',
      position: 'relative',
      zIndex: '9999 !important',
      padding:'10px'
    };
    const imagecontainer = {
      margin: '18% 40px 10% -60px',
      height: '300px'
    };
    const imgstyle = {
      width:'360px',
      height:'250px',
      // border:'2px solid #fff',
      // boxShadow:'0px 2px 10px #ccc'
    }

    if (cur==index) {
      return(
        <div {...props} style={videocontainer} className={"slide"+index}>
          {/* <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' pip playing muted width="100%" height="297px" style={divstyle}/> */}
          <ReactPlayer url={this.props.video} pip playing muted width="100%" height="297px" style={divstyle}/>
        </div>
      );
    }
    else{
      return(
        <div {...props} style={imagecontainer} className={"slide"+index}>
         <img src={this.props.banner} style={imgstyle} />
        </div>
      );
    }
  }
}

export default class SimpleSlider extends Component {
 
  render(){
    return(
      <Query query={GET_TOPSTORIES}>
  
            {({ loading, error, data }) => {
              
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
  
                return (
                  <VidSlider repositories={data.findHomes.topStories} />
                );
            }}
          </Query>
    )
  }  
}

class VidSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  state = { currentslide : 0 }; 
  
  render(){
    const cur = this.props.repositories;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding: "60px",
      className: "slider variable-width",
    
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ currentslide: current })
    };
    
    return(
      
      <div>
      <div style={{width:"100%"}}>
        
        <Slider ref={c => (this.slider = c)} {...settings}>
          {cur.map(({ bannerUrls,videoUrls,videoUrlsGroup,title,customer,viewsCount,dislikesCount,likesCount,commentsCount,sharesCount },index) => {
          return (
            <CustomSlide index={index+1} banner={bannerUrls} video={videoUrlsGroup} currentslide={this.state.currentslide}/>
          );
        })}
        </Slider>
        <div>
          <button className="button videoleftarrow" onClick={this.previous}>
          <i className="fas fa-chevron-left"></i>
          </button>
          <Link href="/videos">
          <button className="button playallbut"><i className="fas fa-play"></i> Play all</button>
          </Link>
          <button className="button videorightarrow" onClick={this.next}>
          <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
    )
  }  
}
