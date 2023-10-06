import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/images/herosection.jpg"
              className="img-fluid rounded-start rounded"
              alt="hero"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>
                {" "}
                <span className="badge bg-success w-100 mt-0">
                  Doctor Ngozo - Traditional Healer
                </span>
              </h1>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title fw-bold text-start ">Are you struggling</h5>
                      <p className="card-text fs-5 text-start" >
                      For All Your Love, Family, Relationship, Business, 
                         Challenges You Might Be Facing In Life.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title fw-bold text-start">Hear From Real People below !</h5>
                      <p className="card-text fs-5 text-start">
                        We have gathered testimonies from people who have been touched by 
                        Doctor Ngozo. <span className="fw-bold">Read Below</span>
                      </p>
                    </div>
                  </div>
                </div>

                <p className="card-text w-100 text-start mt-3 fs-6">
                  {" "}
                  The following are among the things we do;-Remove badlucks, Win
                  court cases, Win gambling, Get married to the person of your
                  choice, Bring back lost lover no matter how long you have been
                  separated, Remove evil spirits, Remove unwanted people,
                  Property protection, Financial problems so that you get more
                  independent and live life the way you want.
                </p>
              </div>
              <Link to="https://wa.me/27717033834">
                <button className="btn btn-success mt-3 w-100 btn-lg"><i className="fas fa-whatsapp"></i> Contact Me</button>
              </Link>
            </div>
          </div>
          <div className="card-group mt-2">
            <div className="card border-primary mb-3 ">
              <div className="card-header">Bring Love Back</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">You Still Want Him</h5>
                <p className="card-text">
                These love spells have been in use for ages now and our grandfathers and mothers 
                applied them to keep love in their relationships.
                </p>
              </div>
            </div>
            <div className="card border-danger mb-3">
              <div className="card-header">Money Problems</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">You deserve abundance in your life</h5>
                <p className="card-text">
                Money Spells can help you manifest it. Whether you’re looking to reframe 
                how you think about money, increase your salary,
                </p>
              </div>
            </div>
            <div className="card border-success mb-3">
              <div className="card-header">Traditional Healing</div>
              <div className="card-body text-secondary">
                <h5 className="card-title"> Improve luck and prosperity
</h5>
                <p className="card-text">
                Shield your aura from any spiritual harm Healing spiritual & physical 
                ailments Success Achieve your dreams & get what you want in life 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
