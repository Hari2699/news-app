import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url =
      "https://newsapi.org/v2/everything?q=apple&apiKey=045769cb914b4227a2c2ebc32f01de68";

    fetch(url).then((response) => {
      response.json().then((news) => {
        console.log(news.articles);
        setArticles(news.articles);
      });
    });
  }, []);

  function readValue(value) {
    setSearch(value);
  }

  function searchNews() {
    let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=045769cb914b4227a2c2ebc32f01de68`;

    fetch(url).then((response) => {
      response.json().then((news) => {
        setArticles(news.articles);
      });
    });
  }

//   useEffect(() => {
//     let url =
//       `https://newsapi.org/v2/everything?q=${search}&apiKey=045769cb914b4227a2c2ebc32f01de68`;

//     fetch(url).then((response) => {
//       response.json().then((news) => {
//         setArticles(news.articles);
//       });
//     });
//   }, [search]);


  return (
    <div className="container">
      <div className="padd">
        <div className="filter">
          <input
            type="search"
            placeholder="Enter a topic to search"
            onChange={(e) => readValue(e.target.value)}
          />
          <button className="btn" onClick={searchNews}>
            Search for news
          </button>
        </div>
        <h1>All News</h1>
        {
            articles.length===0 ? (<h2>No Data Found </h2> ): 
            articles.map((article, index) => (
          <div key={index} className="article">
            <div className="padd-article">
              <div className="news-img">
                <img src={article.urlToImage} alt="/" />
              </div>
              <div className="news-detail">
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <p>
                  <a href={article.url} target="blank">
                    <button className="btn">Read full article</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
