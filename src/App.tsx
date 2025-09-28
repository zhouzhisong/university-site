import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout"; 
import Home from "./pages/Home";
import SchoolIntroduction from "./pages/SchoolIntroduction";
import Admissions from "./pages/Admissions";
import NewsList from "./pages/NewsList";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<SchoolIntroduction />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/newslist" element={<NewsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
  );
}

export default App;
