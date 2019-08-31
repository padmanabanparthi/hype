import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer';

export default ({ children, title }) => (
  
    <main>
      <Head>
        <title>{title}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <div>
        {children}
      </div>
      <Footer/>
      {/* font-family:medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important */}
      <style jsx global>{`

      body{
        color:rgba(0,0,0,.84)!important;
        font-family: 'Poppins', sans-serif;
      }

      .slick-slide.slick-active:nth-child(1) {
        left: -100px;
      }
      .slick-slide.slick-active:nth-child(2) {
        left: -40px;
      }
      .slick-slide.slick-active:nth-child(2) {
        left: 50px;
      }
      .slick-slide.slick-active.slick-center.slick-current {
        transition: transform .4s;
        transform: scale(1.1);
      }
      .slick-slide.slick-active.slick-center.slick-current img{
        transition: transform .4s, border .4s;
        transform: scaleX(1.45) scaleY(1.16);
        border: 6px solid #ffffff;
        border-radius:20px;
        margin-left:-20px;
      }
      .slick-slide.slick-active {
        position:relative;
        z-index: 99 !important;
      }
      .slick-slide.slick-active.slick-center.slick-current {
        z-index: 99999 !important;
      }
      .slick-slide img {
          display: block;
          width: 400px;
          height: 263px;
      }
      .slick-dots li button:before {
        font-size: 10px;
      }
      .slick-dots li.slick-active button:before {
        opacity: .75;
        color: #E5397D;
        font-size: 10px;
      }
      .slick-dots li button:hover:before, .slick-dots li button:focus:before {
        opacity: 1;
        font-size: 10px;
      }
      button.button.playallbut {
        position: absolute;
        top: 86%;
        left: 329px;
        background: #fff;
        border: 0px;
        padding: 4px 16px;
        font-weight: 700;
        font-size: 14px;
        border-radius: 30px;
        color: rgba(0,0,0,.84)!important;
      }
      .playallbut i {
        margin-right: 3px;
      }

      h1, h2, h3, h4, h5, h6{
        font-weight:bold !important;
      }
      
      p{
        color:rgba(0,0,0,.84)!important;
      }
      

      .navbar.navbar-expand-lg.navbar-light.bg-light {
          width: 95%;
          margin: 0 auto;
      }
      .navbar .navbar-brand img {
        width: 90px;
      }
      
      #navbarNav {
        margin-top: 16px;
      }

      .headersearch .form-control{
        border:0px !important;
        font-size: 14px;
        font-weight: normal;
      }
      .headersearch {
        width: 202px;
      }
      .headersearch .form-control::placeholder{       
        font-size: 13px;
        color:#CCCCCC !important;
        font-weight: normal;
      }
      
      .headersearch .header-search-btn{
        border:0px;
        background:none;
      }
      .headersearch .header-search-btn img{
        width: 16px;
      }
      
      .rightside-nav{
        text-align:right;
        width: 100%;
      }
      
      .bg-light {
        background-color: #fff!important;
      }

      .navbar-light .navbar-nav .nav-link {
        color: rgba(0, 0, 0, .90) !important;
        font-weight:600;
        font-size: 14px;
      }

      .navbar-button-links .button-links{
        border-radius:30px;
        padding:6px 15px;
        margin:5px 0px 0px 15px;
        box-shadow:0px 4px 15px #dbd9d9;
        border:none;
        font-weight:medium;
        color:#262525;
      }
      .navbar-button-links .download-btn{
        border-radius:30px;
        padding:6px 15px;
        margin:5px 0px 0px 15px;
        box-shadow:0px 4px 15px #dbd9d9;
        border:none;
        font-weight:medium;
        color:#4C3F92;
      }
     

      .navbar-button-links .signin{
        color:#E5397D;
      }
      
      .navbar-light .navbar-nav.category-header-section .nav-link {
        color:#E5397D !important;
        font-weight: 600;
      }
      .header-category-li {
        width: 168px;
        margin: auto 0px;
      }
      .header-category-li img{
        margin-right:10px;
        margin-top:-4px;
      }
      .header-category-link{
        color:#E5397D !important;
      }
      .section{
        margin-top:60px;
      }
      .section-title{
        color:rgba(0,0,0,.84)!important;
        margin-bottom:60px;
        font-weight:bold;
        font-size:30px;
      }

      .home-main-section {
        padding-top: 7rem;
        background-image: url(/static/headerbg.svg);
        background-size: 93% 94%;
        background-position: center bottom;
        background-repeat: no-repeat;
        margin-top: 0rem;
      }
      .topstories-section {
          background-image: url(/static/trainglebg.svg),url(/static/circlebg.svg),url(/static/trainglebg.svg);
          background-repeat: no-repeat,no-repeat,no-repeat;
          background-position: 25% top,80% 100%,10% 50%;
          padding-bottom: 2rem;
      }
      .home-main-content{
        margin: auto;
      }
      .home-title{
        font-size:1.85rem;
        margin-bottom:20px;
      }
      .home-main-section p{
        font-size:18px;
      }
      .react-player-container {
        width: 95%;
        margin-left: 8%;
      }
      .react-player{
        width:79%;
      }
      .supported-by .supported-by-lists{
        height:100px;
      }


      button.button.videoleftarrow, button.button.videorightarrow {
          background-color: rgba(255, 255, 255, .6);
          border:0px;
          color: #E5397D;
          padding: 10px;
          position: absolute;
          top: 44%;
      }
      button.button.videoleftarrow {
        left: 12%;
      }
      button.button.videorightarrow {
        right: 13%;
      }
      .featured-video-content{
         color:#fff;
         height:250px !important;
         overflow:hidden;
         margin-bottom:20px;
         background-image: url('/static/loading.gif');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 11%;
       }
      .featured-video-content h4 {
        font-size: 20px;
        font-weight:normal;
        margin-bottom: 0px;
      }
      .featured-video-content .card-text {
        font-size: 15px;
        color: #fff !important;
        margin-bottom: 15px;
      }
      .card{
        border-radius:0px !important;
      }
      .card-img-top{
        height:250px;
        object-fit: cover;
        object-position: center;
      }
      .card-img-overlay {
        position: absolute;
        background-color: rgba(0,0,0,.30);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1.25rem;        
      }
      .featured-video-main-area {
        position: inherit;
        bottom: 10px;
        width: 93%;
        margin-left: -1%;
      }
      .fv-bottom-content span {
        padding: 5px;
        font-size: 14px;
      }
      .vc-area{
        background-image: url('/static/videobg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 24rem;
        padding-top:26px;
      }
      
      `}</style>
    </main>
  )
