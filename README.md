# MicroPasts Website

MicroPasts is a collaborative platform for crowdsourcing and crowdfunding research in archaeology, history, and heritage. The project brings together professionals and enthusiasts to help digitize, transcribe, and enrich historical data, making it accessible for research and public engagement. Learn more about the project at [micropasts.org](https://micropasts.org/).

This repository contains the code for the MicroPasts website, built as a simple one-page application using [Gatsby](https://www.gatsbyjs.com/). The site provides information about the project, showcases ongoing initiatives, and offers ways for the community to get involved.

## 🚀 Getting Started

Follow these steps to set up and run the website locally:

1. **Clone the repository**

    ```shell
    git clone https://github.com/your-username/micropasts-gatsby-website.git
    cd micropasts-gatsby-website
    ```

2. **Install dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```shell
    npm install
    ```

3. **Start the development server**

    ```shell
    npm run develop
    ```

    The site will be running at [http://localhost:8000](http://localhost:8000).

    You can also access the GraphiQL interface for exploring your site's data at [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

4. **Edit the source code**

    Open the `micropasts-gatsby-website` directory in your code editor. The main page is located at `src/pages/index.js`. Save your changes and the browser will update automatically.

    ## 🚀 Automatic Deployment to GitHub Pages

    This site is automatically deployed to GitHub Pages whenever changes are pushed to the main branch. The deployment is handled by a GitHub Actions workflow, which builds the site and publishes the output to the `gh-pages` branch. No manual steps are required—just commit and push your changes, and the live site will update shortly.

    You can view the deployed site at:  
    `https://micropasts.org`

## 🧐 Project Structure

Here's a quick overview of the main files and directories in this Gatsby project:

```
.
├── node_modules
├── src
├── .gitignore
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package.json
└── README.md
```

- **`/node_modules`**: Project dependencies.
- **`/src`**: Source code for the website, including pages and components.
- **`.gitignore`**: Specifies files and directories ignored by Git.
- **`gatsby-browser.js`**: Customizes Gatsby’s browser APIs.
- **`gatsby-config.js`**: Main configuration file for site metadata and plugins.
- **`gatsby-node.js`**: Customizes Gatsby’s Node APIs for build processes.
- **`gatsby-ssr.js`**: Customizes server-side rendering APIs.
- **`LICENSE`**: Project license (replace with your own if needed).
- **`package.json`**: Project manifest for dependencies and scripts.
- **`README.md`**: This file.

## 🚢 To Deploy Manually

To build and deploy the site, run:

```shell
gatsby build
gatsby deploy
```

For more information about contributing or getting involved with MicroPasts, please visit [micropasts.org](https://micropasts.org/) or check the project documentation.