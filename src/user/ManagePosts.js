import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import Base from "../core/Base";
import { deletePost, getPosts } from "./helper/writeHelper";

export default function ManagePosts() {
  const [posts, setPosts] = useState([]);

  const preload = () => {
    getPosts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisPost = (postId) => {
    deletePost(postId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        alert("This post will be deleted permanently ?");
        preload();
      }
    });
  };
  return (
    <Base title=" " description="Manage your posts here">
      <h2 className="mb-4">All posts:</h2>
      <div className=" container">
        <div className=" row">
          <div className="col-12">
            {posts.map((post, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h3 className="text-white text-left"><span>{index+1}.  </span>{post.title}</h3>
                  </div>
                  <div className="col-4">
                    <Link to={`/myblogs/${post._id}`}>
                      {" "}
                      <BsPencilSquare
                        className="update-icon"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Update Post"
                      />
                    </Link>
                  </div>
                  <div className="col-4">
                    <span
                      onClick={() => {
                        deleteThisPost(post._id);
                      }}
                    >
                      <MdDelete
                        className="delete-icon"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Delete Post"
                      />
                    </span>
                    <hr/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
}
