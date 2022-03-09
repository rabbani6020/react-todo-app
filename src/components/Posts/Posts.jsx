import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../Todo/Pagination";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setLoading(false);
      setPosts(response.data);
    });
  }, []);

  //
  const perPage = 10;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const totalPage = Math.ceil(posts.length / perPage);
  const currentPosts = posts.slice(startIndex, endIndex);

  const pageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNextHandler = () => {
    setCurrentPage(currentPage + 1);
  };
  const pagePrevHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong...</h2>}
      {currentPosts.length > 0 && (
        <ul className="list-group">
          {currentPosts.map((post) => (
            <li className="list-group-item" key={post.id}>
              {post.id} - {post.title}
            </li>
          ))}
        </ul>
      )}
      <Pagination
        pageNextHandler={pageNextHandler}
        pagePrevHandler={pagePrevHandler}
        totalPage={totalPage}
        pageHandler={pageHandler}
        currentPage={currentPage}
      />
    </>
  );
};

export default Posts;
