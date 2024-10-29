import "./App.css";
import PrimaryButton from "./components/PrimaryButton";

const handleHereClick = () => {
  alert("Hello from Here");
};

function App() {
  return (
    <>
      <PrimaryButton
        buttonText="Click me"
        onClick={() => {
          alert("Hello");
        }}
      />
      <PrimaryButton buttonText="Click here" onClick={handleHereClick} />
    </>
  );
}

export default App;
