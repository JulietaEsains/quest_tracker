import { BiCoinStack } from "react-icons/bi";
import UserName from "../components/header/UserName";
import UserLevel from "../components/header/UserLevel";

function Header({ user, refreshUser }) {
  return (
    <nav className="bg-cyan-50 fixed w-screen p-5 font-semibold shadow-sm">
      <div className="flex justify-between">
        <UserName user={user} refreshUser={refreshUser} />
        <UserLevel user={user} refreshUser={refreshUser} />
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
