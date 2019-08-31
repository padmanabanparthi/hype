import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

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
`
export default function HomeTopStories () {
  return (
    <section className="row section">
        <div className="col-md-12 text-center">
          <Fade bottom>
            <h1 className="section-title">Featured Experience</h1>
          </Fade>
        </div>
        <Query query={GET_TOPSTORIES}>

        {({ loading, error, data }) => {
            
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.findHomes.topStories.map(({ bannerUrls,title,customer,viewsCount,dislikesCount,likesCount,commentsCount,sharesCount },index) => (
            
            <div key={index} className="col-md-4">
              <Slide bottom>
              <div className="card img-fluid featured-video-content">
                <img className="card-img-top" src={bannerUrls} alt="Card image" />
                
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
    </section>
  )
}