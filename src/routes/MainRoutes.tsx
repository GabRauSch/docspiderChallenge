import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Documents } from "../pages/Documents"
import TextEditor from "../pages/TextEditor"

export const MainRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/textEditor" element={<TextEditor />}/>
        </Routes>
    )
}