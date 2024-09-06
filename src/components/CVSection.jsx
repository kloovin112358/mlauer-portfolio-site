import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CVProgrammingLanguageCard from './cvProgrammingLanguageCard';

const CVSection = () => {
  return (
    <section>
        <div className="container">
            <div className="pb-3 mt-3 mt-lg-5">
            <Fade duration={1000}>
                <h1 className="display-3 fw-bold" id="CV">Curriculum Vitae</h1>
                <h2 className="mt-3">Technologies:</h2>
                <div className="d-flex flex-wrap gap-2">
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" altText="Python" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" altText="MATLAB" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fortran/fortran-original.svg" altText="Fortran" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" altText="C" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" altText="C++" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" altText="R" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg" altText="Julia" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" altText="JavaScript" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" altText="HTML" />
                  <CVProgrammingLanguageCard url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" altText="CSS" />
                </div>
                </Fade>
            </div>
        </div> 
    </section>
  );
};

export default CVSection;
