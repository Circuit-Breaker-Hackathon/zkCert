"use client";
import CommentSection from "@/components/commentSection";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
// Define a type for the article data
type Article = {
  title: string;
  journal?: string;
  author?: string;
  publisher?: string;
  keywords?: string; // Assuming keywords is a comma-separated string
  year?: string;
  month?: string;
  doi: string;
  url: string;
};

const ArticlePage = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const doi = params.get("doi");

    if (doi) {
      fetch(`/api/getarticle?doi=${encodeURIComponent(doi)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch article: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.article) {
            setArticle(data.article);
          } else {
            console.error("Article not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
        });
    }
  }, []);
  return (
    <>
      {article ? (
        <>
          <div className="grid lg:grid-cols-[6fr,2fr] gap-4">
            <div className="">
              <p className="text-base font-semibold leading-7 text-purple-600">
                Article
              </p>

              <h1 className="mt-2 mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
                {article.title}
              </h1>

              <p className="font-light text-lg">
                Journal:
                <span className="font-bold"> {article.journal}</span>
              </p>

              <p className="text-base font-light">
                Author: <span className="font-bold"> {article.author} </span>
              </p>
              <p className="text-base font-light mb-3">
                Publisher:{" "}
                <span className="font-bold">{article.publisher} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              {article.keywords?.split(",").map((keyword, index) => (
                <Chip key={index} className="mr-1 mb-2" color="secondary">
                  {keyword.trim()}
                </Chip>
              ))}
            </div>

            <Card className="max-w-[350px] max-h-[350px]">
              {" "}
              {/* Decreased the width of the card */}
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md px-4">{article.title}</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="px-4">
                  <p>Published: {article.year}</p>
                  <p>Month Posted: {article.month}</p>
                  <p>DOI: {article.doi}</p>
                  <a
                    href={article.url}
                    className="text-primary-500 hover:underline font-semibold"
                  >
                    Read the full article{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mb-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </CardBody>
              <hr />
              <CardFooter>
                {" "}
                <div>
                  <div className="mb-2">
                    <p className="font-semibold">Share Article</p>
                  </div>
                  <div className="flex">
                    <Button className="mr-1" color="secondary" variant="ghost">
                      Copy Link 🔗
                    </Button>{" "}
                    <Button color="default">
                      Share on{" "}
                      <Image
                        className="w-6 h-6"
                        src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=826&t=st=1707400857~exp=1707401457~hmac=28e59290717c1b9853bb465c71cf083cac73e10b773499c85a845ff7a2f6bd7c"
                      />
                    </Button>{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </>
      ) : (
        // loading spinner
        <div className="flex justify-center items-center">
          <Spinner label="Loading..." color="secondary" />
        </div>
      )}
      <div>
        <CommentSection />
      </div>
    </>
  );
};
export default ArticlePage;
