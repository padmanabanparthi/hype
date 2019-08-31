import React, { Component } from "react";
import ReactDOM from 'react-dom';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ReactPlayer from 'react-player';

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
`
export default class HomeTopStoriesVideos extends Component {
  
  constructor(props) {
  	super(props);
    this.state = { playing: false,currentvideo: null };
  }

  mouseOut() {
    
    this.setState({playing: false,currentvideo: null});
    console.log("Mouse out!!!"+this.state.playing);
  }
  
  mouseOver(index) {
    this.setState({playing: true,currentvideo: index});
    console.log(index+"Mouse over!!!"+this.state.playing);
  }

  getplayer(videoUrlsGroup,index,bannerUrls){
    const videocontainer = {
      width: '435px',
      marginTop: '-24px',
      marginLeft: '-59px',
    }; 

    if(this.state.currentvideo==index){
      return (
        <div style={videocontainer}>
         <ReactPlayer url={videoUrlsGroup} playing={this.state.playing} muted loop width="100%" height="297px"/>
        </div>
      )
     }
     else{
      return (
        <img className="card-img-top" src={bannerUrls} alt="Card image" />
      )
     }
  }
  render(){
    
    return (
      <div className="row">
        <Query query={GET_TOPSTORIES}>

          {({ loading, error, data }) => {
              
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.findHomes.topStories.map(({ bannerUrls,videoUrls,videoUrlsGroup,title,customer,viewsCount,dislikesCount,likesCount,commentsCount,sharesCount },index) => (
              
              <div key={index} className="col-md-4">
                <Slide bottom>
                  <div className="card img-fluid featured-video-content" onMouseLeave={() => this.mouseOut()} onMouseEnter={() => this.mouseOver(index)}>
                    {/* <img className="card-img-top" src={bannerUrls} alt="Card image" /> */}
                  
                    {this.getplayer(videoUrlsGroup,index,bannerUrls)}
                    
                    <div className="card-img-overlay">
                      <div className="featured-video-main-area">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">By {customer.firstName}</p>

                        <div className="fv-bottom-content">
                          <div className="float-left">
                            <span><i className="fas fa-eye"></i> {viewsCount}</span>
                            <span><i className="fas fa-share-alt"></i> {sharesCount}</span>
                          </div>
                          <div className="float-right">
                            <span><i className="fas fa-thumbs-up"></i> {likesCount}</span>
                            <span><i className="fas fa-thumbs-down"></i> {dislikesCount}</span>
                            <span><i className="fas fa-comments"></i> {commentsCount}</span>
                          </div>
                          <div className="float-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </Slide>    
              </div>
              ));

          }}
          </Query>

      </div>
    )
  }
}