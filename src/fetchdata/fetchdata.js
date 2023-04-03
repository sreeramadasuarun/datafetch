import React, { useState, useEffect } from "react";
import "../fetchdata/fetchstyle.css";

const Company = () => {
  const [person, setPerson] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchdrinks = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data);
      console.log(data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdrinks("https://course-api.com/react-tabs-project");
  }, []);

  console.log(person);

  return (
    <div className="section">
      {loading ? (
        <h2 className="title">loading data wait</h2>
      ) : (
        <div className="movie-container">
          {person.map(({ company, title, dates, id }) => {
            return (
              <div key={id}>
                <div className="title">
                  <h4>company Name: {company}</h4>
                  <h4>title Name: {title}</h4>
                  <h4>dates: {dates}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Company;
