import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`mt-10 p-3 text-center ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-300 text-gray-900"
      }`}
    >
      Made with ❤️ by Mohit Gupta | Theme: {theme}
    </footer>
  );
};

export default Footer;
