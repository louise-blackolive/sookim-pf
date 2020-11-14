import React from "react";
import RecentlyPosted from "./RecentlyPosted";
import Sidebar from "./Sidebar";

const Blog = () => {
  return (
    <div className="blog">
      <RecentlyPosted />
      <Sidebar />
    </div>
  );
};

export default Blog;
