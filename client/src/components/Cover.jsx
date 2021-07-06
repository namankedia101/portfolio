import React from "react";

function Cover() {

  return (<div className="container-fluid" >
    <h3>HEY, I'M</h3>
    <div className="typing">
      <h1 id="name">Naman Kedia</h1>
    </div>
    <div className="connect">
      <h4>Let's Connect!</h4>
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
    <img className="bg-body" id="profile-img" src={process.env.PUBLIC_URL + "/images/profile2.jpeg"} alt="profile-img"></img>
  </div>);
}

export default Cover;
