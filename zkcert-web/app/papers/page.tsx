"use client";
import React, { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { Chip } from "@nextui-org/chip";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";

const colors = ["secondary"];
interface Paper {
  title: string;
  journal: string;
  abstract: string;
  doi: string;
  year: string;
  // Add other paper properties as needed
}

export default function PapersPage() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [doi, setDoi] = useState(""); // State for DOI search query
  const [searchPerformed, setSearchPerformed] = useState(false);

  // on page load, fetch all papers from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/displaypapers"); // hit the api route to retrieve papers
        if (!response.ok) throw new Error("Data fetch failed");
        const data = await response.json();
        setPapers(data.result); // set the papers state with the fetched data
        setIsLoaded(true); // Data fetched, set isLoaded to true
      } catch (error) {
        console.error("Failed to fetch papers:", error);
      }
    };

    fetchData(); // call the function to fetch papers
  }, []);

  const searchFetchData = async (searchDoi = "") => {
    setIsLoaded(false);
    const encodedDoi = encodeURIComponent(searchDoi); // Ensure the DOI is URL-encoded
    const apiUrl = `/api/searchpapers${searchDoi ? `?doi=${encodedDoi}` : ""}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Data fetch failed");
      const data = await response.json();
      setPapers(data.result);
      setSearchPerformed(!!searchDoi);
    } catch (error) {
      console.error("Failed to fetch papers:", error);
    } finally {
      setIsLoaded(true);
    }
  };

  // Fetch all papers from the database for clear method
  const fetchData = async () => {
    try {
      const response = await fetch("/api/displaypapers");
      if (!response.ok) throw new Error("Data fetch failed");
      const data = await response.json();
      setPapers(data.result);
      setIsLoaded(true);
    } catch (error) {
      console.error("Failed to fetch papers:", error);
    }
  };

  const handleSearch = () => {
    searchFetchData(doi.trim()); // Fetch data with DOI search query
  };

  const handleClear = () => {
    setDoi(""); // Clear the DOI input
    fetchData(); // Fetch all papers again without a DOI query
    setSearchPerformed(false); // Reset the search performed state
  };
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className={title()}>Browse and Search for Papers 📃</h1>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5 mb-5">
          <Input
            label="Search by DOI"
            value={doi}
            onChange={(e) => setDoi(e.target.value)}
          />
          <Button
            variant="shadow"
            color="secondary"
            size="lg"
            onClick={handleSearch}
          >
            Search 🔎
          </Button>
          <Button variant="shadow" size="md" onClick={handleClear}>
            {" "}
            Clear ✖️{" "}
          </Button>
        </div>
      </div>

      {!isLoaded ? (
        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map(
              (
                _,
                index // Render multiple skeletons
              ) => (
                <Skeleton
                  key={index}
                  isLoaded={isLoaded}
                  className="rounded-lg"
                >
                  <Card
                    className="w-full max-w-[1000px] space-y-5 p-4"
                    radius="lg"
                  >
                    <div className="h-24 rounded-lg bg-secondary"></div>
                    <div className="space-y-3">
                      <div className="h-3 w-3/5 rounded-lg bg-secondary"></div>
                      <div className="h-3 w-4/5 rounded-lg bg-secondary-300"></div>
                      <div className="h-3 w-2/5 rounded-lg bg-secondary-200"></div>
                    </div>
                  </Card>
                </Skeleton>
              )
            )}
        </div>
      ) : papers.length > 0 ? (
        // Render matching paper(s)
        papers.map((paper, index) => (
          <Card key={index} className="max-w-[1000px] mb-3">
            <CardHeader className="flex flex-col items-start">
              <div className="flex items-center">
                <Image
                  alt="paper thumbnail"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <p className="text-md text-start inline ml-2">{paper.title}</p>
              </div>
              <div className="mt-2">
                <p className="text-small text-default-500 text-start mt-1">
                  {paper.journal}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                {paper.abstract.slice(0, 200)}
                {paper.abstract.length > 200 ? "..." : ""}
              </p>
              {/* Add more paper details here as needed */}
              <div className="mt-3 grid md:grid-cols-3">
                <Chip radius="sm" variant="flat" color="secondary">
                  Published: <span className="font-semibold">{paper.year}</span>
                </Chip>
                <div>
                  <p className="text-sm mt-1">
                    Errors Reported: <span className="font-semibold">3</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mt-1">
                    Comments: <span className="font-semibold">20</span>
                  </p>
                </div>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link href={`/article?doi=${paper.doi}`}> Read More</Link>
            </CardFooter>
          </Card>
        ))
      ) : searchPerformed ? (
        <p>No results found for the provided DOI.</p>
      ) : (
        <p>No papers available.</p>
      )}

      <div className="flex flex-wrap gap-4 items-center mt-10">
        <Pagination total={10} initialPage={1} color="secondary" />
      </div>
    </div>
  );
}
