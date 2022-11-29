import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className={"container py-5"}>
                <div className={"row"} >
                    <div className={"col-md-12 text-center"} >
                        <p> <img src={"images/logom.png"} alt={"kimkelen"} width={200} /> </p>
                    <p><a href={"https://www.instagram.com/kimkelen.objetosautoctonos/"}><img src={"images/instagram.png"} alt={"instagram"} width={30} className={"me-3"} /></a>
                        <a href={"https://www.facebook.com/kimkelen.di"}><img src={"images/facebook.png"} alt={"facebook"} width={30} className={"me-3"} /></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;