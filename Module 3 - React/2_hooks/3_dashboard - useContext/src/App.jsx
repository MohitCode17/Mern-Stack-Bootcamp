import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <Dashboard />
          <Profile />
          <Footer />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
