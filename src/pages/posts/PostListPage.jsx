import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

// Import card component
import PostCard from "../../components/PostCard";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-center my-5">Lista dei post</h1>

      <div className="row row-cols-2 g-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
