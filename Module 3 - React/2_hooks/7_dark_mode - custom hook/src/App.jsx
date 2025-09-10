import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Content />
    </div>
  );
};

export default App;
