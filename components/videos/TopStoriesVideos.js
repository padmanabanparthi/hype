import React, { Component } from "react";
import ReactDOM from 'react-dom';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ReactPlayer from 'react-player';

export const GET_TOPSTORIES  = gql`
{
    findStories(country: "US", topicIds: ["5c79139fe0d3ed32457f75f4"], variantIds: null) {
        stories {
            id, title, videoUrls, videoUrlsGroup, bannerUrls, viewsCount, dislikesCount, likesCount, commentsCount, sharesCount, images, description,
            customer {
              phone
            }
            topic {
              name
            }
            variants {
              name
            }
            storyLikers {
              id
            }
            storyDislikers {
              id
            }
            comments {
              description
              customer {
                firstName
              }
            }
          }
          errors
          currentPage
          totalPages
        }
  }
`
export default class TopStoriesVideos extends Component {
  
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
        <fragment>
            <div className="row">
                <Query query={GET_TOPSTORIES}>
                    {({ loading, error, data }) => {
                        
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        
                        return(
                            <TotalVideos result={data.findStories.stories}/>
                        )
                            
                    }}
                </Query>
            </div>
            <div className="row">
                <Query query={GET_TOPSTORIES}>

                {({ loading, error, data }) => {
                    
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.findStories.stories.map(({ bannerUrls,videoUrls,videoUrlsGroup,title,customer,viewsCount,dislikesCount,likesCount,commentsCount,sharesCount },index) => (
                    
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
   
        </fragment>
       )
  }
}

function TotalVideos(props){
    const total = props.result.length;
    return(
        <div className="col-md-12">
          <p>Total Videos {total}</p>  
        </div>
    )
}