import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from './components/layouts/Layout'
import { NotFound } from './pages/404page/404'
import {About} from './pages/about/About'
import { Blog } from "./pages/blog/Blog"
import {Solutions} from "./pages/solutions/Solutions"
import {Contacts} from './pages/contacts/Contacts'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="contacts" element={<Contacts />} />
          </ Route >
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;