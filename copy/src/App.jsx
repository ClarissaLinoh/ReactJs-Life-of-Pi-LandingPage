import Navbar from './navbar.jsx'
import Headline from './headline.jsx'
import Footer from './footer.jsx'
import Image from './imgContent.jsx'
import SecHeadline from './secHeadline.jsx'
import Button from './button.jsx'
import Text from './textContent.jsx'

import cover1 from "./assets/cover1.jpg"
import cover2 from "./assets/cover2.jpg"
import cover3 from "./assets/cover3.jpg"
import cover4 from "./assets/cover4.jpg"
import cover5 from "./assets/cover5.jpg"
import cover6 from "./assets/cover6.jpg"

import './App.css'

function App() {

  const ImageData = [
    {image: cover1, text: "Edition I"},
    {image: cover2, text: "Edition II"},
    {image: cover3, text: "Edition III"}
  ]
  const ImageData2 = [
    {image: cover4, text: "Edition IV"},
    {image: cover5, text: "Edition V"},
    {image: cover6, text: "Edition VI"}
  ]

  return (
    <>
        <Navbar/>
        <Headline/>
        <SecHeadline/>
        <Image items={ImageData}/>
        <Button/>
        <Text/>
        <Image items={ImageData2}/>

    <Footer/>

    </>
  )
}

export default App
