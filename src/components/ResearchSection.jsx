import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ResearchSection = () => {
  return (
    <section>
        <div className="container">
            <div className="pb-3 mt-3 mt-lg-5">
                
                <Fade duration={1000}>
                <h1 className="display-3 fw-bold" id="research">Research</h1>
                <div className="researchProjectFirst">
                    <h2>Center for High-Efficiency Electrical Technologies for Aircraft (CHEETA)</h2>
                    <figure className="figure">
                        <img src="/CHEETA_system_focuses.png" className="figure-img img-fluid rounded img-thumbnail" alt="CHEETA system focuses diagram" loading="lazy" style={{zIndex:999}}/>
                        <figcaption className="figure-caption">System focuses for the NASA CHEETA project. Credits: Phil Ansell, UIUC</figcaption>
                    </figure>
                </div>
                </Fade>
                <Fade duration={1000}>
                <div className="researchProject">
                    <h2>Aeropropulsive Shape Optimization</h2>
                    <p>
                        To leverage the full aerodynamic benefit of propulsion integration, a coupled aerodynamics-propulsion system optimization can be performed.
                        In this study, both the aerodynamic drag and the mechanical flow power were used as performance characteristics to be minimized. See [<a href="#publications">2</a>]
                        for the original approach to this problem. A <em>Journal of Aircraft</em> article is in progress!
                    </p>
                    <div className="row">
                        <div className="col-md">
                            <figure className="figure">
                                <img src="/field_0_M_w50-50.png" className="figure-img img-fluid rounded img-thumbnail" alt="Baseline airfoil-propulsor system" loading="lazy" />
                                <figcaption className="figure-caption">Baseline airfoil-propulsor system</figcaption>
                            </figure>
                        </div>
                        <div className="col-md">
                            <figure className="figure">
                                <img src="/field_500_M_w50-50.png" className="figure-img img-fluid rounded img-thumbnail" alt="Optimized airfoil-propulsion system" loading="lazy" />
                                <figcaption className="figure-caption">Optimized airfoil-propulsor system</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade duration={1000}>
                <div className="researchProject"> 
                    <h2>Aerodynamic Tool Design</h2>
                    <p>
                        To facilitate fast changes to geometric parametrizations of multi-element airfoil systems, <a href="https://pymead.readthedocs.io/en/latest/">pymead</a> was created.
                        This tool allows for direct interaction with Bézier control points that define the airfoil systems. Equations can be added to create inter- and intra-airfoil constraints,
                        and these equations are linked dynamically in the GUI to the airfoil visualizer. This tool also has built-in support for both XFOIL and MSES, with aerodynamic analyses able to be run
                        with just a couple clicks or a keyboard shortcut. A genetic-algorithm-based optimization scheme is another feature in pymead that allows for design improvements
                        with no intermediate user action required.
                    </p>
                    <figure className="figure">
                        <img src="/pymead_capture1.PNG" className="figure-img img-fluid rounded img-thumbnail" alt="pymead demo" loading="lazy" />
                        <figcaption className="figure-caption">An aeropropulsive optimization running in pymead</figcaption>
                    </figure>
                </div>
                </Fade>
                <Fade duration={1000}>
                <div className="researchProjectLast">    
                    <h2>Aeropropulsive Coupling: Experimental and Computational Analysis</h2>
                    <p>
                        More details coming soon!
                    </p>
                </div>
                </Fade>
            </div>
            
        </div> 
    </section>
  );
};

export default ResearchSection;
