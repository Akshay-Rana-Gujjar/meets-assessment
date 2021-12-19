import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import ShareButton from "./components/ShareButton";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProfileCard />
      <ShareButton />
    </div>
  );
}

export default App;
