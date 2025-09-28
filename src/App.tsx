import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout"; 
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import Admissions from "./pages/Admissions";
import NewsList from "./pages/NewsList";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/newslist" element={<NewsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
  );
}

export default App;
