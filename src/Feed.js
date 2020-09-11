import React, { useState, useEffect } from "react";
import Storyreel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <Storyreel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
