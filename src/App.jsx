import "./App.css";
import BasicLink from "./BasicLink";

function App() {
  console.log("App initialized");
  let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  let title = "Cities";
  let colors = ["red", "green", "blue", "yellow", "pink"];
  let title2 = "Colors";

  console.log("Cities: ", cities);
  console.log("Title: ", title);

  const handleClick = (item) => {
    console.log("+++ Item clicked: ", item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Me learning basic React.js. Base app stolen from GitHub Codespaces{" "}
          <span className="heart">♥️</span>
        </p>
        <BasicLink
          listObjects={cities}
          title={title}
          handleFunction={handleClick}
        />
        <BasicLink
          listObjects={colors}
          title={title2}
          handleFunction={handleClick}
        />
      </header>
    </div>
  );
}

export default App;
