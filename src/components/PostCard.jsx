import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={"http://localhost:3000" + post.image}
          className="card-img-top"
          alt={post.title}
        />
        <div className="card-body ">
          <p className="card-text d-flex flex-column align-items-center justify-content-between">
            <span className="text-center fw-bold fs-4">{post.title}</span>
          </p>

          <Link className="btn btn-primary" to={`/posts/${post.id}`}>
            Vai al dettaglio
          </Link>
        </div>
      </div>
    </div>
  );
}
