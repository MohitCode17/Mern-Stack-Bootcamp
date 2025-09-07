import Header from "./components/Header";
import Entry from "./components/Entry";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Entry
          image={"https://scrimba.com/links/travel-journal-japan-image-url"}
          locationHref={"https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"}
          title={"Mount Fuji"}
          dates={"12 Jan, 2021 - 24 Jan, 2021"}
          description={
            "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          }
          country="Japan"
        />

        <Entry
          image={"https://scrimba.com/links/travel-journal-australia-image-url"}
          locationHref={"https://maps.app.goo.gl/Zr17SCrsJeCEKMd36"}
          title={"Sydney Opera House"}
          dates={"27 May, 2021 - 8 Jun, 2021"}
          description={
            "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
          }
          country="Australia"
        />
      </main>
    </>
  );
};

export default App;
