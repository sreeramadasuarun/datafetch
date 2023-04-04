import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../fetchdata/fetchstyle.css";

const Company = () => {
  const [personData, setPersonData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [value, setValue] = useState(0);

  const fetchdata = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPersonData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchdata("https://course-api.com/react-tabs-project");
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  console.log(personData);

  const { company, title, dates, duties } = personData[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {personData.map((props, index) => {
            return (
              <button
                key={uuidv4()}
                className={`job-btn   
                  ${index === value && "active-btn"}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {props.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-data">{dates}</p>
          <div className="job-desc">
            {duties.map((desc) => {
              return (
                <div>
                  <FaAngleDoubleRight className="job-icon" />
                  <p key={uuidv4()}>{desc}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Company;
