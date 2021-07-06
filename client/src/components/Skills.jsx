import React from "react";
import FadeInSection from "./FadeInSection";

function Skills() {
  return (
    <div>
      <div className="container-fluid skills">
        <FadeInSection>
          <h1>
            WHAT I CAN DO:
            <br />
            <hr />
          </h1>
        </FadeInSection>
        <div className="creative">
          <FadeInSection>
            <h3>
              CREATIVE
              <br />
              SKILLS
            </h3>
          </FadeInSection>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="skill-img-div1">
                <FadeInSection>
                  <p>
                    I have used Adobe Photoshop <br />
                    and Illustrator
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <img
                    id="photoshop-img"
                    className="shadow p-1 mb-5 bg-body "
                    src={process.env.PUBLIC_URL + "/images/photoshop.jpg"}
                    alt="photoshop-img"
                  ></img>
                  <img
                    id="illustrator-img"
                    className="shadow p-1 mb-5 bg-body "
                    src={process.env.PUBLIC_URL + "/images/illustrator.jpg"}
                    alt="illustrator-img"
                  ></img>
                </FadeInSection>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <FadeInSection>
                <div className="skill-content-div">
                  <h2>
                    I HAVE EXPERIENCE IN:
                    <br />
                    <hr />
                  </h2>
                  <p>
                    Photo Editing <br />
                    Logo Design <br />
                    Instagram post design <br />
                    Web Design
                  </p>
                  <p className="project-link">
                    Creative projects I have made.
                    <br />
                    See my{" "}
                    <a
                      href="https://www.behance.net/namankedia11"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Behance
                    </a>{" "}
                    profile
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>

        <div className="technical">
          <FadeInSection>
            <h3>
              TECHNICAL
              <br />
              SKILLS
            </h3>
          </FadeInSection>
          <div className="row">
            <div className=" col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
              <FadeInSection>
                <div className="skill-content-div">
                  <h2>
                    TECHNOLOGIES I USE:
                    <br />
                  </h2>
                  <hr />
                  <p>
                    HTML, CSS, JavaScript <br />
                    MongoDB for Databases <br />
                    Express and Node for backend <br />
                    React for frontend <br />
                    C++ programming
                  </p>
                  <p className="project-link">
                    Check out my projects on{" "}
                    <a
                      href="https://github.com/namankedia101"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </FadeInSection>
            </div>

            <div className=" col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1">
              <FadeInSection>
                <div className="skill-img-div2 ">
                  <p>I am a full-stack web developer</p>

                  <img
                    id="mern-img"
                    src={process.env.PUBLIC_URL + "/images/mern.jpg"}
                    alt="MERN-img"
                  ></img>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
        <div className="extra">
          <FadeInSection>
            <h3>SOME EXTRAS...</h3>
          </FadeInSection>
          <FadeInSection>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-12 col-md-12">
                <p>Read 50+ books</p>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12">
                <p>Fitness 1+ year gym</p>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12">
                <p>Music Hip-Hop</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default Skills;
