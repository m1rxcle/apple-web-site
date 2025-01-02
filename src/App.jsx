import * as Sentry from "@sentry/react"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import IphoneSection from "./components/iPhone/iPhone-section"
import Navbar from "./components/navbar"
import StoreSection from "./components/store-section"
import MacSection from "./components/Mac/mac-section"
import SupportSection from "./components/support-section"
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<StoreSection />} />
				<Route path="/Mac" element={<MacSection />} />
				<Route path="/iPhone" element={<IphoneSection />} />
				<Route path="/Support" element={<SupportSection />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Sentry.withProfiler(App)
