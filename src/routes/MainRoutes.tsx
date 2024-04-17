import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Documents } from "../pages/Documents"

export const MainRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
        </Routes>
    )
}