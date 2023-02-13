import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { findUser } from "./services/userService";
import Quests from "./sections/Quests";
import Stories from "./sections/Stories";
import Header from "./sections/Header";
import Menu from "./sections/Menu";

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
      <div className="flex">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Quests refreshUser={findUserData} />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
