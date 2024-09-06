import React from 'react';
import { Fade } from 'react-awesome-reveal';

const PersonalSection = () => {
  return (
    <section>
        <div className="container">
            <div className="mt-3 mt-lg-5" id="finalSectionBeforeFooter">
            <Fade duration={1000}>
                <h1 className="display-3 fw-bold" id="personal">Personal</h1></Fade>
                <div className="row">
                    <div className="col-md">
                    <Fade duration={1000}>
                        <figure className="figure">
                            <img src="/illini_dgc_nationals_2023.jpg" className="figure-img img-fluid rounded" alt="Illini DGC Nationals" loading="lazy" />
                            <figcaption className="figure-caption">Members of the Illini Disc Golf Club at the 2023 College Disc Golf National Championship in Marion, NC. Credits: <a href="https://www.instagram.com/illini_dgc/">@illini_dgc</a></figcaption>
                        </figure>
                        </Fade>
                    </div>
                    <div className="col-md">
                    <Fade duration={1000} delay={500}>
                        <figure className="figure">
                            <img src="/illini_dgc_league.jpg" className="figure-img img-fluid rounded" alt="Illini DGC League" loading="lazy" />
                            <figcaption className="figure-caption">Last Illini DGC league of spring 2023. Credits: <a href="https://www.instagram.com/illini_dgc/">@illini_dgc</a></figcaption>
                        </figure>
                        </Fade>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  );
};

export default PersonalSection;
