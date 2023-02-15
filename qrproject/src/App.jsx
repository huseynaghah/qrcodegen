import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'react-toastify';


function App() {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("")

  const handleSubmit = (e) => {


    e.preventDefault();

    if (input.length == 0) {
      toast.error("Input can't be empty!")
    } else {
      toast.success("QR Code Successfully created!")
      setSubmit(input)
      setInput("")
    }


  }

  return (
    <div className="QR CODE GENERATOR">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit' >Get QR</button>
      </form>
      <QRCodeSVG
        value={submit}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
    </div>
  )
}

export default App
