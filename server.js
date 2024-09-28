const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// HTML faylini statik fayl sifatida joylashtirish
app.use(express.static(path.join(__dirname)));

// Asosiy yo'l
app.get('/', (_req, res) => {
    res.send(`
    <!DOCTYPE html>
<html>

<head>

  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title> XXX </title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap");
body {
  font-family: "Open Sans", sans-serif;
  color: #0c0c0c;
  background-color: #ffff22;
  overflow-x: hidden;
}

.layout_padding {
  padding: 90px 0;
}

.layout_padding2 {
  padding: 75px 0;
}

.layout_padding2-top {
  padding-top: 75px;
}

.layout_padding2-bottom {
  padding-bottom: 75px;
}

.layout_padding-top {
  padding-top: 90px;
}

.layout_padding-bottom {
  padding-bottom: 90px;
}

.heading_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.heading_container h2 {
  position: relative;
  font-weight: bold;
  margin-bottom: 0;
}

.heading_container h2 span {
  color: #00bbf0;
}

.heading_container p {
  margin-top: 10px;
  margin-bottom: 0;
}

.heading_container.heading_center {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

a:hover,
a:focus {
  color: initial;
}

.btn,
.btn:focus {
  outline: none !important;
  -webkit-box-shadow: none;
          box-shadow: none;
}

/*header section*/
.hero_area {
  position: relative;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.hero_area .hero_bg_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  overflow: hidden;
  z-index: -1;
}

.hero_area .hero_bg_box .bg_img_box {
  min-width: 100%;
  min-height: 100%;
}

.hero_area .hero_bg_box img {
  min-width: 100%;
  min-height: 100%;
}

.sub_page .hero_area {
  min-height: auto;
  background: linear-gradient(130deg, #231a6f, #0f054c);
}

.sub_page .hero_area .hero_bg_box {
  display: none;
}

.header_section {
  padding: 15px 0;
}

.header_section .container-fluid {
  padding-right: 25px;
  padding-left: 25px;
}

.navbar-brand span {
  font-weight: bold;
  font-size: 24px;
  color: #ffff22;
}

.custom_nav-container {
  padding: 0;
}

.custom_nav-container .navbar-nav {
  margin-left: auto;
}

.custom_nav-container .navbar-nav .nav-item .nav-link {
  padding: 5px 20px;
  color: #ffff22;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-nav .nav-item:hover .nav-link, .custom_nav-container .navbar-nav .nav-item.active .nav-link {
  color: #00bbf0;
}

.custom_nav-container .navbar-nav .nav-item.active .nav-link {
  font-weight: 600;
}

.custom_nav-container .nav_search-btn {
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  color: #ffff22;
}

.custom_nav-container .nav_search-btn:hover {
  color: #00bbf0;
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler {
  padding: 0;
  width: 37px;
  height: 42px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span {
  display: block;
  width: 35px;
  height: 4px;
  background-color: #ffff22;
  margin: 7px 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span::before, .custom_nav-container .navbar-toggler span::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ffff22;
  top: -10px;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span::after {
  top: 10px;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span::before, .custom_nav-container .navbar-toggler[aria-expanded="true"] span::after {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  top: 0;
}

/*end header section*/
/* slider section */
.slider_section {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  padding: 45px 0 145px 0;
}

.slider_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.slider_section #customCarousel1 {
  width: 100%;
  position: unset;
}

.slider_section .detail-box {
  color: #00204a;
}

.slider_section .detail-box h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #ffff22;
}

.slider_section .detail-box p {
  color: #fefefe;
  font-size: 14px;
}

.slider_section .detail-box .btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -5px;
  margin-top: 25px;
}

.slider_section .detail-box .btn-box a {
  margin: 5px;
  text-align: center;
  width: 165px;
}

.slider_section .detail-box .btn-box .btn1 {
  display: inline-block;
  padding: 10px 15px;
  background-color: #00bbf0;
  color: #ffff22;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.slider_section .detail-box .btn-box .btn1:hover {
  background-color: #007fa4;
}

.slider_section .detail-box .btn-box .btn2 {
  display: inline-block;
  padding: 10px 15px;
  background-color: #000000;
  color: #ffff22;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.slider_section .detail-box .btn-box .btn2:hover {
  background-color: black;
}

.slider_section .img-box {
  margin: 45px 0;
}

.slider_section .img-box img {
  width: 100%;
  -webkit-animation: upDown 5s infinite;
          animation: upDown 5s infinite;
}

@-webkit-keyframes upDown {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
  }
  50% {
    -webkit-transform: translateY(45px);
            transform: translateY(45px);
  }
  100% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
  }
}

@keyframes upDown {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
  }
  50% {
    -webkit-transform: translateY(45px);
            transform: translateY(45px);
  }
  100% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
  }
}

.slider_section .carousel-indicators {
  position: unset;
  margin: 0;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.slider_section .carousel-indicators li {
  background-color: #ffff22;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  opacity: 1;
}

.slider_section .carousel-indicators li.active {
  width: 20px;
  height: 20px;
  background-color: #00bbf0;
}

.service_section {
  position: relative;
}

.service_section .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
  margin-top: 45px;
  background-color: #f8f8f9;
  padding: 20px;
  border-radius: 5px;
}

.service_section .box .img-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 125px;
  min-width: 75px;
  height: 75px;
  margin-bottom: 15px;
}

.service_section .box .img-box img {
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.service_section .box .detail-box h5 {
  font-weight: bold;
  text-transform: uppercase;
}

.service_section .box .detail-box a {
  color: #00204a;
  font-weight: 600;
}

.service_section .box .detail-box a:hover {
  color: #00bbf0;
}

.service_section .btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 45px;
}

.service_section .btn-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #00bbf0;
  color: #ffff22;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.service_section .btn-box a:hover {
  background-color: #007fa4;
}

.about_section {
  background-color: #00204a;
  color: #ffff22;
}

.about_section .heading_container {
  margin-bottom: 45px;
}

.about_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.about_section .img-box img {
  max-width: 100%;
}

.about_section .detail-box h3 {
  font-weight: bold;
}

.about_section .detail-box p {
  margin-top: 15px;
}

.about_section .detail-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #00bbf0;
  color: #ffff22;
  border-radius: 0px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
  margin-top: 15px;
}

.about_section .detail-box a:hover {
  background-color: #007fa4;
}

.why_section .box {
  margin-top: 45px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
}

.why_section .box .img-box {
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
  border-radius: 100%;
  border: 5px solid #00204a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.why_section .box .img-box img {
  width: 55px;
  height: auto;
  fill: #00204a;
}

.why_section .box h5 {
  font-weight: bold;
  margin-bottom: 10px;
}

.why_section .box p {
  margin-bottom: 0;
}

.why_section .btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 45px;
}

.why_section .btn-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #00bbf0;
  color: #ffff22;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.why_section .btn-box a:hover {
  background-color: #007fa4;
}

/*team section */
.team_section {
  text-align: center;
  background-color: #00204a;
  color: #ffff22;
}

.team_section .heading_container {
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.team_section .team_container {
  padding: 0 15px;
}

.team_section .team_container .box {
  padding: 35px 0 0 0;
  border-radius: 5px;
  overflow: hidden;
  -webkit-transition: all .1s;
  transition: all .1s;
  margin-top: 45px;
  background: -webkit-gradient(linear, left top, left bottom, from(#002759), to(#002b64));
  background: linear-gradient(to bottom, #002759, #002b64);
}

.team_section .team_container .box .img-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.team_section .team_container .box .img-box img {
  width: 120px;
  border-radius: 100%;
  border: 5px solid #ffff22;
}

.team_section .team_container .box .detail-box {
  margin: 25px 0;
}

.team_section .team_container .box .detail-box h5 {
  color: #00bbf0;
  font-weight: 600;
  position: relative;
}

.team_section .team_container .box .social_box {
  padding: 10px 45px 20px 45px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.team_section .team_container .box .social_box a {
  color: #ffff22;
  font-size: 22px;
}

.team_section .team_container .box .social_box a:hover {
  color: #00bbf0;
}

/*team section end*/
/* client section start */
.client_section .heading_container {
  margin-bottom: 30px;
}

.client_section .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin: 15px;
}

.client_section .box .img-box {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100px;
  margin-bottom: -50px;
  margin-left: 25px;
  position: relative;
}

.client_section .box .img-box img {
  border-radius: 100%;
}

.client_section .box .client_id {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.client_section .box .client_id .client_info h6 {
  font-weight: 600;
  margin-bottom: 5px;
}

.client_section .box .client_id .client_info p {
  margin-bottom: 0;
  font-size: 15px;
  font-size: 14px;
  margin-bottom: 10px;
}

.client_section .box .detail-box {
  background-color: #ffff22;
  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
          box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  padding: 75px 25px 25px 25px;
}

.client_section .box .detail-box i {
  color: #00204a;
  margin-bottom: 10px;
}

.client_section .owl-carousel .owl-nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 45px;
}

.client_section .owl-carousel .owl-nav .owl-prev,
.client_section .owl-carousel .owl-nav .owl-next {
  width: 55px;
  height: 55px;
  background-color: #ffff22;
  color: #000000;
  outline: none;
  bottom: 0px;
  font-size: 24px;
  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
}

.client_section .owl-carousel .owl-nav .owl-prev:hover,
.client_section .owl-carousel .owl-nav .owl-next:hover {
  color: #00204a;
}

/* client section end */
.info_section {
  background-color: #00204a;
  color: #ffff22;
  padding: 45px 0 15px 0;
}

.info_section h4 {
  font-weight: 600;
  margin-bottom: 20px;
}

.info_section .info_col {
  margin-bottom: 30px;
}

.info_section .info_contact .contact_link_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.info_section .info_contact .contact_link_box a {
  margin: 5px 0;
  color: #ffff22;
}

.info_section .info_contact .contact_link_box a i {
  margin-right: 5px;
}

.info_section .info_contact .contact_link_box a:hover {
  color: #00bbf0;
}

.info_section .info_social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
}

.info_section .info_social a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #ffff22;
  border-radius: 100%;
  margin-right: 10px;
  font-size: 24px;
}

.info_section .info_social a:hover {
  color: #00bbf0;
}

.info_section .info_links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.info_section .info_links a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 15px;
  color: #ffff22;
}

.info_section .info_links a:hover {
  color: #00bbf0;
}

.info_section form input {
  border: none;
  border-bottom: 1px solid #ffff22;
  background-color: transparent;
  width: 100%;
  height: 45px;
  color: #ffff22;
  outline: none;
}

.info_section form input::-webkit-input-placeholder {
  color: #ffff22;
}

.info_section form input:-ms-input-placeholder {
  color: #ffff22;
}

.info_section form input::-ms-input-placeholder {
  color: #ffff22;
}

.info_section form input::placeholder {
  color: #ffff22;
}

.info_section form button {
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 10px 55px;
  background-color: #00bbf0;
  color: #eba2a2;
  border-radius: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
  margin-top: 15px;
}

.info_section form button:hover {
  background-color: #97c5d3;
}

/* footer section*/
.footer_section {
  position: relative;
  background-color: #ffff22;
  text-align: center;
}

.footer_section p {
  color: #00204a;
  padding: 25px 0;
  margin: 0;
}

.footer_section p a {
  color: inherit;
}
/*# sourceMappingURL=style.css.map */
</style>

</head>

<body>

  <div class="hero_area">

    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="hero-bg.png" alt="">
      </div>
    </div>

    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              Finexo
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Why Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
              </li>
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
    <!-- slider section -->

    <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-336x280/index.html" frameborder="0" height="280" width="336"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>
    <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-728x90/index.html" frameborder="0" height="90" width="728"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                        <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-468x60/index.html" frameborder="0" height="60" width="468"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="slider-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="slider-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="slider-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>

  </div>
  <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-468x60/index.html" frameborder="0" height="60" width="468"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>


  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div class="row">
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="s1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Currency Wallet
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="s2.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Security Storage
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="s3.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Expert Support
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a href="">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
  <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-300x250/index.html" frameborder="0" height="250" width="300"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>
  <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-250x250/index.html" frameborder="0" height="250" width="250"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>
  <section class="about_section layout_padding">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h2>
          About <span>Us</span>
        </h2>
        <p>
          Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src="about-img.png" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <h3>
              We Are Finexo
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <p>
              Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-120x600/index.html" frameborder="0" height="600" width="120"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>

  <div style="position: relative;"><iframe src="https://publisher.linkvertise.com/cdn/ads/LV-300x600/index.html" frameborder="0" height="600" width="300"></iframe><a href="https://publisher.linkvertise.com/ac/1237766" target="_blank" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></a></div>
  <section class="why_section layout_padding">
    <div class="container">
      <!-- reklama -->
    </div>
  </section>

  <!-- end why section -->

  <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="team-1.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Joseph Brown
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="team-2.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Nancy White
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="team-3.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Earl Martinez
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="team-4.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Josephine Allard
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center psudo_white_primary mb_45">
        <h2>
          What says our <span>Customers</span>
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="owl-carousel client_owl-carousel">
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="client1.jpg" alt="" class="box-img">
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      LusDen
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="client2.jpg" alt="" class="box-img">
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      Zen Court
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="client1.jpg" alt="" class="box-img">
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      LusDen
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="client2.jpg" alt="" class="box-img">
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      Zen Court
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>
              Address
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="info_social">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>
              Info
            </h4>
            <p>
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>
              Links
            </h4>
            <div class="info_links">
              <a class="active" href="index.html">
                Home
              </a>
              <a class="" href="about.html">
                About
              </a>
              <a class="" href="service.html">
                Services
              </a>
              <a class="" href="why.html">
                Why Us
              </a>
              <a class="" href="team.html">
                Team
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>


  <section class="footer_section">


    <!-- Reklama -->



  </section>


</body>

</html>
    `);
});

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
