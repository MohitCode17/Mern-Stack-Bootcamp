import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Profile = () => {
  const { theme } = useTheme();
  const { user, updateUser } = useUser();

  const changeName = () => {
    const newName = prompt("Enter your name:", user.name);
    if (newName) updateUser({ ...user, name: newName });
  };

  return (
    <div
      className={`w-80 h-56 p-5 rounded-lg shadow-lg mt-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-lg font-semibold">Profile</h2>
      <p className="mt-2">👤 Name: {user.name}</p>
      <p>📧 Email: {user.email}</p>
      <button
        onClick={changeName}
        className="mt-4 px-3 py-2 rounded bg-green-600 hover:bg-green-700"
      >
        Change Name
      </button>
    </div>
  );
};

export default Profile;
