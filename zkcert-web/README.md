#  ZkCert Front-End Project Overview

ZkCert front-end application, built with Next.js 14 and TypeScript for robust and scalable web development. We've chosen Tailwind CSS for its utility-first approach to styling and NextUI for its rich set of UI components, ensuring a responsive and modern interface. The front end allows the user to sign up with eth, anonymously verify with zkemail, comment on scientific papers and more.

## Key Features 🔑

- **Modern Frameworks**: Built with Next.js 14 for server-side rendering and static generation, ensuring fast page loads and optimal SEO performance.
- **Type Safety**: TypeScript integration for type-safe code, reducing runtime errors and enhancing developer productivity.
- **Stylish UI**: Utilizes Tailwind CSS for custom styling and NextUI for ready-to-use components, making the UI sleek and user-friendly.
- **Ethereum Authentication**: Implements Ethereum-based sign-in for a secure and anonymous user authentication process, powered by the Dynamic.xyz library.
- **Data Storage**: PostgreSQL database connected via Vercel for reliable and scalable data storage, managing user data, papers, comments, and more.
- **API Integration**: Seamless API calls from the front end to the database in TypeScript, ensuring smooth data retrieval and management.
- **Privacy-Centric**: Designed to keep user anonymity at the forefront, storing only wallet addresses and employing zkEmail for secure email verification.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or later)
- npm

  ```sh
  npm install npm@latest -g

Once you have cloned or forked the repo 

```bash
  npm install 
```

Run the dev server
```bash
  npm run dev
```
Usage -
This project is designed for users to interact with scientific papers, allowing them to add comments, and view verified and unverified comments through a secure and anonymous system. Sign in with Ethereum enables a privacy-focused authentication mechanism.

Contributing -
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project 

- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## Acknowledgements
- Next.js
- TypeScript
- Tailwind CSS
- [NextUI](https://nextui.org/)
- [Dynamic.xyz](https://www.dynamic.xyz/)
- PostgreSQL
- [Vercel](https://vercel.com/)
- zkEmail
