import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { findUser } from "./services/userService";
import Header from "./sections/Header";
import Menu from "./sections/Menu";
import Quests from "./sections/Quests";
import Stories from "./sections/Stories";
import Skills from "./sections/Skills";
import "./assets/styles/customStyles.css";

function App() {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    level: 0,
    currentExperience: 0,
    experienceForNextLevel: 0,
    gold: 0,
  });

  const findUserData = () => {
    findUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    findUserData();
  }, []);

  return (
    <>
      <Header user={user} refreshUser={findUserData} />
      <div className="flex main">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Quests refreshUser={findUserData} />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
