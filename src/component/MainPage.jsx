import React, { useEffect, useState } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import fbLogo from '../picture/Facebook_Logo_2023 (1).png';
import zaloLogo from '../picture/Icon_of_Zalo.svg.webp';
import phoneCall from '../picture/2934394.png';

const MainPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out", once: true });
      }, []);

 

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
          imgSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
        },
        {
          title: "TikTok",
          description:
            "Nền tảng video ngắn cho phép bạn sáng tạo nội dung giải trí và lan truyền. Mục tiêu là tạo ra sự tương tác mạnh mẽ và thu hút người xem",
          liveLink: "#",
          codeLink: "#",
          imgSrc: "https://images.unsplash.com/photo-1594321120022-7649850959bb?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
        },
        {
          title: "Youtube",
          description:
            "Nền tảng video toàn cầu cho phép bạn khám phá, học hỏi và quảng bá qua video. Đặc biệt hiệu quả cho doanh nghiệp trong việc tiếp cận người dùng..",
          liveLink: "#",
          codeLink: "#",
          imgSrc: "https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
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
    return (
        <div>
        
           <section
      className="h-screen flex items-center justify-center bg-white"
      data-aos="fade-right" // Sử dụng AOS để thêm hiệu ứng scroll
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
        Chào mừng bạn đến với dịch vụ <span className="text-teal-500"><br />MXH</span> của chúng tôi
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-4">
          Tôi là <span className="text-teal-500">Lục Văn Tứ</span>.
        </p>
        <Link to ='/chi-tiet'>

        <button className="mt-8 px-6 py-2 border-2 border-teal-500 text-teal-500 text-lg font-semibold rounded overflow-hidden relative group">
          <span className="absolute inset-0 bg-teal-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 text-black group-hover:text-white">
            Chi Tiết
          </span>
        </button>
        </Link>
      </div>
    </section>

    <section className="h-screen flex items-center justify-center bg-teal-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div
          className="w-full md:w-1/2 mb-6 md:mb-0"
          data-aos="fade-down"
          data-aos-delay="200" // Độ trễ cho hình ảnh
        >
          <img
            src="https://via.placeholder.com/400"
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-8 text-white">
          <h2
            className="text-4xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="400" // Độ trễ cho tiêu đề
          >
             PROFILE
          </h2>
          <p
            className="text-lg mb-4"
            data-aos="fade-left"
            data-aos-delay="600" // Độ trễ cho đoạn văn đầu tiên
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
            voluptatum.
          </p>
          <p
            className="text-lg mb-4"
            data-aos="fade-right"
            data-aos-delay="800" // Độ trễ cho đoạn văn thứ hai
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
            voluptatum.
          </p>
          <p
            className="text-lg mb-4"
            data-aos="fade-left"
            data-aos-delay="1000" // Độ trễ cho đoạn văn cuối cùng
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <button
            className="relative px-6 py-2 border-2 border-white text-white font-semibold rounded overflow-hidden group"
            data-aos="fade-right"
            data-aos-delay="1200" // Độ trễ cho nút
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
        <i class="fa-solid fa-caret-up"></i> {/* Mũi tên lên */}
        </button>
    

        <div className="flex justify-center space-x-8 my-6 text-3xl gap-10">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
          <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
          <i class="fa-solid fa-phone"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
          <i class="fa-solid fa-comment"></i>
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
     <div className="fixed bottom-4 left-4 flex flex-col space-y-4">
                <button 
                    onClick={() => toggleDialog('facebook')} 
                    className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
                >
                    <img src={fbLogo} alt="Facebook" className="w-6 h-6" />
                </button>
                <button 
                    onClick={() => toggleDialog('email')} 
                    className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
                >
                    <img src={zaloLogo} alt="Email" className="w-6 h-6" />
                </button>
                <button 
                    onClick={() => toggleDialog('zalo')} 
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg"
                >
                    <img src={phoneCall} alt="Zalo" className="w-6 h-6" />
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
                            <img src={fbLogo} alt="Facebook" className="w-6 h-6 mr-2" />
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
                        <li className="flex items-center mb-2 p-3">
                            <img src={phoneCall} alt="Zalo" className="w-6 h-6 mr-2" />
                            <span className='font-bold text-center'>0392778939</span>
                        </li>
                    </ul>
                </div>
            )}
    
        </div>
    );
};

export default MainPage;