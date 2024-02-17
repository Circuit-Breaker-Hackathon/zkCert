"use client";
import React, { useState, useEffect } from "react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Textarea } from "@nextui-org/input";
import { Spinner } from "@nextui-org/spinner";

type Comment = {
  id: number; // Adjust according to your database schema
  comment_content: string;
  timestamp: string;
};
const CommentSection = ({ articleDOI }: { articleDOI: string }) => {
  const [comment, setComment] = useState(""); // state to store and set comment
  const [comments, setComments] = useState<Comment[]>([]); // state to render comments
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the comment is being submitted
  const [isLoadingComments, setIsLoadingComments] = useState(true); // Initially true until comments are fetched

  useEffect(() => {
    setIsLoadingComments(true); // Start loading before fetching
    fetch(`/api/getcomments?doi=${encodeURIComponent(articleDOI)}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.result);
        setIsLoadingComments(false);
      })
      .catch((error) => console.error("Error fetching comments:", error));
    setIsLoadingComments(false);
  }, [articleDOI]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `/api/getcomments?doi=${encodeURIComponent(articleDOI)}`
      );
      const data = await response.json();
      setComments(data.result);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // post a comment
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Start submitting

    const commentData = {
      Doi: articleDOI,
      Comment_content: comment,
      User_Address: "UserAdrress",
    };

    try {
      const response = await fetch("/api/addcomments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(commentData),
      });

      const result = await response.json();
      console.log(result);
      fetchComments();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); // End submitting regardless of the outcome
    }
  };

  return (
    <section className="py-8 lg:py-9 antialiased">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion ({comments.length})
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="sr-only">Your comment</label>
          <Textarea
            isRequired
            label="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            labelPlacement="outside"
            placeholder="Write your comment here..."
            className="max-w-full mb-4"
          />

          <Button type="submit" color="secondary" disabled={isSubmitting}>
            Post Comment {isSubmitting && <Spinner color="warning" size="sm" />}
          </Button>
        </form>

        {isLoadingComments
          ? Array.from(
              { length: 5 },
              (
                _,
                index // Example: 5 skeletons
              ) => (
                <div
                  key={index}
                  className="animate-pulse p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-gray-300 h-10 w-10"></div>
                      <div className="flex-1 py-1">
                        <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              )
            )
          : comments.map((comment) => (
              <article
                key={comment.id}
                className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-4"
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <Avatar
                        classNames={{
                          base: "bg-gradient-to-br from-purple-400 to-purple-700 mr-2 w-6 h-6 rounded-full",
                          icon: "text-black/80",
                        }}
                        showFallback
                        src="https://images.unsplash.com/photo-identifier" // Use a placeholder or actual user avatar if available
                      />
                      Anonymous
                    </p>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400"
                      title={new Date(comment.timestamp).toLocaleString()}
                    >
                      {new Date(comment.timestamp).toString() !== "Invalid Date"
                        ? new Date(comment.timestamp).toLocaleDateString()
                        : "Date not available"}
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="light">
                          {" "}
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                          >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem
                          key="report"
                          className="text-danger"
                          color="danger"
                        >
                          Report Comment 🚩
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  {comment.comment_content}{" "}
                  {/* Adjust property name if needed */}
                </p>
              </article>
            ))}
      </div>
    </section>
  );
};

export default CommentSection;
