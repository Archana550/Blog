import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getPosts } from "./helper/coreapicalls";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllPosts = () => {
    getPosts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    loadAllPosts();
  }, []);

  return (
    <Base title="Welcome To My Blog🎉" description="Let's get started">
      <div className="row text-center">
        <div className="row">
          {posts.map((posts, index) => {
            return (
              <div key={index} className="col-4 mb-4">
              <p>{index +1}.</p>
                <Card post={posts} />
                <hr id="hr-front" />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
