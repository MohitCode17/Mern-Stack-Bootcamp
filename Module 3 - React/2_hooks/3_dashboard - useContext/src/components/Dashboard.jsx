import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Dashboard = () => {
  const { theme } = useTheme();
  const { user } = useUser();

  return (
    <div
      className={`w-5xl h-56 flex items-center justify-center flex-col p-6 mt-6 rounded-lg shadow-md text-center ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h2 className="text-4xl font-bold">Welcome, {user.name} 🎉</h2>
      <p className="mt-4 text-lg">You're using {theme} mode 🌗</p>
    </div>
  );
};

export default Dashboard;
