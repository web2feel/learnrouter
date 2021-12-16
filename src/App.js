import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Stories from "./routes/Stories";
import StoryList from "./routes/StoryList";
import StoryID from "./routes/StoryID";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Protected from "./components/Protected";
function App() {
  return (
    <div className="bg-slate-100 min-h-screen max-w-screen-lg mx-auto flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<Stories />}>
            <Route index element={<StoryList />} />
            <Route path=":id" element={<StoryID />} />
          </Route>
          <Route path="profile" element={ 
          <Protected> 
            <Profile /> 
          </Protected>
          } />
          <Route path="login" element = {<Login />} />
          <Route path="*" element= {<h2>Page not Found </h2>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
