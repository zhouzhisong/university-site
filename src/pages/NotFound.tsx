import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <main className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">页面未找到</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            抱歉，您访问的页面不存在或已被删除，请检查网址是否正确，或返回首页继续浏览。
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;