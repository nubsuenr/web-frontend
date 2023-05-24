import Nav from "./Components/Nav";
import HomeIndex from "./Components/HomePage/HomeIndex";
// import Footer from "./Components/Footer";
import AboutIndex from "./Components/AboutPage/AboutIndex";
import GalleryIndex from "./Components/GalleryPage/GalleryIndex";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WingsIndex from "./Components/WingsPage/WingsIndex";
import { Helmet } from "react-helmet";
import DonationsIndex from "./Components/DonationsPage/DonationsIndex";
import { Helpindex } from "./Components/HelpPage/Helpindex";
import { MediaIndex } from "./Components/MediaPage/MediaIndex";
import { BibleStudiesindex } from "./Components/BibleStudiesPage/BibleStudiesindex";
import { PrayerIndex } from "./Components/PrayersPage/PrayerIndex";
import { SermonIndex } from "./Components/SermonsPage/SermonIndex";
import { EventsIndex } from "./Components/OtherEventsPage/EventsIndex";
import { LibraryIndex } from "./Components/LibraryPage/LibraryIndex";



function App() {
  return (
    <>
    <Router>
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Nubs Uenr</title>
                <link rel="canonical" href="http://nubs-uenr.com" />
      </Helmet>
     <Nav />
    <div className="Content">
      <Switch>
      <Route exact path="/">
        <HomeIndex />
      </Route>
      <Route path="/about">
        <AboutIndex />
      </Route>
      <Route path="/gallery">
        <GalleryIndex />
      </Route>
      <Route path="/about">
        <AboutIndex />
      </Route>
      <Route path="/wing">
        <WingsIndex />
      </Route>
      <Route path="/donations">
        <DonationsIndex />
      </Route>
      <Route path="/help">
        <Helpindex />
      </Route>
      <Route path="/media">
        <MediaIndex />
      </Route>
      <Route path="/biblestudies">
        <BibleStudiesindex />
      </Route>
      <Route path="/prayers">
        <PrayerIndex />
      </Route>
      <Route path="/sermons">
        <SermonIndex />
      </Route>
      <Route path="/events">
        <EventsIndex />
      </Route>
      <Route path="/e-library">
        <LibraryIndex />
      </Route>
      </Switch>
    </div>
     {/* <Footer /> */}
    </div>
    </Router>
    </>
  );
}

export default App;
