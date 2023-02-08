import { useEffect, useState } from "react";
import { findUser } from "./services/userService";
import Quests from "./sections/Quests";
import Header from "./sections/Header";

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
      <Quests refreshUser={findUserData} />
    </>
  );
}

export default App;
