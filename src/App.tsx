import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Admissions from "./pages/Admissions";
import NewsList from "./pages/NewsList";
import NotFound from "./pages/NotFound";

// 路由配置：所有页面的入口
function App() {
  return (
    <Routes>
      {/* 首页 */}
      <Route path="/" element={<Home />} />
      {/* 学校概况 */}
      <Route path="/about/intro" element={<Intro />} />
      {/* 招生专栏 */}
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/newslist" element={<NewsList />} />
      {/* 404页面（匹配所有未定义的路由） */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;