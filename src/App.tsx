import { BrowserRouter, Route, Routes } from "react-router-dom"

import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/Home"
import Layout from "./components/Layout"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
