import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className={"container py-5"}>
        <div className={"row"}>
          <div className={"col-md-12 text-center"}>
            <p>{" "}<img src={"/images/logom.png"} alt={"kimkelen"} width={200}/>{" "}</p>
            <p>
              <Link to={"https://www.instagram.com/kimkelen.objetosautoctonos/"}><img src={"/images/instagram.png"} alt={"instagram"} width={30} className={"me-3"}/></Link>
              <Link to={"https://www.facebook.com/kimkelen.di"}><img src={"/images/facebook.png"} alt={"facebook"} width={30} className={"me-3"}/>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
