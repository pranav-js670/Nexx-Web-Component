# Nexx Reusable Web Component

The Nexx Web Component is a reusable feedback collection tool that can be embedded directly into any web project. It connects to the [Nexx SaaS Platform](https://github.com/pranav-js670/Nexx-SaaS-product.git) for feedback management, analytics, and security.

## Features

- **Customizable**: Tailor the feedback form to fit your website's design.
- **Simple Integration**: Embed using minimal code in any HTML or JavaScript-based project.
- **Real-time Feedback**: Automatically syncs with the Nexx SaaS platform to manage and display feedback in real-time.
- **Secure**: Feedback is stored securely in the Nexx SaaS platform.

## Tech Stack

- **Web Component**: Built with standard web technologies (HTML, CSS, JavaScript).
- **Integration**: Connects to the Nexx SaaS platform via API for feedback management and analytics.

## Linking to Nexx SaaS Platform

The feedback collected via this web component is managed in the [**Nexx SaaS Platform**](https://github.com/pranav-js670/Nexx-SaaS-product.git). Be sure to set up the SaaS platform before integrating this component into your website.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pranav-js670/Nexx-SaaS-product.git
```

2. Install dependencies:

```bash
npm install
```

3. Build the component:

```bash
npm run build
```

### Usage

After building the web component, you can embed it in any HTML file by including the component’s script:

```bash
<script src="path/to/nexx-component.js"></script>

<nexx-feedback-widget></nexx-feedback-widget>
```

Ensure that your Nexx SaaS platform instance is running and the API keys are properly set for the web component to send data to the platform.

### License

MIT License.
