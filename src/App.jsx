import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
import Check from "./components/Check";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chatpage" element={<ChatPage />} />
            <Route path="/check" element={<Check />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
