import App from '../components/App'
import TopStoriesVideos from '../components/videos/TopStoriesVideos';

export default () => (
  
  <App title='Videos Page'>
    
    <section className="topstories-section">
      <div className="container">
        <TopStoriesVideos/>
      </div>
    </section>

  </App>
)