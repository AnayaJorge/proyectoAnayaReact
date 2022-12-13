import React from "react";

const DescargaAplicacion = () => {
    return (
        <div className="container-fluid fondoRojo">
            <div className="container pt-5">
                <div className="row">
                    <div className="col md-6 text-center">
                        <img src={"/images/cgOficina350.jpg"} alt={"Oficina"} width={350}/>
                    </div>
                    <div className="col md-6 d-flex align-items-end">
                        <div>
                            <h2>Descargá nuestra APP y adquirí nuestros productos estes donde estes</h2>
                            <p>
                                <a href="/" target={"_blank"} rel="noreferrer"><img src={"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/google_play.png"} alt={"Android"} width={135} /></a>
                                <a href="/" target={"_blank"} rel="noreferrer"><img src={"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/app__store.png"} alt={"Apple"} width={135} /></a>
                            </p>
                            <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescargaAplicacion