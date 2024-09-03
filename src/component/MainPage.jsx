import React, { useEffect, useState } from 'react';
import AOS from "aos";
import { Link, useNavigate  } from 'react-router-dom';
import "aos/dist/aos.css";
import fbLogo from '../picture/Facebook_Logo_2023 (1).png';
import zaloLogo from '../picture/Icon_of_Zalo.svg.webp';
import phoneCall from '../picture/2934394.png';
import FBProfileImg from '../picture/photo-1660924198520-85447f410eff.avif';
import { useInView } from 'react-intersection-observer';
import './MainPage.css';
import TransparentImg from '../picture/1024px-HD_transparent_picture (1).png';

const MainPage = () => {
  
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out", once: true });
      }, []);

      const services = [
        { name: "Lên tích xanh Facebook", link: "/service-detail/len-tich-xanh-facebook" },
        { name: "Quảng Cáo Facebook ADS", link: "/service-detail/quang-cao-facebook-ads" },
        { name: "Tăng Follower, Like FanPage", link: "/service-detail/increase-follower" },
        { name: "Tăng Comment", link: "/service-detail/increase-comment" },
        // Add more services as needed...
    ];


      const handleScrollToTopAndReload = () => {
          setTimeout(() => {
              window.location.reload();  // Tải lại trang sau khi cuộn
            }, 100); // Thời gian chờ ngắn để đảm bảo trang đã cuộn lên đầu
          window.scrollTo(0, 0);  // Cuộn lên đầu trang
      };
      const projects = [
        {
          title: "Facebook",
          description:
            "Dịch vụ này cung cấp các công cụ mạnh mẽ cho doanh nghiệp để tiếp cận khách hàng mục tiêu và xây dựng thương hiệu trực tuyến.",
          liveLink: "#",
          codeLink: "#",
          imgSrc: "https://plus.unsplash.com/premium_photo-1683727986626-355d473cb936?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
        },
        {
          title: "Instagram",
          description:
            "Nền tảng hình ảnh và video giúp bạn thể hiện bản thân và kết nối qua nội dung trực quan. Lý tưởng cho quảng bá thương hiệu",
          liveLink: "#",
          codeLink: "#",
          imgSrc: "https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
        },
        {
          title: "TikTok",
          description:
            "Nền tảng video ngắn cho phép bạn sáng tạo nội dung giải trí và lan truyền. Mục tiêu là tạo ra sự tương tác mạnh mẽ và thu hút người xem",
          liveLink: "#",
          codeLink: "#",
          imgSrc: "https://images.unsplash.com/photo-1642141325625-f76034e4ad2b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
        },
        {
          title: "Youtube",
          description:
            "Nền tảng video toàn cầu cho phép bạn khám phá, học hỏi và quảng bá qua video. Đặc biệt hiệu quả cho doanh nghiệp trong việc tiếp cận người dùng..",
          liveLink: "#",
          codeLink: "#",
          imgSrc: "https://images.unsplash.com/photo-1541877944-ac82a091518a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
        },
      ];

        // Item liên hệ
     const [visibleDialog, setVisibleDialog] = useState(null);
     const [isAnimating, setIsAnimating] = useState(false);

     const toggleDialog = (dialog) => {
        if (visibleDialog === dialog) {
            setIsAnimating(true);
            setTimeout(() => {
                setVisibleDialog(null);
                setIsAnimating(false);
            }, 300); // Thời gian khớp với thời gian hiệu ứng CSS
        } else {
            setVisibleDialog(dialog);
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        }
    };
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,  // Trigger khi 50% của phần tử visible
    });
    const stats = [
      { label: "Người Sử Dụng Hài Lòng", value: 1000 },
      { label: "Khách Hàng Tiềm Năng", value: 30 },
      { label: "Năm Trong Nghề", value: 5 },
      { label: "Và Vô Số Phản Hồi Tích Cực", value: 10000 },
    ];
    const AnimatedCounter = ({ value }) => {
      const [count, setCount] = useState(0);
    
      React.useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;
        
        let totalDuration = 2000; // tổng thời gian chạy (ms)
        let incrementTime = (totalDuration / end);
    
        let timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, incrementTime);
        
        return () => clearInterval(timer);
      }, [value]);
    
     
     // Định dạng số
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`; // Định dạng thành 1M
    }
    return num;
  };

  return <>{formatNumber(count)}</>;
};

const navigate = useNavigate(); // Hook điều hướng
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = () => {
  if (searchTerm.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  }
};
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
      handleSearch();
  }
};
const [filteredResults, setFilteredResults] = useState([]);
const handleInputChange = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchTerm(query);

  if (query.length > 0) {
      const results = services.filter(service =>
          service.name.toLowerCase().includes(query)
      );
      setFilteredResults(results);
  } else {
      setFilteredResults([]);
  }
};

    return (
        <div>
        
        <section className="intro-box h-screen flex items-center justify-center bg-white" data-aos="fade-right">
    <div className="text-center">
        <h1 className="text-mainpage text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Chào mừng bạn đến với dịch vụ <span className="text-teal-500"><br />MXH</span> của chúng tôi
        </h1>
        <div className="mt-8 w-3/4 md:w-1/2 mx-auto flex items-center space-x-4">
            <div className="relative w-full">
                <input 
                    type="text" 
                    placeholder="Tìm kiếm dịch vụ..."
                    className="w-full px-4 py-2 border-2 border-teal-500 text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-10" 
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 "></i>

                {searchTerm && filteredResults.length > 0 && (
                    <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {filteredResults.map((result, index) => (
                            <Link 
                                key={index} 
                                to={result.link}
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                {result.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <button 
                onClick={handleSearch}
                className="px-4 py-2 border-2 border-teal-500 text-teal-500 text-lg rounded-[50%] font-semibold  overflow-hidden relative group"
            >
                <span className="absolute inset-0 bg-teal-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out "></span>
                <span className="relative z-10 text-black group-hover:text-white text-xs ">
                <i className="fa-solid fa-magnifying-glass "></i>
                </span>
            </button>
        </div>
    </div>
</section>


    <section className="responsive-section h-screen flex items-center justify-center bg-teal-500 bg-cover "   style={{ backgroundImage: `url(${FBProfileImg})` }}>
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0">
    <div
      className="image-container w-full md:w-1/2 mb-6 md:mb-0"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <img
        src={TransparentImg}
        alt="About Me"
        className="rounded-lg  object-cover w-full h-[650px]"
      />
    </div>
    <div className="text-container w-full md:w-1/2 md:ml-16 text-white"> {/* Điều chỉnh khoảng cách */}
      <h2
        className="text-4xl font-bold mb-4"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        GIỚI THIỆU
      </h2>
      <p
        className="text-3xl font-bold mb-4"
        data-aos="fade-left"
        data-aos-delay="600"
      >
       
      </p>
      <div
        className="text-lg mb-4"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        {/* Bạn cũng có thể thêm số liệu như phần thống kê */}
      <p
        className="text-description text-base mb-4"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        Bạn cần tăng lượng follower? quản lý fanpage? hay chạy quảng cáo hiệu quả? đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn đạt được mục tiêu kinh doanh.
      </p>
        <div ref={ref} className="stats-grid grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl font-bold text-white">
                {inView ? <AnimatedCounter value={stat.value} /> : 0}+
              </h2>
              <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div> 
      </div>
      <button
        className="button relative px-6 py-2 border-2 border-white text-white font-semibold rounded overflow-hidden group"
        data-aos="fade-right"
        data-aos-delay="1200"
      >
        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        <span className="relative z-10 text-white group-hover:text-teal-500 transition-colors duration-300 ease-out">
          Xem Thêm
        </span>
      </button>
    </div>
  </div>
</section>

    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
          DỊCH VỤ BÊN CHÚNG TÔI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center"
              data-aos="fade-right"
              data-aos-delay={`${index * 200}`} // Tạo độ trễ cho mỗi project
            >
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:ml-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-base text-justify mb-4 text-gray-700">
                  {project.description}
                </p>
                <div className="flex space-x-4">
     
    
    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section
      className="relative h-screen flex items-center justify-center bg-teal-500"
      style={{
        clipPath: "polygon(0 0, 200% 0, 0 100%, 0 100%)", // Cắt nền theo hình bạn muốn
      }}
    >
      <div className="text-center text-white" data-aos="fade-up">
  
          
        <h2 className="text-4xl font-bold mb-4">LIÊN HỆ</h2>
      
        <p className="text-2xl mb-6">Hài lòng quý khách là trách nhiệm của chúng tôi !!</p>
        <Link to = '/lien-he'>

        <button className="relative px-6 py-2 border-2 border-white text-white font-semibold rounded overflow-hidden group">
          <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 text-white group-hover:text-teal-500 transition-colors duration-300 ease-out">
            LIÊN HỆ NGAY !
          </span>
        </button>
        </Link>
      </div>
    </section>

    <footer className="bg-gray-700 text-gray-300 py-8">
      <div className="container mx-auto text-center">
       
        <button onClick={ handleScrollToTopAndReload} className="text-white hover:text-teal-500 focus:outline-none">
        <i className="fa-solid fa-caret-up"></i> {/* Mũi tên lên */}
        </button>
    

        <div className="flex justify-center space-x-8 my-6 text-3xl gap-10">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
          <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
          <i className="fa-solid fa-phone"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
          <i className="fa-solid fa-comment"></i>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="w-1/3 h-1 bg-gray-600"></div> {/* Dấu gạch ngang */}
        </div>
        <hr className="border-gray-700 my-4" />
      
        <p className="text-sm">© 2024 - Website developed by Pham Viet Thanh.</p>
        <div className="flex justify-center space-x-4 mt-4">
         
        </div>
      </div>
    </footer>


     {/* Nút chính */}
     <div className="contact-button fixed bottom-4 left-4 flex flex-col space-y-4">
                <button 
                    onClick={() => toggleDialog('facebook')} 
                    className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
                >
                    <img src={fbLogo} alt="Facebook" className="w-6 h-6 " />
                </button>
                <button 
                    onClick={() => toggleDialog('email')} 
                    className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
                >
                    <img src={zaloLogo} alt="Email" className="w-6 h-6 " />
                </button>
                <button 
                    onClick={() => toggleDialog('zalo')} 
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg"
                >
                    <img src={phoneCall} alt="Zalo" className="w-6 h-6 animate-bounce" />
                </button>
            </div>
            

            {/* Các hộp thoại thông tin */}
            {visibleDialog === 'facebook' && (
                <div className={`z-[998] fixed bottom-40 left-24 bg-white rounded-xl  shadow-lg w-64 transition-opacity duration-10 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    
                    <div className="bg-blue-500 flex p-3 items-center justify-center">
                        <span className=" text-white">Xin chào tôi có thể giúp gì cho bạn ?</span>
                        <button onClick={() => setVisibleDialog(null)} className="text-white text-2xl p-2">
                            &times;
                        </button>
                    </div>
                    
                    <ul className="mt-4">
                        <li className="flex items-center mb-2 p-3">
                            <img src={fbLogo} alt="Facebook" className="w-6 h-6 mr-2  " />
                            <a href=" https://www.facebook.com/LVTMMO" target="_blank"  className='font-bold'>
                           Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {visibleDialog === 'email' && (
                <div className={`z-[998] fixed bottom-20 left-24 bg-white  rounded-xl shadow-lg w-64 transition-opacity duration-10 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-blue-500 flex p-3 items-center justify-center">
                        <span className=" text-white">Xin chào tôi có thể giúp gì cho bạn ?</span>
                        <button onClick={() => setVisibleDialog(null)} className="text-white text-2xl p-2">
                            &times;
                        </button>
                    </div>
                    <ul className="mt-4">
                        <li className="flex items-center mb-2 p-3">
                            <img src={zaloLogo} alt="Email" className="w-6 h-6 mr-2 " />
                            <a href="https://zalo.me/0392778939" target="_blank"  className='font-bold' rel="noreferrer">
                            Zalo
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {visibleDialog === 'zalo' && (
                <div className={`z-[999] fixed bottom-[20px] left-24 bg-white rounded-lg shadow-lg w-64 transition-opacity duration-10 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-green-400 flex justify-between items-center p-3">
                        <span className="">Xin chào tôi có thể giúp gì cho bạn ?</span>
                        <button onClick={() => setVisibleDialog(null)} className="text-red-500 text-2xl p-2">
                            &times;
                        </button>
                    </div>
                    <ul className="mt-4">
                        <li className="flex items-center mb-2 p-3 ">
                            <img src={phoneCall} alt="Zalo" className="w-6 h-6 mr-2 " />
                            <span className='font-bold text-center'>0392778939</span>
                        </li>
                    </ul>
                </div>
            )}
    
        </div>
    );
};

export default MainPage;