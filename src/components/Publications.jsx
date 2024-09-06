import React from 'react';
import { Fade } from 'react-awesome-reveal';

const citationData = [
  {
    id: "[1]",
    title: "A Parametrization Framework for Multi-Element Airfoil Systems Using Bézier Curves",
    authors: "M. G. Lauer and P. J. Ansell",
    conference: "AIAA AVIATION 2022 Forum",
    location: "Chicago, IL",
    publisher: "American Institute of Aeronautics and Astronautics",
    date: "Jun. 2022",
    doi: "<a href='https://doi.org/10.2514/6.2022-3525'>10.2514/6.2022-3525</a>",
  },
  {
    id: "[2]",
    title: "Aerodynamic Shape Optimization of a Transonic, Propulsion-Airframe-Integrated Airfoil System",
    authors: "M. G. Lauer and P. J. Ansell",
    conference: "AIAA AVIATION 2022 Forum",
    location: "Chicago, IL",
    publisher: "American Institute of Aeronautics and Astronautics",
    doi: "<a href='https://doi.org/10.2514/6.2022-3662'>10.2514/6.2022-3662</a>",
  },
  {
    id: "[3]",
    title: "Experimental and Computational Investigation of the Transonic Aero-propulsive Interactions of an Overwing Ducted Fan",
    authors: "M. G. Lauer",
    thesis: "University of Illinois Urbana-Champaign",
    year: "2021",
    accessed: "Mar. 17, 2023",
    url: "<a href='https://hdl.handle.net/2142/110535'>https://hdl.handle.net/2142/110535</a>",
  },
  {
    id: "[4]",
    title: "Hybridization Impact on Emissions for Hydrogen Fuel-Cell/Turbo-Electric Aircraft",
    authors: "E. Waddington, H. Jois, M. G. Lauer, Y. Patel, and P. J. Ansell",
    conference: "AIAA AVIATION 2023 Forum",
    publisher: "American Institute of Aeronautics and Astronautics",
    date: "2023",
    doi: "<a href='https://doi.org/10.2514/6.2023-3873'>10.2514/6.2023-3873</a>",
  },
  {
    id: "[5]",
    title: "Preliminary Design and Optimization of a Hydrogen-Electric Aircraft Concept",
    authors: "P. Ranjan, G. K. Das, E. Waddington, M. G. Lauer, P. J. Ansell, and K. James",
    conference: "AIAA AVIATION 2023 Forum",
    publisher: "American Institute of Aeronautics and Astronautics",
    date: "2023",
    doi: "<a href='https://doi.org/10.2514/6.2023-4344'>10.2514/6.2023-4344</a>",
  },
];

// Formatting function
function formatCitations(data) {
  return data.map((citation, index) => {
    let formatted = '';

    if (citation.id) {
      formatted += `${citation.id} `;
    }
    if (citation.authors) {
      formatted += `${citation.authors}, `;
    }
    if (citation.title) {
      formatted += `"${citation.title}", `;
    }
    if (citation.conference) {
      formatted += `in <i>${citation.conference}</i>, `;
    }
    if (citation.location) {
      formatted += `${citation.location}: `;
    }
    if (citation.publisher) {
      formatted += `${citation.publisher}, `;
    }
    if (citation.date) {
      formatted += `${citation.date}. `;
    }
    if (citation.doi) {
      formatted += `doi: ${citation.doi}.`;
    }
    if (citation.thesis) {
      formatted += `${citation.thesis}, Thesis, `;
    }
    if (citation.year) {
      formatted += `${citation.year}. `;
    }
    if (citation.url) {
      formatted += `Accessed: ${citation.accessed}. [Online]. Available: ${citation.url}`;
    }

    return (
      <React.Fragment key={index}>
        {index !== 0 && <br />}
        <div dangerouslySetInnerHTML={{ __html: formatted.trim() }} />
      </React.Fragment>
    );
  });
}

const Publications = () => {
  const formattedCitations = formatCitations(citationData);

  return (
    <section>
      <div className="container">
        <div className="pb-3 mt-3 mt-lg-5">
        <Fade duration={1000}>
          <h1 className="display-3 fw-bold" id="publications">Publications</h1>
          <div className="font-monospace">
          {formattedCitations}</div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Publications;


