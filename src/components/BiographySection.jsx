import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const BiographySection = () => {
  return (
    <section>
        <div className="container">
            <div className="pb-3 mt-3 mt-lg-5">
              <Fade duration={1000}>
                <h1 className="display-3 fw-bold" id='biography'>Biography</h1>
                <p>
                  Matt Lauer is a Ph.D. student in the Department of Aerospace Engineering under Dr. Phillip Ansell at the University of Illinois Urbana-Champaign. 
                  Matt's research has focused on leveraging aerodynamic and aeropropulsive benefits enabled by hydrogen-electric aircraft configurations, in particular on NASA's Center for High-Efficiency Electrical Technologies for Aircraft (<a href="https://techport.nasa.gov/view/96122">CHEETA</a>). 
                  His research interests include applied aerodynamics, configuration aerodynamics, multi-disciplinary optimization (MDO), geometric parametrization methods, and aerodynamic tool development.
                </p>
              </Fade>
              <Fade duration={1000}>
                <h2 className="display-5 fw-bold mt-5">Education</h2> 
                <VerticalTimeline layout={'1-column'} lineColor={"lightgrey"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#003B6F', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #003B6F' }}
                    date="2021-2024 (Expected)"
                    dateClassName={ "dateColor" }
                    iconStyle={{ background: '#003B6F', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title"><strong>Ph.D., Aerospace Engineering</strong></h3>
                    <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>University of Illinois Urbana-Champaign</strong> | Urbana, IL</h5>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#003B6F', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #003B6F' }}
                    date="2019-2021"
                    dateClassName={ "dateColor" }
                    iconStyle={{ background: '#003B6F', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title"><strong>M.S., Aerospace Engineering</strong></h3>
                    <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>University of Illinois Urbana-Champaign</strong> | Urbana, IL</h5>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#A50000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A50000' }}
                    date="2015-2019"
                    dateClassName={ "dateColor" }
                    iconStyle={{ background: '#A50000', color: '#fff' }}
                  >
                    <h3 className="vertical-timeline-element-title"><strong>B.S., Mechanical Engineering</strong></h3>
                    <h5 className="vertical-timeline-element-subtitle mt-2 font-monospace"><strong>Bradley University</strong> | Peoria, IL</h5>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </Fade>
            </div>
        </div> 
    </section>
  );
};

export default BiographySection;
