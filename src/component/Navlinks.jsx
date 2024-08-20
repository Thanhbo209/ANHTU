import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navlinks.css'; // Import file CSS
const Navlinks = () => {
    const [heading, setHeading] = useState("")
    const [subheading, setSubHeading] = useState("")
    const links = [
        {
            name: "DỊCH VỤ FACEBOOK",
            submenu: true,
            sublinks: [
                {
                    Head: "DỊCH VỤ FACEBOOK",
                    sublink: [
                        {name: 'Lên tích xanh Facebook', links: '/len-tich-xanh-facebook'},
                        {name: 'Lấy lại Facebook', links: '/lay-lai-facebook'},
                        {name: 'Lấy lại Facebook bị hack', links: '/lay-lai-facebook-bi-hack'},
                        {name: 'Facebook bị khóa', links: '/facebook-bi-khoa'},
                        {name: 'Lấy lại Facebook mất mật khẩu', links: '/lay-lai-facebook-mat-mat-khau'},
                        {name: 'Lấy Mã đăng nhập Facebook', links: '/lay-ma-dang-nhap-facebook'},
                        {name: 'Bảo mật Facebook', links: '/bao-mat-facebook'},
                    ],
                },
                {
                    Head: "DỊCH VỤ TĂNG TƯƠNG TÁC",
                    sublink: [
                        {name: 'Tăng View khi Live', links: '/tang-view-khi-live'},
                        {name: 'Tăng Like', links: '/tang-like'},
                        {name: 'Tăng Follower, Like FanPage', links: '/tang-follower-like-fanpage'},
                        {name: 'Tăng View video', links: '/tang-view-video'},
                        {name: 'Tăng Comment', links: '/tang-comment'},
                        {name: 'Tăng share', links: '/tang-share'},
                        {name: 'Tăng đánh giá', links: '/tang-danh-gia'},
                    ],
                },
                {
                    Head: "DỊCH VỤ FanPage, Group",
                    sublink: [
                        {name: 'Xây Dựng FanPage', links: '/xay-dung-fanpage'},
                        {name: 'Mua Bán Group', links: '/mua-ban-group'},
                        {name: 'Mua Bán FanPage', links: '/mua-ban-fanpage'},
                        {name: 'Quảng Cáo Facebook ADS', links: '/quang-cao-facebook-ads'},
                        {name: 'Quản Trị FanPage', links: '/quan-tri-fanpage'},
                        {name: 'Lấy Lại FanPage, Group', links: '/lay-lai-fanpage-group'},
                    ],
                },
                {
                    Head: "CÁC DỊCH VỤ KHÁC",
                    sublink: [
                        {name: 'Bảo Vệ Bản Quyền', links: '/bao-ve-ban-quyen'},
                        {name: 'Lọc Bạn Bè Không Tương Tác', links: '/loc-ban-be-khong-tuong-tac'},
                        {name: 'Xử Lí Vấn Đề Về FaceBook', links: '/xu-li-van-de-facebook'},
                        {name: 'Vô hiệu hóa Facebook', links: '/vo-hieu-hoa-facebook'},
                    ],
                },
            ],
        },
        {
            name: "DỊCH VỤ KHÁC",
            submenu: true,
            sublinks: [
                {
                    Head: "INSTAGRAM",
                    sublink: [
                        {name: 'Tăng Follower Instagram', links: '/tang-follower-instagram'},
                        {name: 'Tăng Tim Instagram', links: '/tang-tim-instagram'},
                        {name: 'Tăng Comment Instagram', links: '/tang-comment-instagram'},
                        {name: 'Tăng View Video Instagram (Reels)', links: '/tang-view-video-instagram'},
                    ],
                },
                {
                    Head: "TIKTOK",
                    sublink: [
                        {name: 'Tăng Follower TikTok', links: '/tang-follower-tiktok'},
                        {name: 'Tăng Tim Video Tiktok', links: '/tang-tim-video-tiktok'},
                        {name: 'Tăng View Video Tiktok', links: '/tang-view-video-tiktok'},
                    ],
                },
                {
                    Head: "YOUTUBE",
                    sublink: [
                        {name: 'Tăng Subcribe Kênh Youtube', links: '/tang-subcribe-kenh-youtube'},
                        {name: 'Tăng View Video Youtube', links: '/tang-view-video-youtube'},
                        {name: 'Tăng Like Video Youtube', links: '/tang-like-video-youtube'},
                        {name: 'Tăng Comment Video Youtube', links: '/tang-comment-video-youtube'},
                    ],
                },
            ],
        },
    ];
    return (
        links.map((linkItem, index) => (
            <div key={index} className="">
                <div className="px-3 text-left md:cursor-pointer group">
                    <h1 className='py-7 cursor-pointer flex justify-between items-center md:pr-0 pr-5 group' onClick={() =>
                        heading !== linkItem.name ? setHeading(linkItem.name) : setHeading('')
                    }>
                        {linkItem.name}
                        <span className='text-xl md:hidden inline'>
                            <i className={`${heading === linkItem.name ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                        </span>
                        <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 '>
                            <i className="fa-solid fa-chevron-down" ></i>
                        </span>
                    </h1>
                    {linkItem.submenu && (
                        <div className="submenu">
                            <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                                <div className="py-1">
                                    <div className="w-5 h-5 left-2  absolute bg-[#55ead4] shadow-2xl mt-1 rotate-45 "></div>
                                </div>
                                <div className="bg-[#ffffff] p-5 grid grid-cols-3 gap-10 shadow-2xl rounded-xl">
                                    {linkItem.sublinks.map((mysublinks, subIndex) => (
                                        <div key={subIndex} className="">
                                            <h1 className="text-lg font-bold">{mysublinks.Head}</h1>
                                            {mysublinks.sublink.map((slink, slinkIndex) => (
                                                <li key={slinkIndex} className='text-sm text-gray-600 my-2.5'>
                                                    <Link to={slink.links} className='text-[#6F56A6] hover:text-black text-base'>{slink.name}</Link>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* responsive  */}
                <div className={`${heading === linkItem.name ? 'md:hidden' : 'hidden'}`}>
                    {/* sublinks */}
                    {linkItem.sublinks.map((slinks, subIndex) => (
                        <div key={subIndex} className="">
                            <div className="">
                                <h1 onClick={() => subheading !== slinks.Head
                                    ? setSubHeading(slinks.Head)
                                    : setSubHeading('')
                                }
                                    className=' pl-7 font-semibold  py-7 cursor-pointer flex justify-between items-center md:pr-0 pr-5'>
                                    {slinks.Head}
                                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                                        <i className={`${subheading === slinks.Head ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                                    </span>
                                </h1>
                                <div className={` ${subheading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                    {slinks.sublink.map((slink, slinkIndex) => (
                                        <li key={slinkIndex} className='py-3 pl-14'>
                                            <Link to={slink.links} className='hover:text-blue-400'>{slink.name}</Link>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))
    );
};

export default Navlinks;