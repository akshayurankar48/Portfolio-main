import React, { useState, useEffect } from "react";
import "../App.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(8);

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.portfolio.projects);
      });
  }, []);

  const loadMore = () => {
    setVisible((preValue) => preValue + 4);
  };

  const reset = () => {
    setVisible(8);
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects &&
              projects.slice(0, visible).map((project) => (
                <div key={project.title} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a
                      href={project.url}
                      title={project.title}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt={project.title}
                        src={`images/portfolio/${project.image}`}
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className="div-loadMore">
            {visible >= projects.length ? (
              <a
                onClick={reset}
                className="smoothscroll loadMore button"
                href="#portfolio"
              >
                Show Less
              </a>
            ) : (
              <button onClick={loadMore} className="loadMore button">
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
