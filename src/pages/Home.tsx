import Header from "../components/Header";
import Carousel from "../components/Carousel";
import NewsComponent from "../components/NewsComponent";
import RemoteEducationPlatform from "../components/RemoteEducationPlatform";
import Footer from "../components/Footer";
import NoticeSection from "../components/NoticeSection";
import CultureSection from "../components/CultureSection";
import slider1 from "/images/slider1.jpg";
import icon6 from '/images/icon6.png'
import icon1 from '/images/icon1.png'
import icon2 from '/images/icon2.png'
import icon3 from '/images/icon3.png'
import icon4 from '/images/icon4.png'
import icon5 from '/images/icon5.png'



const Home = () => {
  // 首页轮播图数据
  const sliderImages = [
    {
      url: slider1,
      title: "",
      subtitle: "",
    },
    {
      url: "https://picsum.photos/id/1031/1920/600",
      title: "",
      subtitle: "",
    },
    {
      url: "https://picsum.photos/id/1033/1920/600",
      title: "",
      subtitle: "",
    },
    {
      url: "https://picsum.photos/id/1035/1920/600",
      title: "",
      subtitle: "",
    },
  ];
  // 新闻模块数据
  const newsData = {
    "新闻时讯": [
      {
        id: 1,
        title: "贵州省关工委“家长尽责优教”大讲堂系列活动...",
        date: "2025-06-12",
        content: "2025年6月10日下午，贵州省关工委“家长尽责优教”大讲堂系列活动在贵州...",
        image: "https://picsum.photos/id/101/300/200",
      },
      {
        id: 2,
        title: "贵阳开放大学科研课题申报专题座谈会暨2025...",
        date: "2025-06-09",
        content: "近日，贵阳开放大学组织科研课题申报专题座谈会...",
        image: "",
      },
      {
        id: 3,
        title: "驻村接力启新程 教育赋能绘新颜—我校开展20...",
        date: "2025-06-09",
        content: "我校驻村工作队开展支教帮扶、教育设施捐赠...",
        image: "",
      },
      {
        id: 4,
        title: "驻村接力启新程 教育赋能绘新颜—我校开展20...",
        date: "2025-06-09",
        content: "我校驻村工作队开展支教帮扶、教育设施捐赠...",
        image: "",
      },
    ],
    "社区教育": [
      {
        id: 1,
        title: "贵州省关工委“家长尽责优教”大讲堂系列活动...",
        date: "2025-06-12",
        content: "2025年6月10日下午，贵州省关工委“家长尽责优教”大讲堂系列活动在贵州...",
        image: "https://picsum.photos/id/102/300/200",
      },
      {
        id: 2,
        title: "贵阳开放大学科研课题申报专题座谈会暨2025...",
        date: "2025-06-09",
        content: "近日，贵阳开放大学组织科研课题申报专题座谈会...",
        image: "",
      },
      {
        id: 3,
        title: "驻村接力启新程 教育赋能绘新颜—我校开展20...",
        date: "2025-06-09",
        content: "我校驻村工作队开展支教帮扶、教育设施捐赠...",
        image: "",
      },
    ],
    "家庭教育": [
      {
        id: 1,
        title: "家庭教育主题讲座在贵阳顺利举办...",
        date: "2025-06-11",
        content: "为提升家长教育理念，贵阳市家庭教育研究会举办主题讲座...",
        image: "https://picsum.photos/id/103/300/200",
      },
      {
        id: 2,
        title: "家庭教育指导师培训开班...",
        date: "2025-06-08",
        content: "贵阳开放大学启动家庭教育指导师培训项目...",
        image: "",
      },
      {
        id: 3,
        title: "家庭亲子阅读活动走进社区...",
        date: "2025-06-07",
        content: "我校联合社区开展家庭亲子阅读推广活动...",
        image: "",
      },
    ],
    "老年教育": [
      {
        id: 1,
        title: "老年大学书法班成果展举行...",
        date: "2025-06-10",
        content: "贵阳开放大学老年大学举办书法班学员成果展览...",
        image: "https://picsum.photos/id/104/300/200",
      },
      {
        id: 2,
        title: "老年教育数字化平台上线...",
        date: "2025-06-09",
        content: "我校推出老年教育数字化学习平台，涵盖多门课程...",
        image: "",
      },
      {
        id: 3,
        title: "老年健康养生讲座受欢迎...",
        date: "2025-06-08",
        content: "邀请专家开展老年健康养生知识讲座，吸引众多老年人参与...",
        image: "",
      },
    ],
  };
  // 远程教育模块数据
  const cards = [
    {
      id:1,
      icon: icon6,
      title: '贵阳市民终身学习平台',
      description: '为市民终身教育学习提供优质的公共学习服务',
    },
    {
      id:2,
      icon: icon1,
      title: '毕业证书查询',
      description: '开放学信网查询毕业证书',
    },
    {
      id:3,
      icon: icon4,
      title: 'AI学习助手',
      description: '开放deepseek学习助手，可以解决更多难题',
    },
    {
      id:4,
      icon: icon3,
      title: '学习资源',
      description: '贵阳开放大学拥有丰富的数字资源',
    },
    {
      id:5,
      icon: icon2,
      title: '在线报名',
      description: '开放大学生在线报名',
    },
    {
      id:6,
      icon: icon5,
      title: '校长信箱',
      description: '欢迎投稿：gytvou.163.com',
    },
  ];
  // 通知模块数据
  const notices = [
    {
      id:1,
      date: "2025-06-10",
      title: "关于开放教育超期学生清退学籍的公示",
      content: "根据《国家开放大学学籍管理办法（试行）》（国开教〔2024〕1号）的相关规定，国家开放大学开放教育学生...",
    },
    {
      id:2,
      date: "2025-06-10",
      title: "关于开放教育即将超期学生学籍预警的公示",
      content: "根据《国家开放大学学籍管理办法（试行）》（国开教〔2024〕1号），国家开放大学开放教育学生学籍自入学...",
    },
    {
      id:3,
      date: "2025-05-28",
      title: "国家开放大学致全体考生的一封信",
      content: "亲爱的考生：期末考试即将将至，为共同营造安全有序、公平公正的考试环境，国家开放大学向全体考生发出...",
    },
    {
      id:4,
      date: "2025-04-03",
      title: "贵阳市2025年中小学教师资格认定公告",
      content: "根据《中华人民共和国教师法》《教师资格条例》《贵州省教师条例》《贵州省面向社会推行教师资格制度实...",
    },
  ];


  return (
    <div className="min-h-screen bg-white text-white-800 font-sans ">
      <Header />
      <main >
        <Carousel sliderImages={sliderImages} />
        <NewsComponent newsData={newsData} />
        <NoticeSection notices={notices} />
        <CultureSection />
        <RemoteEducationPlatform cards={cards} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;