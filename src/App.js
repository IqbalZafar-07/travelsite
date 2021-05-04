import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import Profile from "./components/Profile/Profile";
import RightBar from "./components/RightBar/RightBar";
import { profile, journey } from "../src/components/data";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [user, setUser] = useState(1);
  const [journeydata, setJourneydata] = useState("");

  useEffect(() => {
    user &&
      profile.map((ele) => {
        if (user == ele.profileId) {
          setCurrentUser(ele);
        }
      });
    user &&
      journey.map((ele) => {
        console.log(ele.profileId, user);
        if (ele.profileId == user) setJourneydata(ele);
      });
  }, [user]);

  return (
    <div className="App">
      <Header />
      <Profile currentUser={currentUser} />
      <RightBar currentUser={currentUser} journeydata={journeydata} />
      <LeftBar
        currentUser={currentUser}
        journeydata={journeydata}
        user={user}
        setUser={setUser}
      />
      <Footer />
    </div>
  );
}

export default App;
