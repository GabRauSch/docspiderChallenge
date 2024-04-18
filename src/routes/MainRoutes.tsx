import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Documents } from "../pages/Documents"
import TextEditor from "../pages/TextEditor"
import { EditDocument } from "../pages/EditDocument"

export const MainRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/textEditor" element={<TextEditor />}/>
            <Route path="/editDocument/:id" element={<EditDocument/>}/>
        </Routes>
    )
}