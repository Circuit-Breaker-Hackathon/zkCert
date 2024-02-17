"use client";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { DynamicWidget } from "../lib/dynamic";
import CTACards from "@/components/ctaCards";
import { ethers } from "ethers";
import VerifyModal from "@/components/verify-modal";
import { useUser } from "@/contexts/userContext";

export default function Home() {
  const [isWidgetClicked, setIsWidgetClicked] = useState(false);
  const { setIsLoggedIn } = useUser();

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum && isWidgetClicked) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const interval = setInterval(async () => {
        try {
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            clearInterval(interval); // Stop polling once an account is found
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            console.log(address); // Log the address in the console
            setIsLoggedIn(true);
            // Set the wallet address in local storage
            localStorage.setItem("walletAddress", address);

            // Inside your useEffect, after successfully getting the address

            // Make a POST request to your API endpoint
            fetch("/api/checkuser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ walletAddress: address }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);

                console.log("User is logged in");
                // Handle success response, update UI or state as necessary
              })
              .catch((error) => {
                console.error("Error:", error);
                // Handle errors, update UI or state as necessary
              });
          }
        } catch (error) {
          console.error(error); // Handle errors
          clearInterval(interval); // Stop polling in case of an error
        }
      }, 1000); // Check every 1000 milliseconds (1 second)

      return () => clearInterval(interval); // Cleanup the interval on component unmount or re-render
    }
  }, [isWidgetClicked]);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Report&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>scientific&nbsp;</h1>
          <br />
          <h1 className={title()}>errors anonymously with ease 🎭</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            We understand that reporting scientific errors can sometimes lead to
            backlash, so we provide a safe and secure environment for you to
            contribute to the improvement of scientific research.
          </h2>
        </div>

        <div className="flex gap-3">
          <DynamicWidget
            innerButtonComponent={
              <button onClick={() => setIsWidgetClicked(true)}>
                Get Started
              </button>
            }
          ></DynamicWidget>
          <VerifyModal />
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              What to help improve zkCert{" "}
              <Code color="primary">Contribute </Code>
            </span>
          </Snippet>
        </div>
      </section>

      <CTACards />
    </>
  );
}
