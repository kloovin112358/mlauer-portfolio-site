import React from 'react';
import { Fade } from 'react-awesome-reveal';

const RepositoriesSection = () => {
  return (
    <section>
        <div className="container">
            <div className="pb-3 mt-3 mt-lg-5">
                <Fade duration={1000}>
                <h1 className="display-3 fw-bold" id="repositories">Repositories</h1>
                <div className="d-flex flex-wrap gap-2">
                    <div className="card border border-light" style={{width:"22rem"}}>
                      <div className="card-body d-flex flex-column justify-content-between" style={{minHeight:"24rem"}}>
                      <div>
                        <img src="/pymead-logo.png" className="figure-img img-fluid rounded" alt="pymead logo" loading="lazy" style={{height:"100px",width:"100px"}}/>
                        
                          <h3 className="fw-bold">Python Multi-Element Airfoil Design (pymead)</h3>
                          <p className="font-monospace">
                            An end-to-end airfoil system design, analysis, and optimization framework with an integrated GUI
                          </p>
                          </div>
                        <div className="d-grid">
                          <a className="btn btn-info" href="https://github.com/mlau154/mlau154.github.io">View on GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="card border border-light" style={{width:"22rem"}}>
                      <div className="card-body d-flex flex-column justify-content-between" style={{minHeight:"24rem"}}>
                      <div>
                        <img src="/undraw_website.svg" className="figure-img img-fluid rounded" alt="pymead logo" loading="lazy" style={{height:"100px",width:"100px"}}/>
                        
                          <h3 className="fw-bold">Personal (this) website</h3>
                          <p className="font-monospace">
                          Built from scratch with HTML, CSS, and just a pinch of JavaScript.
                          </p>
                          </div>
                        <div className="d-grid">
                          <a className="btn btn-info" href="https://github.com/mlau154/mlau154.github.io">View on GitHub</a>
                        </div>
                      </div>
                    </div>
                </div>

                </Fade>
            </div>
        </div> 
    </section>
  );
};

export default RepositoriesSection;
