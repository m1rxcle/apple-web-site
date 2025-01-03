import * as Sentry from "@sentry/react"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import IphoneSection from "./components/iPhone/iPhone-section"
import Navbar from "./components/navbar"
import StoreSection from "./components/store-section"
import MacSection from "./components/Mac/mac-section"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<MacSection />} />
				<Route path="/iphone" element={<IphoneSection />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Sentry.withProfiler(App)
