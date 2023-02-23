import { useState } from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import { updateUser } from "../../services/userService";
import EditButton from "../common/buttons/EditButton";
import ConfirmButton from "../common/buttons/ConfirmButton";

function UserName({ user, refreshUser }) {
  const [nameInputVisibility, setNameInputVisibility] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const handleNameEdition = () => {
    setNameInputVisibility(!nameInputVisibility);
    setNewUserName(user.name);
  };

  const handleNameChange = () => {
    updateUser({
      ...user,
      name: newUserName,
    })
      .then((data) => {
        refreshUser();
        setNameInputVisibility(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-1/6">
      <div className="flex gap-2">
        <h1 className="font-semibold text-xl">{user.name}</h1>
        <Tooltip
          content="Cambiar nombre"
          placement="right"
          className="bg-gray-800 text-white p-1 rounded-md"
        >
          <Button className="mt-1 text-gray-800">
            <EditButton onEdit={handleNameEdition} />
          </Button>
        </Tooltip>
      </div>
      {nameInputVisibility && (
        <div className="flex gap-2 mt-2">
          <input
            className="border border-x-gray-300 rounded"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <Tooltip
            content="Confirmar"
            placement="right"
            className="bg-gray-800 text-white p-1 rounded-md"
          >
            <Button className="mt-1 text-gray-800">
              <ConfirmButton onConfirm={handleNameChange} />
            </Button>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export default UserName;
