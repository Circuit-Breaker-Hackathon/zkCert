import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const CTACards = () => {
  return (
    <div className="grid gap-2 md:grid-cols-3 mt-10">
      {" "}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://img.icons8.com/?size=64&id=52536&format=png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Effortless Error Reporting</p>
          </div>
        </CardHeader>

        <CardBody>
          <p>
            Submit reports with ease and confidence, knowing that your identity
            will remain anonymous.
          </p>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://img.icons8.com/?size=64&id=123737&format=png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">
              Verified Academic Credentials
            </p>
          </div>
        </CardHeader>

        <CardBody>
          <p>
            Our platform offers a secure way to verify academic degrees without
            compromising user privacy. We do this using Zero-Knowledge Proofs.
          </p>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://img.icons8.com/?size=64&id=44045&format=png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">
              {" "}
              Search our database of sceintific papers
            </p>
          </div>
        </CardHeader>

        <CardBody>
          <p>
            {" "}
            Search and browse our database of sceintific papers, read comment
            and report errors anonymously.
          </p>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default CTACards;
