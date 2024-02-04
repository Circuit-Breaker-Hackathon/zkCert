import React from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";

const colors = ["secondary"];
export default function PapersPage() {
  return (
    <>
      <div>
        <h1 className={title()}>Browse and Search for Papers 📃</h1>
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5 mb-5">
        <Input type="email" label="Search for Papers" />
        <Button variant="shadow" color="secondary" size="lg">
          Search 🔎{" "}
        </Button>
      </div>

      <Card className="max-w-[1000px] mb-3">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Paper Name</p>
            <p className="text-small text-default-500">Subtitle</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            illo quod rerum quia cupiditate aspernatur eveniet nobis, dolores
            ipsum enim perferendis a quaerat corrupti nemo nam non neque
            voluptatem. Inventore!
          </p>

          <ul className="grid grid-cols-2 px-8 mt-5 text-sm">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              Mistakes Reported: <span className="font-semibold">5</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Comments: <span className="font-semibold">20</span>
            </li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="/">Read More</a>
        </CardFooter>
      </Card>

      <Card className="max-w-[1000px] mb-3">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Paper Name</p>
            <p className="text-small text-default-500">Subtitle</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            illo quod rerum quia cupiditate aspernatur eveniet nobis, dolores
            ipsum enim perferendis a quaerat corrupti nemo nam non neque
            voluptatem. Inventore!
          </p>

          <ul className="grid grid-cols-2 px-8 mt-5 text-sm">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              Mistakes Reported: <span className="font-semibold">5</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Comments: <span className="font-semibold">20</span>
            </li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="/">Read More</a>
        </CardFooter>
      </Card>

      <Card className="max-w-[1000px] mb-3">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Paper Name</p>
            <p className="text-small text-default-500">Subtitle</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            illo quod rerum quia cupiditate aspernatur eveniet nobis, dolores
            ipsum enim perferendis a quaerat corrupti nemo nam non neque
            voluptatem. Inventore!
          </p>

          <ul className="grid grid-cols-2 px-8 mt-5 text-sm">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              Mistakes Reported: <span className="font-semibold">5</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Comments: <span className="font-semibold">20</span>
            </li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="/">Read More</a>
        </CardFooter>
      </Card>

      <div className="flex flex-wrap gap-4 items-center mt-10">
        {colors.map((color) => (
          <Pagination
            key={color}
            total={10}
            initialPage={1}
            color="secondary"
          />
        ))}
      </div>
    </>
  );
}
