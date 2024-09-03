import React, { useState, useEffect } from 'react';
import FBProfolio from '../picture/z5771418071583_9df1f7071bfed725d6ebeffaad416766.jpg';
import OTTCWeb from '../picture/photo-1507238691740-187a5b1d37b8.avif';
import ATUWeb from '../picture/premium_photo-1685086785636-2a1a0e5b591f.avif';
import UXUIs from '../picture/computer.png';
import Rocket from '../picture/shuttle.png';
import GlobalClick from '../picture/global.png';
import Backends from '../picture/backend.png';
import CodingSec from '../picture/photo-1628258334105-2a0b3d6efee1.avif';
import FBLOgo from '../picture/facebook-logo-facebook-icon-transparent-free-png.webp';
import ZaloLOGO from '../picture/Logo-Zalo-Arc.webp';
import IGLogo from '../picture/instagram-logo-instagram-icon-transparent-free-png.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WebsiteDesigner.css';

const WebsiteDesigner = () => {
    const [showSocialMedia, setShowSocialMedia] = useState(false);

    const handleDownloadClick = () => {
        setShowSocialMedia(!showSocialMedia); // Toggle visibility
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            once: true, // Only animate once
        });
    }, []);

    const services = [
        { icon: UXUIs, title: "Thiết kế và phát triển giao diện người dùng (UI/UX):", description: "Chịu trách nhiệm chuyển đổi các thiết kế UI/UX thành các trang web hoặc ứng dụng tương tác" },
        { icon: Rocket, title: "Tối ưu hóa hiệu suất trang web:", description: "Thực hiện các biện pháp để cải thiện tốc độ tải trang và hiệu suất của trang web" },
        { icon: GlobalClick, title: "Đảm bảo tính tương thích đa nền tảng:", description: "Đảm bảo rằng giao diện người dùng hoạt động tốt trên nhiều trình duyệt web khác nhau (như Chrome, Firefox, Safari)" },
        { icon: Backends, title: "Tích hợp API và tương tác với backend", description: "Lấy dữ liệu và hiển thị chúng trên giao diện người dùng, đảm bảo tính đồng bộ giữa frontend và backend." },
    ];

    const pricingPlans = [
        {
            title: "DV BASIC",
            price: "LIÊN HỆ ĐỂ BÁO GIÁ",
            features: [
                "✔ Hiển thị giao diện người dùng (UI)",
                "✔ Responsive Design",
                "Xử lý hoạt ảnh và chuyển đổi",
                "XỬ LÍ BACKEND",
            ],
            unavailableFeatures: [2, 3],
            icon: "motorcycle",
        },
        {
            title: "DV PRO",
            price: "LIÊN HỆ ĐỂ BÁO GIÁ",
            features: [
                "✔ Hiển thị giao diện người dùng (UI)",
                "✔ Responsive Design",
                "✔ Xử lý hoạt ảnh và chuyển đổi",
                "✔ Kiểm tra và gỡ lỗi giao diện",
                "XỬ LÍ BACKEND",
            ],
            unavailableFeatures: [4],
            icon: "truck",
        },
        {
            title: "DV PREMIUM",
            price: "LIÊN HỆ ĐỂ BÁO GIÁ",
            features: [
                "✔ Hiển thị giao diện người dùng (UI)",
                "✔ Responsive Design",
                "✔ Xử lý hoạt ảnh và chuyển đổi",
                "✔ Kiểm tra và gỡ lỗi giao diện",
                "✔ XỬ LÍ BACKEND",
            ],
            unavailableFeatures: [],
            icon: "rocket",
        },
    ];

    return (
        <section className="h-auto flex flex-col items-center bg-gradient-to-b from-blue-200 to-purple-300 py-20">
            <div
                className="flex flex-col justify-center items-center h-[90vh] text-center"
                data-aos="fade-up"
            >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
                    HI!
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-4" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
                    TÔI LÀ <span className="text-purple-600">THÀNH PHẠM</span>
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mt-6" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
                    WEB DESIGNER
                </p>
                <button className="mt-10 px-8 py-3 border-2 border-purple-600 text-purple-600 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
                    Visit My Works
                </button>
            </div>

            {/* About Me Section */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-20 w-full max-w-6xl px-4" data-aos="fade-up">
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img src={FBProfolio} alt="About Me" className="avatar-img w-full max-w-sm rounded-lg shadow-lg mr-[100px]" />
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 text-center md:text-left">
                    <h3 className="text-lg font-light text-gray-600">Bản Thân</h3>
                    <h2 className="text-4xl font-bold text-purple-600 mt-2">GIỚI THIỆU</h2>
                    <p className="text-gray-600 text-lg text-justify mt-4">
                        Trong suốt những năm làm việc trong lĩnh vực phát triển frontend, tôi đã tích lũy được nhiều kinh nghiệm quý báu trong việc xây dựng và tối ưu hóa giao diện người dùng cho các ứng dụng web.<br /> Tôi có khả năng biến các thiết kế UI/UX thành các trang web tương tác và thân thiện với người dùng, đảm bảo trải nghiệm mượt mà trên các trình duyệt và thiết bị khác nhau.
                    </p>
                    <button
                        className="mt-8 px-6 py-2 border-2 border-purple-600 text-purple-600 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white"
                        onClick={handleDownloadClick}
                    >
                        TRANG CÁ NHÂN
                    </button>
                    {/* Social Media Section with Appear Animation */}
                    {showSocialMedia && (
                        <div className="mt-10 flex justify-center transition-opacity duration-500 ease-out opacity-100">
                            <div className="flex gap-8">
                                <a
                                    href="https://www.facebook.com/thanhcow2095/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
                                    data-aos="fade-right"
                                >
                                    <img src={FBLOgo} alt="Facebook" className="w-16 h-16" />
                                </a>
                                <a
                                    href="https://zalo.me/0565056793"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
                                    data-aos="fade-up"
                                >
                                    <img src={ZaloLOGO} alt="Zalo" className="w-10 h-10" />
                                </a>
                                <a
                                    href="https://www.instagram.com/thanhcow209/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80"
                                    data-aos="fade-left"
                                >
                                    <img src={IGLogo} alt="Instagram" className="w-16 h-16" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 text-center mt-36" data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-6 text-center">DỊCH VỤ BÊN CHÚNG TÔI</h2>
                <span className="font-bold text-3xl block mb-10">
                    DỊCH VỤ
                </span>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
                    {services.map((service, index) => (
                        <div key={index} className="relative group bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-16 h-16 mb-4 transition-transform duration-300 transform group-hover:translate-y-[-50%]"
                                />
                                <h3 className="text-lg font-semibold mb-4 group-hover:text-purple-600 transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 text-center mt-36 m" data-aos="fade-up">
                <span className="font-bold text-3xl block mb-10"></span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    <a href="#a" className="relative group" data-aos="fade-right">
                        <div className="w-[350px] h-[350px] mx-auto bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img src={OTTCWeb} alt="Portfolio 1" className=" object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110 " />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p className="text-xl font-semibold">Giao diện hoàn hảo</p>
                            </div>
                        </div>
                    </a>

                    <a href="#a" className="relative group" data-aos="fade-up">
                        <div className="w-[350px] h-[350px] mx-auto bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img src={ATUWeb} alt="Portfolio 2" className=" object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p className="text-xl font-semibold">Thiết kế theo ý muốn</p>
                            </div>
                        </div>
                    </a>

                    <a href="#a" className="relative group" data-aos="fade-left">
                        <div className="w-[350px] h-[350px] mx-auto bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img src={CodingSec} alt="Portfolio 3" className=" object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p className="text-xl font-semibold">Trải nghiệm mượt mà</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="mt-20 py-12" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-6">THAM KHẢO DỊCH VỤ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className="bg-gradient-to-b from-blue-200 to-purple-300 shadow-lg rounded-lg p-8" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                <div className="flex justify-center mb-4">
                                    <div className="text-6xl text-black">
                                        <i className={`fas fa-${plan.icon}`}></i>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-purple-600 mb-4">{plan.title}</h3>
                                <ul className="text-gray-600 mb-6 text-justify">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className={`mb-2 ${
                                                plan.unavailableFeatures.includes(i)
                                                    ? "text-red-500 line-through"
                                                    : ""
                                            }`}
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</div>
                                <button
                                    className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition"
                                    onClick={() => window.open('https://zalo.me/0565056793', '_blank')}
                                >
                                    LIÊN HỆ
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteDesigner;
