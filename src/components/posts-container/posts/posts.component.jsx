import React, { useState } from "react";
import Post from "./post/post.component";
import "./posts.style.css";
import {
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Person6,
  Family,
  Friend,
  Success,
  Work,
  Nature,
  Jeep,
} from "./images";

export default function Posts() {
  const [posts] = useState([
    {
      id: "post1",
      name: "Emma Watson",
      profile: Person1,
      body: Family,
      loc: "Paris, French",
    },
    {
      id: "post2",
      name: "Emma Watson",
      profile: Person2,
      body: Nature,
      loc: "Paris, French",
    },
    {
      id: "post3",
      name: "Emma Watson",
      profile: Person3,
      body: Work,
      loc: "Paris, French",
    },
    {
      id: "post4",
      name: "Emma Watson",
      profile: Person4,
      body: Success,
      loc: "Paris, French",
    },
    {
      id: "post5",
      name: "Emma Watson",
      profile: Person5,
      body: Jeep,
      loc: "Paris, French",
    },
    {
      id: "post6",
      name: "Emma Watson",
      profile: Person6,
      body: Friend,
      loc: "Paris, French",
    },
  ]);
  return (
    <div className="posts">
      {posts.map((post) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
}
