
'use client';
import { useState } from "react";
import Link from "next/link";

export default function Comment() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Function to handle comment submission
  const handleAddComment = () => {
    if (newComment.trim() !== "") { 
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="pt-5">
      <h1 className="lg:text-2xl text-blue-950 font-serif">Comments..</h1>
      <textarea
        className="border border-blue-950 rounded-lg lg:w-[500px] w-[280px] grid items-center justify-center pl-2"
        placeholder="Write Your Comment..."
        cols={5}
        rows={5}
        value={newComment}
        onChange={(data) => setNewComment(data.target.value)}
      ></textarea>

      <div className="flex justify-between items-center">
        <button
          onClick={handleAddComment}
          className="mt-4 px-8 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
        <Link href="/blog">
          <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded">
            Back
          </button>
        </Link>
      </div>

      {/* Display Comments */}
      <div className="mt-5">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-3 mt-2 bg-gray-100"
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

