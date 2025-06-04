import { usePost } from "../contexts/PostContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { posts } = usePost();

  return (
    <div className="row row-cols-2 g-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
