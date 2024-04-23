import Divider from "./components/Divider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Check from "./components/Check";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Divider />} />
            <Route path="/check" element={<Check />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
