# zkCert
Circuit Breaker ETH Global hackathon project. An academic certification protocol that preserves user's privacy.

Code for the UI implementation can be found in [zkcert-web](https://github.com/Circuit-Breaker-Hackathon/zkCert/tree/main/zkcert-circuits), code for the zk verification of user institutional email can be found in zkcert-circuits

The scientific community can be very sensitive to whistleblowers and honest scientific mistake reports. For this reason, most scientists prefer to make comments on scientific articles anonymously, avoiding the backlash it comes with. 

zkCert takes this feature one step further and allows scientists to verify their email accreditation using their institutional mail without exposing their identity, allowing scientists to accredit their intitutional affiliation while still making anonymous comments. We created a brand new app called zkCert for scientific article anonymous commenting. In the app, users can search scientific articles using DOI and make anonymous comments on them. We integrated web3 wallet login and delved into zkEMAIL sowftware for email verification. When the user wants to verify an institutional email, the app will generate a random word that the user needs to autoemail themselves using the institutional email, the user then uploads the email signature with the random word included in it. In this way, the app verifies the email ownership and timestamps the verification using the random word. Using zk technology, the app will verify the @institution domain of the user's email without exposing the full email. Once the institutional email is verified, the anonymous user can still comment anonymously with a badge that credits their affiliation. 

Some features are mocked for a seamless user experience upon hackathon submission. The zkEMAIL verification, whose circuit is finished, is still missing integration features as to fetch the inputs from the email signature and include them within the UI flow. 
