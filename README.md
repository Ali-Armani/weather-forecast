# 🌤️ Weather Forecast App

A clean, responsive weather forecast web application that lets users search for any city and instantly view current temperature, humidity, and wind speed — powered by the OpenWeatherMap API.



![status](https://img.shields.io/badge/status-active-brightgreen)




![license](https://img.shields.io/badge/license-MIT-blue)



---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Security](#-security)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Commit Convention](#-commit-convention)
- [License](#-license)

---

## 🔍 Overview

This project is a lightweight, single-page weather application built with vanilla HTML, CSS, and JavaScript. It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it in a clean, minimal card-based UI.

## ✨ Features

- 🔎 Search weather by city name
- 🌡️ Displays temperature, humidity, and wind speed
- 🖼️ Dynamic weather icons based on current conditions (clear, clouds, rain, snow, mist, drizzle)
- ⚠️ Graceful error handling for invalid city names
- 📱 Fully responsive design
- 🔒 API key secured via serverless backend proxy (no client-side exposure)

## 🎬 Demo

> Add a screenshot or GIF of the app here once available.

[Insert screenshot: assets/images/demo.png]

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | HTML5, CSS3, Vanilla JavaScript      |
| Backend    | Node.js Serverless Function (Vercel) |
| API        | OpenWeatherMap API                   |
| Hosting    | Vercel                               |

## 📁 Project Structure

weather-app/
├── api/
│   └── weather.js        — Serverless function, proxies requests to OpenWeatherMap
├── assets/
│   └── images/            — Icons and weather images
├── index.html              — App markup
├── style.css                — App styling
├── script.js                 — Client-side logic
├── .env                        — Local environment variables (NOT committed)
├── .gitignore
└── README.md

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- Vercel CLI — install with: npm install -g vercel
- A free API key from OpenWeatherMap (https://openweathermap.org/api)

### Installation

git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

### Environment Variables

Create a .env file in the project root (this file is git-ignored and must never be committed):

OPENWEATHER_API_KEY=your_api_key_here

For production, set the same variable in your hosting provider's dashboard (Vercel → Project Settings → Environment Variables).

### Running Locally

vercel dev

The app will be available at http://localhost:3000.

## 🔐 Security

This project follows basic security best practices for public-facing frontend apps:

- ✅ No API keys in client-side code. All requests to OpenWeatherMap are routed through a serverless backend (/api/weather) so the API key is never exposed in the browser.
- ✅ Input encoding. User input (city name) is sanitized with encodeURIComponent before being used in any URL to prevent malformed requests and injection-style issues.
- ✅ Secrets excluded from version control. .env is listed in .gitignore.
- ⚠️ Recommended additions for production:
  - Add rate limiting on the /api/weather endpoint to prevent abuse (basic DDoS mitigation).
  - Set a Content-Security-Policy (CSP) header to reduce XSS/clickjacking risk.
  - Add X-Frame-Options: DENY or frame-ancestors 'none' to prevent clickjacking.
  - Validate/sanitize all API responses before injecting into the DOM (avoid using innerHTML with unsanitized data).

If you discover a security vulnerability, please open a private security advisory instead of a public issue.

## ☁️ Deployment

This project is designed to deploy seamlessly on Vercel:

1. Import the repository at vercel.com/new
2. Add the OPENWEATHER_API_KEY environment variable in the project settings
3. Deploy — Vercel automatically detects the /api folder as serverless functions

## 🗺️ Roadmap

- [ ] Add 5-day forecast view
- [ ] Add geolocation-based weather detection
- [ ] Add unit toggle (°C / °F)
- [ ] Add loading states/skeletons
- [ ] Write unit tests for api/weather.js

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: git checkout -b feat/your-feature
3. Commit your changes using Conventional Commits (see below)
4. Push to your branch and open a Pull Request

## 📝 Commit Convention

This project follows Conventional Commits (https://www.conventionalcommits.org/):

<type>(<scope>): <short description>

[optional body]

Common types: feat, fix, refactor, chore, docs, style, test, security

Example:
fix(api): add missing city query parameter to weather API request

## 📄 License

This project is licensed under the MIT License.
