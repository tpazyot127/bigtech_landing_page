import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  Global digital asset market maker and venture capital funds
                </h2>
              </div>
              <p>
                Polygon Capital is the global digital asset market maker and Venture Capital funds
                web3 investment firm with offices in Singapore, HongKong . The investment company is an affiliate of BTE,
                one of the world's largest high-frequency cryptocurrency trading
                entities, which trades spot and derivatives markets on over 40
                top exchanges.
              </p>
              <Link href="/" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
