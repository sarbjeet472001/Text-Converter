import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import Alert from "./Alert";
import Textform from "./Textform";
import { Route,Routes } from "react-router-dom";
import About from "./About";

function App() {
  const [text,setText]=useState("")
  const [mode,setMode]=useState("light");
  const [col,setCol]=useState("light")
  const [tcol,setTcol]=useState("dark")
  const [alert,setAlert]=useState(null);
  const [bc,setBc]=useState("light")

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const togglemode=()=>{
    if(mode==="light"){
      setCol("dark");
      setTcol("light");
      setMode("dark")
      setBc("secondary")
      document.body.style.background="#042743"
      showAlert("Dark mode enabled","success");
    }else{
      setCol("light");
      setTcol("dark")
      setMode("light")
      setBc("light")
      document.body.style.background="White"
      showAlert("Light mode enabled","success");
    }
  }
  const handleonchange=(e)=>{
    setText(e.target.value)
  }
  const ctl=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    showAlert("Text converted to lowercase","success");
  }
  const ctu=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    showAlert("Text converted to uppercase","success");
  }
  const ct=()=>{
    let newtext="";
    setText(newtext)
    showAlert("Text cleared successfully","success");
  }
  const copyt=()=>{
      const area = document.querySelector('#exampleFormControlTextarea1')
      area.select();
      document.execCommand('copy')
      document.getSelection().removeAllRanges();
      showAlert("Text copied to clipboard","success");
  }
  const res=()=>{
    let newtext=text.replace(/\s+/g, ' ').trim();
    setText(newtext)
    showAlert("Extra spaces removed successfully","success");
  }
  return (
    <>
      <Navbar ncolor={col} tcolor={tcol} togglemode={togglemode}/>
      <div style={{height:"2vh"}}>
      <Alert alert={alert}/>
      </div>
      <Routes>
        <Route path="/" element=<Textform tcol={tcol} text={text} handleonchange={handleonchange} ctl={ctl} ctu={ctu} ct={ct} copyt={copyt} res={res} bc={bc}/>/>
        <Route path="/about" element=<About col={col} tcol={tcol}/> />
      </Routes>
    </>
  );
}

export default App;
