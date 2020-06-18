import React from 'react';
import 'bulma/css/bulma.css'
import Web from './../images/web.svg'

let Home = () => {
    return (



        <div className="hero  is-fullheight  main-hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-5">
                            <h1 className="title is-spaced full-name">Amadou IBRAHIM</h1>
                            <div className="subtitle">
                                <p>
                                    I'm a Full-Stack Developper based in Benin Republic and thisis my PortFolio
                            </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image">
                                <img src={Web} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>



    );
}

export default Home;