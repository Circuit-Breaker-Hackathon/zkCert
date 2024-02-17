"use client";
import { Input } from "@nextui-org/input";
import { Navbar } from "@nextui-org/navbar";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { useUser } from "@/contexts/userContext"; // Import useUser hook
import React from "react";

const page = () => {
  const handleVerify = async () => {
    const walletAddress = localStorage.getItem("walletAddress");

    if (!walletAddress) {
      alert("Wallet address not found");
      return;
    }

    try {
      const response = await fetch("/api/verify", {
        // Replace with your actual endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success: You have been verified anonymously"); // Customize message as needed
      } else {
        throw new Error(data.error || "Verification failed");
      }
    } catch (error) {
      alert("Error: " + (error as Error).message);
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />

      <section>
        <h1 className={title()}>Upload Your Mail Signature ✒️</h1>
        <div className="mt-5 mb-3">
          <input
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full hover:bg-gray-300  hover:dark:bg-gray-800"
            type="file"
            accept=".txt"
          />
        </div>
        <div>
          <Button
            color="secondary"
            variant="shadow"
            onClick={handleVerify}
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            Verify ✅
          </Button>
        </div>
        <div className="mt-20">
          <h2 className="font-semibold">How to get your email signature?</h2>
          <ol className="list-decimal text-left mt-1">
            <li>
              Open the Sent Email: Go to your &quot;Sent&quot; folder and open
              the email in question.
            </li>
            <li>
              View Email Source or Headers: Look for an option to view the
              emails source, full headers, or similar. This option might be
              found in different places depending on your email client: In
              web-based clients like Gmail, you might find it in the dropdown
              menu at the top right of the email (represented by three dots),
              labeled as &quot;Show original&quot; or something similar. In
              desktop clients like Outlook, you might need to right-click the
              email, select &quot;Properties,&quot; and then look for
              &quot;Internet headers&quot; or go to &quot;File&quot; -
              &quot;Properties&quot; - &quot;Internet headers&quot;.
            </li>
            <li>
              Locate the Digital Signature: Within the email headers or source
              view, you might see fields related to digital signatures such as
              &quot;DKIM-Signature&quot; (DomainKeys Identified Mail),
              &quot;X-Sender-ID,&quot; or similar. These fields contain
              information used to validate the emails origin and integrity.
            </li>
            <li>
              Understanding the Signature: Interpreting the actual content of
              these fields can be complex, as they are meant to be read by
              machines rather than humans. They typically contain a hash value
              or cryptographic key that email servers use to verify the emails
              authenticity.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default page;
