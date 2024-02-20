import Homepage from "./component/Homepage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionPage1 from "./component/QuestionPage1";
import QuestionPage2 from "./component/QuestionPage2";
import QuestionPage3 from "./component/QuestionPage3";
import QuestionPage4 from "./component/QuestionPage4";
import QuestionPage5 from "./component/QuestionPage5";
import QuestionPage6 from "./component/QuestionPage6";
import QuestionPage7 from "./component/QuestionPage7";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/questionpage1" element={<QuestionPage1 />} />
          <Route path="/questionpage2" element={<QuestionPage2 />} />
          <Route path="/questionpage3" element={<QuestionPage3 />} />
          <Route path="/questionpage4" element={<QuestionPage4 />} />
          <Route path="/questionpage5" element={<QuestionPage5 />} />
          <Route path="/questionpage6" element={<QuestionPage6 />} />
          <Route path="/questionpage7" element={<QuestionPage7 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
