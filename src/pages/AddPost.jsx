import React from "react";
import { PostForm, Container } from "../components/index.js";

function AddPost() {
  return (
    <div className=" bg-gray-100 py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
