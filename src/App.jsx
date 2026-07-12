// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Search from "./components/Search";
// import Discover from "./components/Discover";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <>
//       <Sidebar />
//       <Navbar/>
//       <Search/>
//       <Discover/>
//       <Footer/>
//     </>
//   );
// }

// export default App;

import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Discover from "./components/Discover"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="page-content">
          <Search />
          <Discover />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;