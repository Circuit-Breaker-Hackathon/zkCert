import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { DynamicWidget } from "../lib/dynamic";

export default function Home() {
  return (
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
          innerButtonComponent={<button>Get Started</button>}
        ></DynamicWidget>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/about"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            What to help improve zkCert <Code color="primary">Contribute </Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
