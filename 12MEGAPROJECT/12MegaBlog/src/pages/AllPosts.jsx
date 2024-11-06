import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import service from "../AppWrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const userData = useSelector((state) => state.auth.userData);
  const [authoredPost, setAuthoredPost] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((response) => {
      if (response) {
        setAuthoredPost(
          response.documents.filter(
            (post) => post && userData && post.userId === userData.$id
          )
        );
      }
    });
  }, [service, userData]);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {authoredPost.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
