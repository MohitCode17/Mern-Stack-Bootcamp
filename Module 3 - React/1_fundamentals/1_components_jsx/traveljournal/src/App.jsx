import Header from "./components/Header";
import Entry from "./components/Entry";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Entry />
        <Entry />
      </main>
    </>
  );
};

export default App;
