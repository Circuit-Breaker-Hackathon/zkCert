import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About ZkCert 🏦</h1>

      <p className="mt-3">
        The scientific community can be very sensitive to whistleblowers and
        honest scientific mistake reports. For this reason, most scientists
        prefer to make comments on scientific articles anonymously, avoiding the
        backlash it comes with. zkCert takes this feature one step further and
        allows scientists to verify their email accreditation using their
        institutional mail without exposing their identity, allowing scientists
        to accredit their intitutional affiliation while still making anonymous
        comments. We created a brand new app called zkCert for scientific
        article anonymous commenting. In the app, users can search scientific
        articles using DOI and make anonymous comments on them. We integrated
        web3 wallet login and delved into zkEMAIL sowftware for email
        verification. When the user wants to verify an institutional email, the
        app will generate a random word that the user needs to autoemail
        themselves using the institutional email, the user then uploads the
        email signature with the random word included in it. In this way, the
        app verifies the email ownership and timestamps the verification using
        the random word. Using zk technology, the app will verify the
        @institution domain of the user's email without exposing the full email.
        Once the institutional email is verified, the anonymous user can still
        comment anonymously with a badge that credits their affiliation.{" "}
      </p>
    </div>
  );
}
