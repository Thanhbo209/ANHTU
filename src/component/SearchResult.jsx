import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import FAcebook from '../picture/photo-1655199798153-a8f56d8655d2.avif';
import InstaGram from '../picture/photo-1661953118591-2f5be524698e.avif';
import TikTokk from '../picture/photo-1661347998648-79ad2d81bf26.avif';
import YTube from '../picture/photo-1649180543887-158357417159.avif';

const SearchResult = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';

    const services = [
        {
            category: "Dịch vụ Facebook",
            services: [
             { name: "Lên tích xanh Facebook", image: FAcebook, link: "/len-tich-xanh-facebook" },
                { name: "Lấy lại Facebook", image: FAcebook, link: "/lay-lai-facebook" },
                { name: "Lấy lại Facebook bị hack", image: FAcebook, link: "/lay-lai-facebook-bi-hack" },
                { name: "Facebook bị khóa", image: FAcebook, link: "/facebook-bi-khoa" },
                { name: "Lấy lại Facebook mất mật khẩu", image: FAcebook, link: "/lay-lai-facebook-mat-mat-khau" },
                { name: "Lấy Mã đăng nhập Facebook", image: FAcebook, link: "/lay-ma-dang-nhap-facebook" },
                { name: "Bảo mật Facebook", image: FAcebook, link: "/bao-mat-facebook" },
                { name: "Xây Dựng FanPage", image: FAcebook, link: "/xay-dung-fanpage" },
                { name: "Mua Bán Group", image: FAcebook, link: "/mua-ban-group" },
                { name: "Mua Bán FanPage", image: FAcebook, link: "/mua-ban-fanpage" },
                { name: "Quảng Cáo Facebook ADS", image: FAcebook, link: "/quang-cao-facebook-ads" },
                { name: "Quản Trị FanPage", image: FAcebook, link: "/quan-tri-fanpage" },
                { name: "Lấy Lại FanPage, Group", image: FAcebook, link: "/lay-lai-fanpage-group" }
            ]
        },
        {
            category: "Dịch vụ Tăng Tương Tác",
            services: [
                { name: "Tăng Follower, Like FanPage", description: "Dịch vụ tăng lượt thích và theo dõi cho FanPage.", image:FAcebook, link: "/tang-follower-like-fanpage" },
                { name: "Tăng View video", description: "Dịch vụ tăng lượt xem video trên các nền tảng.", image:FAcebook, link: "/tang-view-video" },
                { name: "Tăng Like", description: "Dịch vụ tăng lượt thích trên các bài viết và fanpage.", image: FAcebook, link: "/tang-like" },
                { name: "Tăng Comment", description: "Dịch vụ tăng lượt bình luận trên các bài viết và fanpage.", image: FAcebook, link: "/tang-comment" },
                { name: "Tăng share", description: "Dịch vụ tăng lượt chia sẻ cho bài viết.", image: FAcebook, link: "/tang-share" },
                { name: "Tăng đánh giá", description: "Dịch vụ tăng lượt đánh giá 5 sao trên fanpage.", image: FAcebook, link: "/tang-danh-gia" },
            ]
        },
        {
            category: "Dịch vụ Instagram",
            services: [
                { name: "Tăng Follower Instagram", description: "Dịch vụ tăng lượt theo dõi trên Instagram.", image: InstaGram, link: "/tang-follower-instagram" },
                { name: "Tăng Tim Instagram", description: "Dịch vụ tăng lượt theo dõi trên Instagram.", image: InstaGram, link: "/tang-tim-instagram" },
                { name: "Tăng Comment Instagram", description: "Dịch vụ tăng lượt theo dõi trên Instagram.", image: InstaGram, link: "/tang-comment-instagram" },
                { name: "Tăng View Instagram", description: "Dịch vụ tăng lượt theo dõi trên Instagram.", image: InstaGram, link: "/tang-view-video-instagram" },
            ]
        },
        {
            category: "Dịch vụ TikTok",
            services: [
                { name: "Tăng Follower TikTok", description: "Dịch vụ tăng lượt theo dõi trên TikTok.", image: TikTokk, link: "/tang-follower-tiktok" },
                { name: "Tăng Tim Video TikTok", description: "Dịch vụ tăng lượt theo dõi trên TikTok.", image: TikTokk, link: "/tang-tim-video-tiktok" },
                { name: "Tăng View Video TikTok", description: "Dịch vụ tăng lượt theo dõi trên TikTok.", image: TikTokk, link: "/tang-view-video-tiktok" },
            ]
        },
        {
            category: "YouTube",
            services: [
                {
                    name: "Tăng Subcribe Kênh Youtube",
                    image: YTube, // Add your image link here
                    link: "/tang-subcribe-kenh-youtube",
                    description: "Dịch vụ tăng lượt đăng ký cho kênh YouTube của bạn."
                },
                {
                    name: "Tăng View Video Youtube",
                    image: YTube, // Add your image link here
                    link: "/tang-view-video-youtube",
                    description: "Dịch vụ tăng lượt xem cho video trên YouTube của bạn."
                },
                {
                    name: "Tăng Like Video Youtube",
                    image: YTube, // Add your image link here
                    link: "/tang-like-video-youtube",
                    description: "Dịch vụ tăng lượt thích cho video trên YouTube của bạn."
                },
                {
                    name: "Tăng Comment Video Youtube",
                    image: YTube, // Add your image link here
                    link: "/tang-comment-video-youtube",
                    description: "Dịch vụ tăng lượt bình luận cho video trên YouTube của bạn."
                }
            ]
        },
        // Thêm các dịch vụ khác nếu cần
    ];

    const filteredResults = services.flatMap(category =>
        category.services.filter(service =>
            service.name.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mt-24">Kết quả tìm kiếm cho "{query}" :</h2>
            {filteredResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResults.map(service => (
                        <div key={service.name} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <img src={service.image} alt={service.name} className="w-full h-auto object-cover mb-4 rounded-xl" />
                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                            <Link to={service.link} className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Chi tiết
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">Không tìm thấy kết quả nào phù hợp.</p>
            )}
        </div>
    );
};

export default SearchResult;
