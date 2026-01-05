import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/WelComePage";
import Login from "./Components/LogInPage";
import Signup from "./Components/SignUpPage";
import ProfilePage from "./Components/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
