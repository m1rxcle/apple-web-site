import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"

import * as Sentry from "@sentry/react"

import "./index.css"

Sentry.init({
	dsn: "https://62b785d4a828e9c38f1c77e90c8fb189@o4508549173149696.ingest.de.sentry.io/4508549175902288",
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
})

createRoot(document.getElementById("root")).render(<App />)
