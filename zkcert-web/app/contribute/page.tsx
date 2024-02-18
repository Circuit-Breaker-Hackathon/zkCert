import { title } from "@/components/primitives";

export default function ContributePage() {
  return (
    <div>
      <h1 className={title()}>Contribute to ZkCert 👩‍💻 </h1>
      <a
        href="https://github.com/Circuit-Breaker-Hackathon/zkCert"
        type="button"
        className="text-white mt-4 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clip-rule="evenodd"
          />
        </svg>
        Contribute on Github
      </a>
      <p className="mt-5">
        ZkCert is a open source project feel free to help improve the project.{" "}
      </p>
      <br />
      <p>
        Contributing to an open-source project like ZkCert offers a unique
        opportunity to collaborate on a platform where innovation and community
        come together. Open-source projects thrive on the diversity of their
        contributors, bringing different perspectives, skills, and ideas to the
        table.
      </p>
      <br />
      <p>
        By getting involved with ZkCert, you are not just coding; you are part
        of a collective effort to improve, innovate, and push the project
        forward. Whether you are fixing bugs, adding new features, improving
        documentation, or helping with design and testing, your work directly
        impacts the quality and effectiveness of the project.
      </p>
    </div>
  );
}
