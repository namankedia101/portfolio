import React from "react";
import FadeInSection from "./FadeInSection";

function Footer() {
  return (
    <div className="footer container-fluid">
      <FadeInSection>
        <div className="row">
          <div className="col-lg-6">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="col-lg-6">
            <div className="btn-group">
              <div className="social">
                <a href="https://www.linkedin.com/in/naman-kedia-0abb96184?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVf4yW5mcS6mujpZ7dB%2Fg%2BQ%3D%3D" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin shadow p-3 mb-5"></i></a>
              </div>
              <div className="social">
                <a href="https://twitter.com/NamanKedia4" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square  shadow p-3 mb-5"></i></a>
              </div>
              <div className="social">
                <a href="https://www.behance.net/namankedia11" target="_blank" rel="noopener noreferrer"><i class="fab fa-behance-square shadow p-3 mb-5"></i></a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="row">
        <div className="col-lg-4">
          <p>Mobile: +91-9311272287</p>
        </div>
        <div className="col-lg-4">
          <p>E-mail: kediaarts@gmail.com</p>
        </div>
        <div className="col-lg-4">
          <p>New Delhi, India</p>
        </div>
      </div>
      <h6>Copyright @ 2021 Naman Kedia</h6>
    </div>
  )
}

export default Footer;
