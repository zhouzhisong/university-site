import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  date: string;
}

const NewsList: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const mock: NewsItem[] = [
      { id: 1, title: "开放教育迎新生政策发布", date: "2025-09-01" },
      { id: 2, title: "学校“十四五”规划公布", date: "2025-08-15" },
      { id: 3, title: "社区教育项目启动", date: "2025-07-20" },
      { id: 4, title: "在线资源平台升级", date: "2025-06-10" },
      { id: 5, title: "校内活动月成功举办", date: "2025-05-05" },
      { id: 6, title: "新的教学设备落地", date: "2025-04-22" },
    ];
    setNewsItems(mock);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">新闻动态</h2>
      <div className="divide-y divide-gray-200">
        {newsItems.map((item) => (
          <div key={item.id} className="py-4 flex justify-between items-center">
            <Link
              to={`/news/${item.id}`}
              className="text-lg text-blue-800 hover:text-blue-500"
            >
              {item.title}
            </Link>
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>
        ))}
      </div>

      {/* 分页按钮示例 */}
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">首页</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">上一页</button>
        <span className="px-3 py-1 border rounded bg-blue-50">1</span>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">下一页</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">末页</button>
      </div>
    </div>
  );
};

export default NewsList;
