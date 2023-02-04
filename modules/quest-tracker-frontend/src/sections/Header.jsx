import { useEffect, useState } from "react";
import { findUser } from "../services/userService";
import { BiCoinStack } from "react-icons/bi";
import UserName from "../components/header/UserName";
import UserLevel from "../components/header/UserLevel";

function Header() {
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
    <nav className="bg-indigo-50 sticky p-5 font-semibold">
      <div className="flex justify-between">
        <UserName user={user} refreshUser={findUserData} />
        <UserLevel user={user} refreshUser={findUserData} />
        <div>
          Monedas de oro:{" "}
          <span className="text-yellow-400 text-xl">
            {user.gold}
            <BiCoinStack className="inline pb-1" />
          </span>
          <br />
          Experiencia total:{" "}
          <span className="text-emerald-500 text-lg">
            {user.currentExperience + " "}
            XP
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
