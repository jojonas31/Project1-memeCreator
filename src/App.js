import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [img, setImg] = useState("futurama");

  const onChangeText1 = (text1) => {
    setTexto1(text1.target.value);
    console.log(img);
  };
  const onChangeText2 = (text2) => {
    setTexto2(text2.target.value);
  };
  const onChangeimg = (img) => {
    setImg(img.target.value);
  };

  const onClickExport = (exp) => {
    html2canvas(document.querySelector(".memeContainer")).then((canvas) => {
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("png");
      link.click();
    });
  };

  return (
    <div className="App">
      <select className="memeSelector" onChange={onChangeimg}>
        <option value="futurama">Futurama</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
        <option value="fire">Fire girl</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
      </select>
      <br />
      <textarea
        className="input"
        type="text"
        onChange={onChangeText1}
      ></textarea>
      <br />
      <textarea
        className="input"
        type="text"
        onChange={onChangeText2}
      ></textarea>
      <div className="memeContainer">
        <p className="text1">{texto1}</p>
        <p className="text2">{texto2}</p>
        <img className="img" src={"/img/" + img + ".jpg"} />
      </div>
      <button className="buttonExport" onClick={onClickExport}>Exportar</button>
    </div>
  );
}

export default App;
