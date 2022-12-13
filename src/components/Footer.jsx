import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoNegro">
            <div className="container py-0">
                <hr />
                <div className="row">
                    <div className="col md-6">
                    </div>
                    <div className="col md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/GamaDesarrollos"} target={"_blank"} rel="noreferrer"><img src={"/images/facebook.png"} className="me-3" alt={"Facebook"} width={"24"} /></a>
                            <a href={"https://www.instagram.com/accounts/login/?next=/gamadesarrollos/"} target={"_blank"} rel="noreferrer"><img src={"/images/instagram.png"} className="me-3" alt={"Instagram"} width={"24"} /></a>
                            <a href={"https://www.youtube.com/user/portalgama"} target={"_blank"} rel="noreferrer"><img src={"/images/youtube.png"} className="me-3" alt={"Youtube"} width={"24"} /></a>
                            <a href={"https://www.linkedin.com/company/gama-sa"} target={"_blank"} rel="noreferrer"><img src={"/images/twitter.png"} className="me-3" alt={"Twitter"} width={"24"} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer