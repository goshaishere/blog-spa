import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCards } from './actions/actions'
import { Route, Routes } from "react-router-dom"
import { Layout } from './components/layouts/Layout'
import {About} from './pages/yet/about/About'
import {Solutions} from "./pages/yet/solutions/Solutions"
import {Contacts} from './pages/yet/contacts/Contacts'
import { NotFound } from './pages/yet/404page/404'
import { Blog } from "./pages/blog/Blog"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('do request from app component')
    dispatch(getCards())
    
}, [])

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