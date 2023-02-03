import { useState } from "react";
import { updateUser } from "../../services/userService";
import EditButton from "../common/buttons/EditButton";
import ConfirmButton from "../common/buttons/ConfirmButton";

function UserName({ user }) {
  const [nameInputVisibility, setNameInputVisibility] = useState(false);
  const [userName, setUserName] = useState("");

  const handleNameEdition = () => {
    setNameInputVisibility(!nameInputVisibility);
    setUserName(user.name);
  };

  const handleNameChange = () => {
    updateUser({
      ...user,
      name: userName,
    })
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-1/6">
      <div className="flex gap-2">
        <h1 className="font-semibold text-xl">{user.name}</h1>
        <EditButton handleEdition={handleNameEdition} />
      </div>
      {nameInputVisibility && (
        <div className="flex gap-2 mt-2">
          <input
            className="border border-x-gray-300 rounded"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <ConfirmButton handleConfirmation={handleNameChange} />
        </div>
      )}
    </div>
  );
}

export default UserName;
