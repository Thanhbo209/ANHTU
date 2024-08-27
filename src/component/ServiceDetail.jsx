import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Element, scroller } from 'react-scroll';

// Import CSS Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from 'react-router-dom';
import fbLogo from '../picture/Facebook_Logo_2023 (1).png';
import zaloLogo from '../picture/Icon_of_Zalo.svg.webp';
import phoneCall from '../picture/2934394.png';
import customerCare from '../picture/pngtree-service-helpdesk-icon-simple-vector-png-image_4996153.png';
import speedCare from '../picture/speedometer-icon-blackand-white-1yvotil0ln5yvoys.png';
import secuRed from '../picture/security-31.png';
import shoppingCart from '../picture/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.webp';
import lostAccount from '../picture/progress-of-my-fb-hacked-account-v0-yczkyqnvz8z91.webp';
import checkTick from '../picture/1828640.png';
import hackedAccount from '../picture/unnamed.png';
import lockedAccount from '../picture/0up4opug0nc71.webp';
import lostPassWordAccount from '../picture/1585896859121.png';
import accountCode from '../picture/image-70-1024x548.webp';
import accountSecured from '../picture/Facebook security.webp';
import accountView from '../picture/Buy-1000-Facebook-Views.png';
import accountLike from '../picture/39446caa52f53369b92bc97253d2b2f1.png';
import groupLike from '../picture/like-fanpage-facebook.png';
import videoView from '../picture/Screen-Shot-2021-10-26-at-11.31.16-AM.png';
import Cmt from '../picture/comment_chat_message_icon_178897.png';
import shaRe from '../picture/share-icon-7nl.png';
import fbRating from '../picture/facebook-reviews-logo.png.webp';
import fbFanpage from '../picture/dich-vu-cham-soc-phat-trien-noi-dung-fanpage-hieu-qua-3.png';
import fbFanpageBuySell from '../picture/banner-reason.png';
import fbAds from '../picture/young-man-doing-marketing-on-social-media-3d-cartoon-character-illustration-free-png.webp';
import fanPageManager from '../picture/4afe825bbf0e6d1bafcf14059f0658f1.png';
import fanPageLost from '../picture/catch-22-if-you-lose-admin-access-to-your-business-page-you-v0-32bo2w3yi67b1.webp';
import copyRightfb from '../picture/Copyright-Symbol-PNG-Picture.png';
import unFriend from '../picture/unfriend.webp';
import fbProblem from '../picture/zzz2.png';
import fbDisable from '../picture/facebook-disabled-my-account-after-15-years-and-wont-tell-v0-26etkm1okfxb1.webp';
import igFl from '../picture/instagram-followers-icon.webp';
import igLike from '../picture/free-instagram-like-icon-3507-thumb.png';
import igCmt from '../picture/comment-icon-comment-post-social-media-notifications-isolated-png.png';
import igView from '../picture/main-qimg-4315f49af8e9c4abbf1227b24f1de1f5-pjlq.jpg';
import tiktokService from '../picture/closeup-animated-instagram-ui-comments-footage-196633415_iconl.webp';
import ytSub from '../picture/pngtree-subscribe-click-the-reminder-icon-png-image_6315982.png';
import ytView  from '../picture/402293.png';
import ytLike from '../picture/3d-isolated-social-media-icon-free-png.webp';
import ytCmt from '../picture/comment-button-8077148_1280.webp';
import LostEmailAndPhoneNumber from '../picture/2024_2_15_638436116382945853_facebook-nen.jpg';
import KetSatTim from '../picture/cach-mo-khoa-fb-ket-sat-tim.jpg';
import ViPhamCongDong from '../picture/700555033934882813675544769473805393330176n-15679156662481424791802.webp';
import FBProtect from '../picture/facebook-lock-account-to-protect_1280x1036-800-resize.jpg';
import FBDisabled from '../picture/cach-khoi-phuc-tai-khoan-facebook-bi-vo-hieu-hoa-tam-thoi-vao-nam-2024-9505.jpg';
import FBCopyRighted from '../picture/u8Jq-link-mo-khoa-facebook-bi-vo-hieu-hoa-disable-gui-id-1.jpg';
import FBLoginCode from '../picture/6099011_ma-dang-nhap-facebook-la-gi-1.jpg';
import FBIdentity from '../picture/images.png';
import FB180Days from '../picture/Tai-Khoan-Se-Bi-Vo-Hieu-Hoa-Sau-180-Ngay-Nua.jpg';
import './ServiceDetail.css';


const ServiceDetail = () => {
    const { serviceName } = useParams();
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Thời gian chuyển đổi giữa các slide
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Tự động lướt slide
        autoplaySpeed: 2000, // Thời gian dừng ở mỗi slide (2 giây)
        pauseOnHover: false, // Không dừng lại khi hover chuột
      };
    // Dữ liệu chi tiết của các dịch vụ
    const serviceDescriptions = {
        'len-tich-xanh-facebook': {
            title: 'Lên Tích Xanh Facebook',
            description: '☛ Dịch vụ hỗ trợ bạn xác minh dấu tích xanh trên Facebook <br />☛ Giúp tài khoản cá nhân hoặc fanpage của bạn trở nên uy tín hơn<br />☛ Thu hút nhiều sự chú ý và tin tưởng từ người dùng khác.',
            image: checkTick,
            subServices: [
                {
                    subTitle: 'Dịch Vụ Xác Minh Dấu Tích Xanh Fanpage',
                     price: 'Liên hệ để báo giá',
                    description: 'Dịch vụ này dành cho những doanh nghiệp hoặc những nhà kinh doanh muốn xây dựng cho mình 1 Fanpage Facebook có dấu tích xanh được xác minh.',
                    image: checkTick,
                },
                {
                    subTitle: 'Dịch Vụ Xác Minh Tích Xanh Profile Cá Nhân',
                     price: 'Liên hệ để báo giá',
                    description: 'Hướng tới những khách hàng cá nhân muốn xác minh cho mình 1 dấu tích xanh trên Facebook để tạo dựng thương hiệu hoặc xây dựng hình ảnh trên Facebook.',
                    image: checkTick,
                },
                {
                    subTitle: 'Dịch Vụ Thuê Dấu Tích Xanh Theo Tháng',
                    price: 'Liên hệ để báo giá',
                    description: 'Dành cho những ai không nổi tiếng nhưng vẫn muốn sở hữu 1 dấu tích xanh trên Facebook thì đây sẽ là 1 dịch vụ tuyệt vời dành cho các bạn.',
                    image: checkTick,
                }
            ]
        },
        'lay-lai-facebook': {
            title: 'Lấy Lại Facebook',
            description: '☛ Chúng tôi cung cấp dịch vụ chuyên nghiệp để khôi phục tài khoản Facebook bị mất một cách nhanh chóng và an toàn <br />☛ Đảm bảo bạn có thể truy cập lại tài khoản của mình trong thời gian ngắn nhất.',
            image: lostAccount,
            subServices: [
                {
                    subTitle: ' Facebook bị hack thay đổi Email và SĐT',
                    price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Bị thay đổi Email và SĐT<br />☛ Nguyên nhân: Có thể là do bạn đã truy cập vào link lạ hoặc bị cài 1 phần mềm theo dõi Facebook nào đó<br />☛ Thời gian hỗ trợ: 5 phút  - 24 giờ<br />☛ Yêu cầu: Còn giữ thiết bị dăng nhập tài khoản bị mất',
                    image: LostEmailAndPhoneNumber,
                },
                {
                    subTitle: ' Facebook bị khóa két sắt màu tím',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Bị khóa Facebook và hiện lên màu tím<br />☛ Nguyên nhân: Do bị người khác report hoặc vi phạm tiêu chuẩn cộng đồng<br />☛ Thời gian hỗ trợ: 5 phút  - 24 giờ <br />☛ Yêu cầu: Còn giữ thiết bị dăng nhập tài khoản bị mất',
                    image: KetSatTim,
                },
                {
                    subTitle: 'Facebook vi phạm tiêu chuẩn cộng đồng',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Thường xuyên vi phạm tiêu chuẩn cộng đồng<br />☛ Nguyên nhân: Bài viết về xuất khẩu, tuyển người, chính trị và những nội dung nhạy cảm<br />☛ Thời gian hỗ trợ: Tùy vào mức độ <br />☛ Yêu cầu: Ngày/Tháng/Năm sinh trùng với giấy tờ',
                    image: ViPhamCongDong,
                },
                {
                    subTitle: 'Facebook bị khóa do Protect',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Không vào được Facebook không rõ lí do<br />☛ Nguyên nhân: Bị xâm phạm hoặc spam quá nhiều<br />☛ Thời gian hỗ trợ: 30 phút - 1 tiếng <br />☛ Yêu cầu: Có Email liên kết với Facebook',
                    image: FBProtect,
                },
                {
                    subTitle: 'Facebook bị vô hiệu hóa vĩnh viễn',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Bị vô hiệu hóa không rõ lí do<br />☛ Nguyên nhân: Vi phạm chính sách Facebook (tình tiết nặng)<br />☛ Thời gian hỗ trợ: 1 - 30 ngày <br />☛ Yêu cầu: Có Email liên kết với Facebook',
                    image: FBDisabled,
                },
                {
                    subTitle: 'Facebook vô hiệu hóa bản quyền',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Nhận được Email báo vi phạm do bản quyền bên thứ ba<br />☛ Nguyên nhân: Đăng bài có liên quan đén bản quyền của thương hiệu nào đó<br />☛ Thời gian hỗ trợ: 1 - 30 Ngày <br />☛ Yêu cầu: Có Email liên kết với Facebook',
                    image: FBCopyRighted,
                },
                {
                    subTitle: 'Facebook bị mã đăng nhập',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Facebook yêu cầu mã khi đăng nhập<br />☛ Nguyên nhân: Mất thông tin hoặc bị hacker tấn công <br />☛ Thời gian hỗ trợ: 5 phút - 24 giờ <br />☛ Yêu cầu: Nhớ ngày tháng năm sinh trên Facebook',
                    image: FBLoginCode,
                },
                {
                    subTitle: 'Facebook bị khóa bắt xác minh danh tính',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Bắt xác minh khi đăng nhập<br />☛ Nguyên nhân: Có 3 nguyên nhân chính:<br />- Bị report <br />- Hoạt động vi phạm nào đó <br />- Đăng nhập trên thiết bị lạ <br />☛ Thời gian hỗ trợ: 5 phút - 24 giờ <br />☛ Yêu cầu: Còn giữ Email và thiết bị đăng nhập tài khoản Facebook đó',
                    image: FBIdentity,
                },
                {
                    subTitle: 'Facebook bị vô hiệu hóa 180 ngày',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Dấu hiệu: Nhận thông báo bị vô hiệu hóa do vi phạm <br />☛ Nguyên nhân: Do vi phạm bản quyền, chưa đủ tuổi hoặc vi phạm chính sách Facebook<br />☛ Thời gian hỗ trợ: 1 - 30 ngày <br />☛ Yêu cầu: Còn Email liên kết với tài khoản Facebook',
                    image: FB180Days,
                },
            ]
        },
        'lay-lai-facebook-bi-hack': {
            title: 'Lấy Lại Facebook Bị Hack',
            description: '☛ Nếu tài khoản Facebook của bạn bị hack, chúng tôi sẽ giúp bạn lấy lại quyền kiểm soát tài khoản một cách an toàn<br />☛ Đảm bảo không để lộ thông tin cá nhân và bảo mật tối đa.',
            image: hackedAccount,
            subServices: [
                {
                    subTitle: 'Bị Hack Facebook đồi email và số điện thoại',
                    description: 'Bị hack và đổi hết thông tin, hơn nữa còn bị người hack mang đi để làm mục đích xấu xa <br/> Cần giấy tờ tùy thân trùng với thông tin trên Facebook',
                },
                {
                    subTitle: 'Bị Hack Facebook đồi email và số điện thoại + bị khóa',
                    description: 'Thông thường khi bị hack Facebook hacker sẽ cố tình làm cho Facebook của bạn vừa bị khóa + bị mã xác thực <br / > Cần giấy tờ tùy thân trùng với thông tin trên Facebook',
                },
                {
                    subTitle: 'Lấy lại Facebook bị hack + bảo mật',
                    description: 'Hỗ trợ lấy lại Facebook + bảo mật nick dối với những nick Facebook có tầm ảnh hưởng hoặc làm ăn kinh doanh trên đó <br /> Cần giấy tờ tùy thân trùng với thông tin trên Facebook',
                }
            ]
        },
        'facebook-bi-khoa': {
            title: 'Facebook Bị Khóa',
            description: '☛ Dịch vụ mở khóa tài khoản Facebook bị vô hiệu hóa do vi phạm chính sách hoặc các lý do khác<br />☛ Giúp bạn khôi phục lại tài khoản và tiếp tục sử dụng một cách bình thường.',
            image: lockedAccount,
            subServices: [
                {
                    subTitle: 'Bị khóa két sắt tím do Spam hoặc bị Hack',
                     price: 'Liên hệ để báo giá',
                    description: 'Thay đổi Email hoặc đăng nhập trên thiết bị lạ hoặc tự dưng thấy <br/> Facebook mình bị khóa dạng két sắt tím',
                    
                },
                {
                    subTitle: 'Bị khóa két sắt tím (với Facebook có tầm ảnh hưởng)',
                     price: 'Liên hệ để báo giá',
                    description: 'Thông thường khi bị khóa két sắt tím những Facebook có tầm ảnh hưởng hoặc kinh doanh trên đó sẽ bị khó hơn',
                    
                },
                {
                    subTitle: 'Bị khóa két sắt tím do bị quá lâu',
                     price: 'Liên hệ để báo giá',
                    description: 'Bị khóa két sắt tím từ 1-2 tuần trở lên đươc gọi là trường hợp khó, tình trạng này chỉ còn cách treo bên hệ thống của chúng tôi. Thời gian làm cũng sẽ lâu hơn',
                    
                }
            ]
        },
        'lay-lai-facebook-mat-mat-khau': {
            title: 'Lấy Lại Facebook Mất Mật Khẩu',
            description: '☛ Dịch vụ hỗ trợ khôi phục tài khoản Facebook khi bạn quên mật khẩu<br />☛ Với các biện pháp bảo mật chặt chẽ để đảm bảo tài khoản của bạn luôn an toàn.',
            image: lostPassWordAccount,
            subServices: [
                {
                    subTitle: 'Bị mất mật khẩu do bị quên',
                     price: 'Liên hệ để báo giá',
                    description: 'Bị quên mất mật khẩu và quên luôn số điện thoại hoặc Email để lấy lại thông tin',
                  
                },
                {
                    subTitle: 'Bị mất mật khẩu do bị hack',
                     price: 'Liên hệ để báo giá',
                    description: 'Bị mất mật khẩu do bị hacker chiếm đoạt mất tài khoản, thay đổi hết Email và số điện thoại',
                  
                },
                {
                    subTitle: 'Mất mật khẩu + bị khóa',
                     price: 'Liên hệ để báo giá',
                    description: 'Thông thường khi mất mật khẩu các bạn thường tìm mọi cách lấy lại mật khẩu, vô tình những cách bạn làm có thể khiến Facebook bạn bị khóa thêm',
                  
                }
            ]
        },
        'lay-ma-dang-nhap-facebook': {
            title: 'Lấy Mã Đăng Nhập Facebook',
            description: '☛ Chúng tôi giúp bạn lấy lại mã đăng nhập Facebook khi không nhận được mã qua tin nhắn hoặc email<br />☛ Đảm bảo bạn có thể đăng nhập vào tài khoản một cách dễ dàng.',
            image: accountCode,
            subServices: [
                {
                    subTitle: 'Bị xác thực 2 yếu tố do hacker cài vào hoặc bị mất',
                     price: 'Liên hệ để báo giá',
                    description: 'Mất số điện thoại để nhận mã xác thực, hoặc mất phần mềm. Hay có thể là do hacker cố tình cài vào <br /> Cần giấy tờ tùy thân trùng với thông tin trên Facebook',
                   
                },
                {
                    subTitle: 'Bị xác thực 2 yếu tố + bị khóa ở trong',
                     price: 'Liên hệ để báo giá',
                    description: 'Thông thường khi bị hack Facebook hacker sẽ cố tình làm cho Facebook của bạn vừa bị khóa + bị mã xác thực <br /> Cần giấy tờ tùy thân trùng với thông tin trên Facebook',
                   
                },
                {
                    subTitle: 'Mở khóa xác thực 2 yếu tố + bảo mật',
                     price: 'Liên hệ để báo giá',
                    description: 'Hỗ trợ mở khóa xác thực 2 yếu tố + bảo mật nick dối với những nick Facebook có tầm ảnh hưởng hoặc làm ăn kinh doanh trên đó <br /> Cần giấy tờ tùy thân trùng với thông tin trên Facebook',
                   
                }
            ]
        },
        'bao-mat-facebook': {
            title: 'Bảo Mật Facebook',
            description: '☛ Dịch vụ tăng cường bảo mật cho tài khoản Facebook của bạn<br />☛ Ngăn chặn các hành vi xâm nhập trái phép<br />☛ Giúp bạn yên tâm sử dụng mạng xã hội mà không lo lắng về vấn đề an ninh.',
            image: accountSecured,
            subServices: [
                {
                    subTitle: 'Bảo mật chống hack Facebook Cá Nhân',
                     price: 'Liên hệ để báo giá',
                    description: 'Hỗ trợ bảo mật chống hack vĩnh viễn, đảm bảo rằng hacker sẽ không làm gì được Facebook cá nhân của bạn',
                    
                },
                {
                    subTitle: 'Bảo mật cho người có tầm ảnh hưởng lớn',
                     price: 'Liên hệ để báo giá',
                    description: 'Hỗ trợ bảo mật chống hack, chống khóa, chống report. Đảm bảo rằng bạn có thể dùng Facebook an toàn để làm việc',
                    
                },
                {
                    subTitle: 'Bảo mật cho người kinh doanh và bán hàng online',
                     price: 'Liên hệ để báo giá',
                    description: 'Hỗ trợ bảo mật Facebook chống hack, chống khóa, chống bị report để người kinh doanh bán hàng được an toàn',
                    
                }
            ]
        },
        'tang-view-khi-live': {
            title: 'Tăng View Livestream',
            description: '☛ Dịch vụ giúp tăng lượng người xem khi bạn livestream trên Facebook<br />☛ Thu hút nhiều khán giả hơn và nâng cao tương tác <br />☛ Giúp buổi livestream của bạn đạt hiệu quả tối đa.',
            image: accountView,
            subServices: [
                {
                    subTitle: 'Tăng View Live Facebook',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Mắt xem lên ngay lập tức<br />☛ Không giới hạn thời gian live <br />☛ Bảo hành lượt xem',
            
                },
              
            ]
        },
        'tang-like': {
            title: 'Tăng Like',
            description: '☛ Dịch vụ tăng lượt thích cho các bài viết hoặc fanpage của bạn trên Facebook<br />☛ Giúp nâng cao độ phổ biến và tăng cường sự hiện diện của bạn trên mạng xã hội.',
            image: accountLike,
            subServices: [
                {
                    subTitle: 'Tăng Like Loại 1',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Người thật đang hoạt động <br />☛ Bảo hành lượt like <br />☛ Lên ngay lập tức',
                    
                },
                {
                    subTitle: 'Tăng Like Loại 2',
                     price: 'Liên hệ để báo giá',
                    description: '☛ 70% người thật<br />☛ Bảo hành lượt like <br />☛ Lên ngay lập tức',
                    
                },
                {
                    subTitle: 'Tăng Like Loại 3',
                     price: 'Liên hệ để báo giá',
                    description: '☛ 50% người thật<br />☛ Bảo hành lượt like <br />☛ Lên ngay lập tức',
                    
                }
            ]
        },
        'tang-follower-like-fanpage': {
            title: 'Tăng Follower, Like FanPage',
            description: '☛ Chúng tôi giúp tăng số lượng người theo dõi và lượt thích cho FanPage của bạn<br />☛ Nâng cao sự uy tín và thu hút nhiều đối tượng khách hàng tiềm năng.',
            image: groupLike,
            subServices: [
                {
                    subTitle: 'Like Page, Follows Loại 1',
                     price: 'Liên hệ để báo giá',
                    description: '☛ 40% Người dùng thật <br />☛ Bảo hành lượt like, follows 1 năm<br />☛ Tăng tương tác cho Page',
                 
                },
                {
                    subTitle: 'Like Page, Follows Loại 2',
                     price: 'Liên hệ để báo giá',
                    description: '☛ 60% Người dùng thật<br />☛ Bảo hành lượt like, follows 1 năm <br />☛ Tăng tương tác cho Page',
                 
                },
           
            ]
        },
        'tang-view-video': {
            title: 'Tăng View Video',
            description: '☛ Dịch vụ giúp tăng lượt xem cho các video của bạn trên Facebook<br />☛ Giúp nội dung của bạn lan tỏa rộng rãi hơn và đạt được sự chú ý từ nhiều người dùng.',
            image: videoView,
            subServices: [
                {
                    subTitle: 'Tăng View Facebook',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Lên ngay lập tức <br />☛ Lượt view vĩnh viễn<br />☛ View người xem thật',
                 
                },
                {
                    subTitle: 'Tăng View Stories',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Lên ngay lập tức<br />☛ Lượt view vĩnh viễn <br />☛ View người xem thật',
                 
                },
                {
                    subTitle: 'Tăng View 600P',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Lên ngay lập tức<br />☛ Lượt view vĩnh viễn <br />☛ View người xem thật',
                 
                },
                {
                    subTitle: 'Tăng View 60P Live',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Lên ngay lập tức<br />☛ Lượt view vĩnh viễn <br />☛ View người xem thật',
                 
                },
                {
                    subTitle: 'Tăng View 60P Offline',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Lên ngay lập tức<br />☛ Lượt view vĩnh viễn <br />☛ View người xem thật',
                 
                },
           
            ]
        },
        'tang-comment': {
            title: 'Tăng Comment',
            description: '☛ Dịch vụ tăng số lượng bình luận cho các bài viết trên Facebook<br />☛ Tạo sự tương tác mạnh mẽ và tăng cường kết nối giữa bạn và người theo dõi.',
            image: Cmt,
            subServices: [
                {
                    subTitle: 'Tăng Comments Facebook',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Người thật đang hoạt động<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt comment',
                 
                },
                {
                    subTitle: 'Tăng Comments Group',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Người thật đang hoạt động<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt comment',
                 
                },
                {
                    subTitle: 'Tăng Comments Fanpage',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Người thật đang hoạt động<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt comment',
                 
                }
            ]
        },
        'tang-share': {
            title: 'Tăng Share',
            description: '☛ Chúng tôi giúp tăng số lượng chia sẻ cho các bài viết của bạn<br />☛ Giúp nội dung của bạn lan tỏa đến nhiều người hơn<br />☛ Từ đó mở rộng phạm vi tiếp cận.',
            image: shaRe,
            subServices: [
                {
                    subTitle: 'Tăng Share Facebook',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Chia sẻ thật<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt chia sẻ vĩnh viễn',
                 
                },
                {
                    subTitle: 'Tăng Share Live',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Chia sẻ thật<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt chia sẻ vĩnh viễn',
                 
                },
                {
                    subTitle: 'Tăng Share Group',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Chia sẻ thật<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt chia sẻ vĩnh viễn',
                 
                }
            ]
        },
        'tang-danh-gia': {
            title: 'Tăng Đánh Giá',
            description: '☛ Dịch vụ tăng số lượng đánh giá tích cực cho FanPage hoặc bài viết của bạn<br />☛ Giúp cải thiện uy tín và chất lượng hình ảnh của bạn trên mạng xã hội.',
            image: fbRating,
            subServices: [
                {
                    subTitle: 'Tăng Đánh Giá 5* Facebook',
                     price: 'Liên hệ để báo giá',
                    description: '☛ Người đánh giá thật<br />☛ Lên ngay lập tức <br />☛ Bảo hành lượt đánh giá vĩnh viễn',
                   
                },
            ]
        },
        'xay-dung-fanpage': {
        title: 'Xây Dựng FanPage',
        description: '☛ Dịch vụ xây dựng và phát triển FanPage Facebook<br />☛ Giúp bạn tạo dựng thương hiệu và kết nối với khách hàng.',
        image: fbFanpage, 
        subServices: [
            {
                subTitle: 'Các dịch vụ Fanage khác',
                 price: 'Liên hệ để báo giá',
                description: '☛ Tăng Like<br />☛ Tăng Comment <br />☛ Buff Đánh Giá <br />☛ Thiết kế logo, ảnh bìa <br />☛ Các gói autoseeding',
             
            },
            {
                subTitle: 'Gói Tăng Like Seeding Fanpage',
                 price: 'Liên hệ để báo giá',
                description: '☛ Tăng Like<br />☛ Tăng Comment <br />☛ Buff Đánh Giá <br />☛ Thiết kế logo, ảnh bìa <br />☛ Các gói hỗ trợ bán hàng Fanpage',
             
            },
            {
                subTitle: 'Gói Xây Dựng 1',
                 price: 'Liên hệ để báo giá',
                description: '☛ 5.000 Like Fanpage<br />☛ Hỗ trợ setup Fanpage chuẩn SEO <br />☛ Tặng giáo trình xây dựng Fanpage <br />☛ Thiết kế logo, ảnh bìa <br />☛Tặng gói auto seeding',
             
            },
            {
                subTitle: 'Gói Xây Dựng 2',
                 price: 'Liên hệ để báo giá',
                description: '☛ Người đánh giá thật<br />☛ Hỗ trợ setup Fanpage chuẩn SEO <br />☛ Hỗ trợ chạy quảng cáo Facebook <br />☛ Thiết kế logo, ảnh bìa <br />☛ Tặng gói auto seeding 100/ 1 tháng',
             
            },
            {
                subTitle: 'Gói Xây Dựng 3',
                 price: 'Liên hệ để báo giá',
                description: '☛ Người đánh giá thật<br />☛ Hỗ trợ setup Fanpage chuẩn SEO <br />☛ Hỗ trợ chạy quảng cáo Facebook <br />☛ Thiết kế logo, ảnh bìa <br />☛ Tặng gói auto seeding 200/ 1 tháng',
             
            },
        ]
    },
    'mua-ban-group': {
        title: 'Mua Bán Group',
        description: '☛ Dịch vụ mua bán group Facebook<br />☛ Hỗ trợ giao dịch và chuyển nhượng quyền quản trị group một cách an toàn và nhanh chóng.',
        image: fbFanpageBuySell, 
        subServices: [
            {
                subTitle: 'Bán Group sẵn có',
                 price: 'Liên hệ để báo giá',
                description: '☛ Cung cấp Group sẵn có số lượng thành viên cực kì lớn, giá phải chăng',
               
            },
            {
                subTitle: 'Cho thuê Group',
                 price: 'Liên hệ để báo giá',
                description: '☛ bạn có thể tự do đăng bài trên các Group có tương tác cực kì cao của chúng tôi.',
               
            },
            {
                subTitle: 'Tăng Member Group',
                 price: 'Liên hệ để báo giá',
                description: '☛ Thay vì tìm những Group có ngành đặc thù khó tìm thì bạn có thể nghiên cứu cách để tăng thành viên Group.',
               
            },
        ]
    },
    'mua-ban-fanpage': {
        title: 'Mua Bán FanPage',
        description: '☛ Dịch vụ mua bán FanPage Facebook<br />☛ Hỗ trợ bạn giao dịch FanPage với đầy đủ thông tin và bảo mật tuyệt đối.',
        image: fbFanpageBuySell, 
        subServices: [
            {
                subTitle: 'Fanpage 5.000 Like',
                 price: 'Liên hệ để báo giá',
                description: '☛ Bảo hành lượt like, bảo hành back<br />☛ Hỗ trợ thiết kế logo, ảnh bìa <br />☛ Tặng gói auto seeding<br />☛ Hỗ trợ chạy quảng cáo',
              
            },
            {
                subTitle: 'Fanpage 10.000 Like',
                 price: 'Liên hệ để báo giá',
                description: '☛ Bảo hành lượt like, bảo hành back<br />☛ Hỗ trợ thiết kế logo, ảnh bìa <br />☛ Tặng gói auto seeding<br />☛ Hỗ trợ chạy quảng cáo',
              
            },
            {
                subTitle: 'Fanpage 20.000 Like',
                 price: 'Liên hệ để báo giá',
                description: '☛ Bảo hành lượt like, bảo hành back<br />☛ Hỗ trợ thiết kế logo, ảnh bìa <br />☛ Tặng gói auto seeding<br />☛ Hỗ trợ chạy quảng cáo',
              
            },
        ]
    },
    'quang-cao-facebook-ads': {
        title: 'Quảng Cáo Facebook ADS',
        description: '☛ Dịch vụ quảng cáo Facebook ADS<br />☛ Giúp bạn tiếp cận đúng đối tượng khách hàng và tối ưu hóa chi phí quảng cáo.',
        image: fbAds,
        subServices: [
            {
                subTitle: 'Ngân Sách 10%',
                 price: 'Liên hệ để báo giá',
                description: '☛Target đến khách hàng tiềm năng<br />☛ Phí dịch vụ: 10% <br />☛ Cấp quyền xem tài khoản quảng cáo<br />☛ Báo cáo kết quả theo tuần<br />☛  Thêm 3% đối với sản phẩm VPCS',
              
            },
        ]
    },
    'quan-tri-fanpage': {
        title: 'Quản Trị FanPage',
        description: '☛ Dịch vụ quản trị FanPage, hỗ trợ bạn quản lý nội dung<br />☛ Tương tác và tăng trưởng lượng người theo dõi một cách hiệu quả.',
        image: fanPageManager,
        subServices: [
            {
                subTitle: 'Gói Chăm Sóc Fanpage Cơ Bản',
                 price: 'Liên hệ để báo giá',
                description: '☛Tạo Fanpage <br />☛ hiết kế ảnh bìa/avatar<br />☛ Viết bài Fanpage: <strong>10 bài /Tháng</strong><br />☛ Tăng like bài post: 50 Like /Post.<br />☛  Dựng video dạng slide ảnh: 1 video /Tháng<br />☛ Tối ưu SEO Fanpage.<br />☛ Tặng Landing Page trị giá 2,4 Triệu<br />☛ Setup chặn comment tiêu cực.<br />☛ Setup chóng cướp khách<br />☛ Hợp đồng tối thiểu: 2 tháng.',
              
            },
            {
                subTitle: 'Gói Chăm Sóc Fanpage Pro',
                 price: 'Liên hệ để báo giá',
                description: '☛Tạo Fanpage <br />☛ hiết kế ảnh bìa/avatar<br />☛ Viết bài Fanpage: 15 bài /Tháng<br />☛ Tăng like bài post: 50 Like /Post.<br />☛  Dựng video dạng slide ảnh: 1 video /Tháng<br />☛ Tối ưu SEO Fanpage.<br />☛ Tặng Landing Page trị giá 3,6 Triệu<br />☛ Setup chặn comment tiêu cực.<br />☛ Setup chóng cướp khách<br />☛ Setup tự động inbox khách hàng khi comment<br />☛ Hợp đồng tối thiểu: 2 tháng.',
              
            },
            {
                subTitle: 'Gói Chăm Sóc Fanpage Doanh Nghiệp',
                 price: 'Liên hệ để báo giá',
                description: '☛Tạo Fanpage <br />☛ hiết kế ảnh bìa/avatar <br />☛ Viết bài Fanpage: 25 bài /Tháng<br />☛ Tăng like bài post: 50 Like /Post.<br />☛  Dựng video dạng slide ảnh: 1 video /Tháng<br />☛ Tối ưu SEO Fanpage.<br />☛ Tặng Website chuẩn chuyên nghiệp<br />☛ Setup chặn comment tiêu cực.<br />☛ Setup chóng cướp khách<br />☛ Setup tự động inbox khách hàng khi comment<br />☛ Setup kịch bản trả lời tự động<br />☛ Hợp đồng tối thiểu: 2 tháng.',
              
            },
        ]
    },
    'lay-lai-fanpage-group': {
        title: 'Lấy Lại FanPage, Group',
        description: '☛ Dịch vụ lấy lại FanPage hoặc Group bị mất quyền truy cập<br />☛ Đảm bảo khôi phục quyền quản trị một cách an toàn.',
        image: fanPageLost,
        subServices: [
            {
                subTitle: 'Gói Chăm Sóc Fanpage Cơ Bản',
                 price: 'Liên hệ để báo giá',
                description: '☛Tạo Fanpage <br />☛ hiết kế ảnh bìa/avatar<br />☛ Viết bài Fanpage: <strong>10 bài /Tháng</strong><br />☛ Tăng like bài post: 50 Like /Post.<br />☛  Dựng video dạng slide ảnh: 1 video /Tháng<br />☛ Tối ưu SEO Fanpage.<br />☛ Tặng Landing Page trị giá 2,4 Triệu<br />☛ Setup chặn comment tiêu cực.<br />☛ Setup chóng cướp khách<br />☛ Hợp đồng tối thiểu: 2 tháng.',
              
            },
            {
                subTitle: 'Gói Chăm Sóc Fanpage Pro',
                 price: 'Liên hệ để báo giá',
                description: '☛Tạo Fanpage <br />☛ hiết kế ảnh bìa/avatar<br />☛ Viết bài Fanpage: 15 bài /Tháng<br />☛ Tăng like bài post: 50 Like /Post.<br />☛  Dựng video dạng slide ảnh: 1 video /Tháng<br />☛ Tối ưu SEO Fanpage.<br />☛ Tặng Landing Page trị giá 3,6 Triệu<br />☛ Setup chặn comment tiêu cực.<br />☛ Setup chóng cướp khách<br />☛ Setup tự động inbox khách hàng khi comment<br />☛ Hợp đồng tối thiểu: 2 tháng.',
              
            },
            {
                subTitle: 'Gói Chăm Sóc Fanpage Doanh Nghiệp',
                 price: 'Liên hệ để báo giá',
                description: '☛Tạo Fanpage <br />☛ hiết kế ảnh bìa/avatar <br />☛ Viết bài Fanpage: 25 bài /Tháng<br />☛ Tăng like bài post: 50 Like /Post.<br />☛  Dựng video dạng slide ảnh: 1 video /Tháng<br />☛ Tối ưu SEO Fanpage.<br />☛ Tặng Website chuẩn chuyên nghiệp<br />☛ Setup chặn comment tiêu cực.<br />☛ Setup chóng cướp khách<br />☛ Setup tự động inbox khách hàng khi comment<br />☛ Setup kịch bản trả lời tự động<br />☛ Hợp đồng tối thiểu: 2 tháng.',
              
            },
        ]
    },
    'bao-ve-ban-quyen': {
        title: 'Bảo Vệ Bản Quyền',
        description: '☛ Dịch vụ bảo vệ bản quyền trên Facebook,<br />☛ Giúp bạn ngăn chặn việc sao chép nội dung trái phép và bảo vệ quyền lợi của bạn.',
        image: copyRightfb, 
        subServices: [
            {
                subTitle: 'Bảo Vệ Bản Quyền Video',
                 price: 'Liên hệ để báo giá',
                description: 'Dịch vụ này cung cấp dành cho những sáng tạo video, dùng để bảo vệ video chạy quảng cáo hoặc video tạo ra để kinh doanh.',
               
            },
            {
                subTitle: 'Bảo Vệ Bản Quyền Hình ảnh',
                 price: 'Liên hệ để báo giá',
                description: 'Bảo vệ bản quyền những hình ảnh của bạn đăng tải lên Facebook nhằm đảo bảo rằng không ai coppy và sử dụng hình ảnh đó của bạn.',
               
            },
            {
                subTitle: 'Bảo Vệ Bản Quyền Audio',
                 price: 'Liên hệ để báo giá',
                description: 'Bảo vệ bản quyền những audio/ âm thanh của bạn đăng tải lên Facebook nhằm đảo bảo rằng không ai coppy và sử dụng thông tin đó của bạn.',
               
            },
        ]
    },
    'loc-ban-be-khong-tuong-tac': {
        title: 'Lọc Bạn Bè Không Tương Tác',
        description: '☛ Dịch vụ lọc và xóa những người bạn không tương tác trên Facebook<br />☛ Giúp bạn duy trì danh sách bạn bè chất lượng.',
        image: unFriend, 
        subServices: [
            {
                subTitle: 'Dịch vụ lọc bạn bè',
                 price: 'Liên hệ để báo giá',
                description: '☛ Không bị khóa nick<br />☛ Lọc 1 lần được 1000 – 2000 <br />☛ Lọc nhanh chóng ',
               
            },
        ]
    },
  
    'xu-li-van-de-facebook': {
        title: 'Xử Lí Vấn Đề Về Facebook',
        description: '☛ Dịch vụ xử lý các vấn đề liên quan đến Facebook<br />☛ Giúp bạn giải quyết các sự cố và khắc phục nhanh chóng.',
        image: fbProblem, 
        subServices: [
            {
                subTitle: 'Xóa Facebook Bị Hacker Chiếm Đoạt',
                 price: 'Liên hệ để báo giá',
                description: '☛ Facebook bị hack xong rồi bị Hacker mang đi làm việc xấu như vay tiền, hay lừa đảo… <br />☛ Giấy tờ cá nhân trùng với thông tin trên Facebook ',
               
            },
            {
                subTitle: 'Xóa Facebook Bôi Xấu Danh Dự Cá Nhân, Tập Thể',
                 price: 'Liên hệ để báo giá',
                description: '☛ Bị kẻ xấu bôi nhọ trên nền tảng mạng xã hội Facebook không rõ nguyên nhân. <br />☛ Yêu cầu cung cấp bằng chứng bị bôi nhọ trên Facebook ',
               
            },
            {
                subTitle: 'Xóa Fanpage, Group Bôi Nhọ Danh Dự Cá Nhân, Tập Thể',
                 price: 'Liên hệ để báo giá',
                description: '☛ Bị kẻ xấu bôi nhọ trên nền tảng mạng xã hội Facebook không rõ nguyên nhân. <br />☛ Yêu cầu cung cấp bằng chứng bị bôi nhọ trên Facebook ',
               
            },
        ]
    },
    'vo-hieu-hoa-facebook': {
        title: 'Vô Hiệu Hóa Facebook',
        description: '☛ Dịch vụ vô hiệu hóa tài khoản Facebook theo yêu cầu<br />☛ Đảm bảo an toàn và bảo mật dữ liệu của bạn.',
        image: fbDisable, 
        subServices: [
            {
                subTitle: 'Bị vô hiệu hóa chưa up giấy tờ tùy thân',
                 price: 'Liên hệ để báo giá',
                description: '☛ Bị vô hiệu hóa do vi phạm nhưng bạn chưa up giấy tờ tùy thân của mình lên',
               
            },
            {
                subTitle: 'Bị vô hiệu hóa vĩnh viễn và không thể mở lại',
                 price: 'Liên hệ để báo giá',
                description: '☛ Up giấy tờ tùy thân lên những đã nhận được thông báo vô hiệu hóa vĩnh viễn và không còn quyền truy cập Facebook',
               
            },
            {
                subTitle: 'Bị vô hiệu hóa những up giấy tờ tùy thân bị từ chối',
                 price: 'Liên hệ để báo giá',
                description: '☛ Up giấy tờ tùy thân nên bị từ chối và bắt up lại giấy tờ khác và không thể xác minh.',
               
            },
        ]
    },
      // Dịch vụ liên quan đến Instagram
      'tang-follower-instagram': {
        title: 'Tăng Follower Instagram',
        description: '☛ Dịch vụ tăng số lượng người theo dõi trên Instagram<br />☛ Giúp bạn nâng cao sự hiện diện và uy tín trên nền tảng này.',
        image: igFl, 
        group: 'instagram',
    otherSubService: [
        {
            subServer: 'Server Like Việt',
            subName: 'Gói 1',
            subPrice: 'Phù hợp với tài khoản mới cần tăng lượng theo dõi',
            subOtherDescription: '☛ Tốc độ: 1000 - 2000 / 24H<br />☛ Tối đa 5000 theo dõi<br />☛ Bảo hành 7 ngày',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Việt',
            subName: 'Gói 2',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 500 - 1000 / 24H?<br />☛ Tối đa 10.000 theo dõi<br />☛ Không bảo hành',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'Gói 3',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 2k - 10k / 24H<br />☛ Tối đa 3 triệu theo dõi<br />☛ Không bảo hành',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'Gói 4',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 50.000 / 24H<br />☛ Tối đa 500.000 theo dõi<br />☛ Bảo hành 6 tháng',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'Gói 5',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 10k - 50k / 24H<br />☛ Tối đa 500.000 theo dõi<br />☛ Bảo hành 6 tháng',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'Gói 6',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 50.000 / 24H<br />☛ Tối đa 500.000 theo dõi <br />☛ Bảo hành 15 ngày',
            subImage: igCmt,
        },
    ]
    },
    'tang-tim-instagram': {
        title: 'Tăng Tim Instagram',
        description: '☛ Dịch vụ tăng lượt thích (tim) trên Instagram<br />☛ Giúp bài viết của bạn được nhiều người quan tâm hơn.',
        image: igLike, 
        otherSubService: [
        {
            subServer: 'Server Like Việt',
            subName: 'VIỆT - LOẠI 1',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 500 - 5000 / 24H<br />☛ Tối đa 50.000 Tim<br />☛ Không bảo hành',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Việt',
            subName: 'VIỆT - LOẠI 2',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 2000 / 24H<br />☛ Tối đa 10.000 Tim<br />☛ Không bảo hành',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Việt',
            subName: 'VIỆT - LOẠI 3',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 1000 / 24H<br />☛ Tối đa 10.000 Tim<br />☛ Không bảo hành',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'TÂY - LOẠI 1',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 5000 - 10000 / 24H<br />☛ Tối đa 50.000 Tim<br />☛ Bảo hành 15 ngày',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'TÂY - LOẠI 2',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 2000 / 24H<br />☛ Tối đa 10.000 Tim <br />☛ Không bảo hành',
            subImage: igCmt,
        },
        {
            subServer: 'Server Like Tây',
            subName: 'TÂY - LOẠI 3',
            subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
            subOtherDescription: '☛ Tốc độ: 10000 / 24H<br />☛ Tối đa 300.000 Tim <br />☛ Bảo hành 30 ngày',
            subImage: igCmt,
        },
    ]
    },
    'tang-comment-instagram': {
        title: 'Tăng Comment Instagram',
        description: '☛ Dịch vụ tăng số lượng bình luận trên Instagram<br />☛ Tăng cường tương tác với người theo dõi.',
        image: igCmt, 
        otherSubService: [
            {
                subServer: 'Server CMT Việt',
                subName: 'VIỆT - LOẠI 1',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: Tùy chỉnh<br />☛ Nội dung Cmt: Tùy chỉnh<br />☛ Tối đa: 10.000 lượt <br />☛ Bảo hành 7 ngày',
                subImage: igCmt,
            },
            {
                subServer: 'Server CMT Việt',
                subName: 'VIỆT - LOẠI 2',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: Tùy chỉnh<br />☛ Nội dung Cmt: Tùy chỉnh<br />☛ Tối đa: 10.000 lượt <br />☛ Không bảo hành',
                subImage: igCmt,
            },
            {
                subServer: 'Server CMT Việt',
                subName: 'VIỆT - LOẠI 3',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: Tùy chỉnh<br />☛ Nội dung Cmt: Tùy chỉnh<br />☛ Tối đa: 10.000 lượt <br />☛ Không bảo hành',
                subImage: igCmt,
            },
        ]
    },
    'tang-view-video-instagram': {
        title: 'Tăng View Video Instagram (Reels)',
        description: '☛ Dịch vụ tăng lượt xem cho video Reels trên Instagram<br />☛ Giúp nội dung của bạn lan tỏa rộng rãi.',
        image: igView, 
    },
    // Dịch vụ liên quan đến TikTok
    'tang-follower-tiktok': {
        title: 'Tăng Follower TikTok',
        description: '☛ Dịch vụ tăng số lượng người theo dõi trên TikTok<br />☛ Giúp bạn trở nên nổi bật và thu hút nhiều người xem hơn.',
        image: tiktokService, 
        otherSubService: [
            {
                subServer: 'FOLLOW TIKTOK VIỆT',
                subName: ' LOẠI 1',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: 1000 - 2000 / ngày<br />☛ Tối đa: 10.000 Follow<br />☛ Không bảo hành',
                subImage: igCmt,
            },
            {
                subServer: 'FOLLOW TIKTOK VIỆT',
                subName: ' LOẠI 2',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: Chậm<br />☛ Tối đa: 300 Follow<br />☛  Không bảo hành',
                subImage: igCmt,
            },
        ]
    },
    'tang-tim-video-tiktok': {
        title: 'Tăng Tim Video TikTok',
        description: '☛ Dịch vụ tăng lượt thích cho video trên TikTok<br />☛ Giúp video của bạn được yêu thích và phổ biến hơn.',
        image: tiktokService,
       otherSubService: [
            {
                subServer: 'LIKE TIKTOK VIỆT',
                subName: ' LOẠI 1',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: 3000 / ngày<br />☛ Tối đa: 5.000 Like<br />☛ Không bảo hành',
                subImage: igCmt,
            },
            {
                subServer: 'LIKE TIKTOK VIỆT',
                subName: ' LOẠI 2',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: 5k - 10k / ngày<br />☛ Tối đa: 10.000 Like<br />☛  Không bảo hành',
                subImage: igCmt,
            },
            {
                subServer: 'LIKE TIKTOK NGOẠI',
                subName: ' LOẠI 3',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: 5k - 10k / ngày<br />☛ Tối đa: 100.000 Like<br />☛  Không bảo hành',
                subImage: igCmt,
            },
            {
                subServer: 'LIKE TIKTOK NGOẠI',
                subName: ' LOẠI 4',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: 3k - 20k / ngày<br />☛ Tối đa: 50.000 Like<br />☛  Không bảo hành',
                subImage: igCmt,
            },
        ]
    },
    'tang-view-video-tiktok': {
        title: 'Tăng View Video TikTok',
        description: '☛ Dịch vụ tăng lượt xem cho video trên TikTok<br />☛ Giúp bạn thu hút nhiều lượt xem hơn và tăng độ phổ biến.',
        image: tiktokService, 
        otherSubService: [
            {
                subServer: 'VIEW SErVER VIỆT',
                subName: ' LOẠI 1',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: Nhanh<br />☛ Tối đa: 10 triệu View<br />☛ Bảo hành 7 ngày',
                subImage: igCmt,
            },
            {
                subServer: 'VIEW SErVER VIỆT',
                subName: ' LOẠI 2',
                subPrice: 'Phù hợp với tài khoản bán hàng và xây dựng hình ảnh thương hiệu cá nhân của mình.',
                subOtherDescription: '☛ Tốc độ: Nhanh<br />☛ Mua tối thiểu 100k<br />☛  Tối đa: 100 triệu Viewk<br />☛ Không bảo hành',
                subImage: igCmt,
            },
        ]
    },
    // Dịch vụ liên quan đến YouTube
    'tang-subcribe-kenh-youtube': {
        title: 'Tăng Subcribe Kênh YouTube',
        description: '☛ Dịch vụ tăng số lượng người đăng ký kênh YouTube của bạn<br />☛ Giúp kênh của bạn phát triển nhanh chóng.',
        image: ytSub,
        otherSubYTService: [
        {
            subYTName: 'Việt - Loại 1',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        },
    ]
    },
    'tang-view-video-youtube': {
        title: 'Tăng View Video YouTube',
        description: '☛ Dịch vụ tăng lượt xem cho video trên YouTube<br />☛ Giúp video của bạn tiếp cận nhiều người hơn.',
        image: ytView, // Thay thế bằng hình ảnh tương ứng nếu có
      otherSubYTService: [
        {
            subYTName: 'Tăng View Youtube',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        },
        {
            subYTName: 'Tăng View 4.000H',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        },
        {
            subYTName: 'Tăng View Short',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        }
    ]
    },
    'tang-like-video-youtube': {
        title: 'Tăng Like Video YouTube',
        description: '☛ Dịch vụ tăng lượt thích cho video trên YouTube<br />☛ Giúp video của bạn được yêu thích và đánh giá cao.',
        image: ytLike, // Thay thế bằng hình ảnh tương ứng nếu có
       otherSubYTService: [
        {
            subYTName: 'Tăng Like Bài Viết',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        },
        {
            subYTName: 'Tăng Like Short',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        }
    ]
    },
    'tang-comment-video-youtube': {
        title: 'Tăng Comment Video YouTube',
        description: '☛ Dịch vụ tăng số lượng bình luận cho video trên YouTube<br />☛ Giúp video của bạn tương tác tốt hơn với người xem.',
        image: ytCmt, // Thay thế bằng hình ảnh tương ứng nếu có
       otherSubYTService: [
        {
            subYTName: 'Tăng Comments Youtube',
            subYTOtherDescription: '☛ Tính năng 1<br />☛ Tính năng 2<br />☛ Tính năng 3',
            subYTImage: igCmt,
        },

    ]
    },
        // Thêm mô tả cho các dịch vụ khác ở đây
    };
     // Đặt gradient màu nền và màu nút theo dịch vụ
     let gradientClass = 'bg-gradient-to-r from-gray-200 to-white'; // Default gradient
     let buttonClass = 'bg-[#007bff] hover:bg-[#0056b3]';
     let textClass = 'text-white';
    
     let textDesc = 'text-black';
 
     if (serviceName === 'tang-follower-instagram'
        || serviceName === 'tang-tim-instagram'
        || serviceName === 'tang-comment-instagram'
        || serviceName === 'tang-view-video-instagram'
        
     ) {
         gradientClass = 'bg-gradient-to-r from-[#C13584] via-[#E1306C] to-[#F56040] via-[#FCAF45]';
         buttonClass = 'bg-pink-500 hover:bg-pink-700';
         textClass = 'text-black';
       

     } else if (serviceName === 'tang-follower-tiktok'
         || serviceName === 'tang-tim-video-tiktok'
          || serviceName === 'tang-view-video-tiktok'
          
     ) {
         gradientClass = 'bg-gradient-to-r from-[#ff0050] via-[#00f2ea] to-[#000000]';
         buttonClass = 'bg-black hover:bg-gray-700';

     } else if (serviceName === 'tang-subcribe-kenh-youtube'
         || serviceName === 'tang-view-video-youtube'
          || serviceName === 'tang-like-video-youtube'
           || serviceName === 'tang-comment-video-youtube'
     ) {
         gradientClass = 'bg-gradient-to-r from-[#FF0000] to-[#282828]';
         buttonClass = 'bg-red-500 hover:bg-red-700';
         textDesc = 'text-black';
         

     } else if (serviceName === 'len-tich-xanh-facebook' 
        || serviceName === 'lay-lai-facebook'
        || serviceName === 'lay-lai-facebook-bi-hack'
        || serviceName === 'facebook-bi-khoa'
        || serviceName === 'lay-lai-facebook-mat-mat-khau'
        || serviceName === 'lay-ma-dang-nhap-facebook'
        || serviceName === 'bao-mat-facebook'
        || serviceName === 'tang-view-khi-live'
        || serviceName === 'tang-like'
        || serviceName === 'tang-follower-like-fanpage'
        || serviceName === 'tang-view-video'
        || serviceName === 'tang-comment'
        || serviceName === 'tang-share'
        || serviceName === 'tang-danh-gia'
        || serviceName === 'xay-dung-fanpage'
        || serviceName === 'mua-ban-group'
        || serviceName === 'mua-ban-fanpage'
        || serviceName === 'quang-cao-facebook-ads'
        || serviceName === 'quan-tri-fanpage'
        || serviceName === 'lay-lai-fanpage-group'
        || serviceName === 'bao-ve-ban-quyen'
        || serviceName === 'loc-ban-be-khong-tuong-tac'
        || serviceName === 'xu-li-van-de-facebook'
        || serviceName === 'vo-hieu-hoa-facebook') {
         gradientClass = 'bg-gradient-to-r from-[#55ead4] via-blue-300 to-white';
         buttonClass = 'bg-[#007bff] hover:bg-[#0056b3]';
         textClass = 'text-black';
     }
     // Item liên hệ
     const [visibleDialog, setVisibleDialog] = useState(null);
     const [isAnimating, setIsAnimating] = useState(false);
     // Toggle trạng thái hiển thị của các nút
    
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
     
     
    // Lấy dữ liệu mô tả dịch vụ dựa trên serviceName từ URL
    const service = serviceDescriptions[serviceName];
    // Chỉ xử lý định dạng mô tả nếu service tồn tại
    const formattedDescription = service ? service.description.replace(/\n/g, '<br />') : '';
   
    // Đảm bảo rằng `service` tồn tại trước khi truy cập thuộc tính
if (!service) {
    return <div>Service not found</div>;
}
    // Item hỗ trợ
    
    const scrollToSection = () => {
        scroller.scrollTo('serviceDetails', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };
    return (
        <div className="">

<div className={`service-detail flex justify-center items-center p-[40px] ${gradientClass} h-[100vh]`}>
            {service ? (
                <div className="service-detail-content flex flex-row items-center max-w-[1200px] p-[40px] rounded-[10px] shadow-xl">
                    <div className="service-text flex-1 mr-[40px]">
                        <h1 className={`${textClass} ${textDesc} service-title text-[2.5rem] text-[#333] mb-[20px] font-bold`}>{service.title}</h1>
                        <p 
                            className={`service-description ${textClass} text-[1.2rem] text-[#666] leading-[1.6] mb-[16px] w-[400px] text-justify mr-[100px]`} 
                            dangerouslySetInnerHTML={{ __html: formattedDescription }}
                        />
                        <button 
                            className={`service-button text-[#fff] py-2.5 px-5 border-none rounded-[23px] text-[1.1rem] font-bold ${buttonClass}`}
                            onClick={scrollToSection} // Scrolls to the section when clicked
                        >
                            Chi Tiết Dịch Vụ
                        </button>
                    </div>
                    <div className="service-image w-[300px] h-[auto]">
                        <img src={service.image} alt={service.title} className='object-cover rounded-xl' />
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Dịch vụ không tồn tại</h1>
                    <p>Xin lỗi, chúng tôi không tìm thấy dịch vụ bạn yêu cầu.</p>
                </div>
            )}
           

           

            
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


        <div className="bg-gray-50 bg-custom-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
          <div className="flex flex-col items-center">
            <img
              src={customerCare}
              alt="Hỗ Trợ Nhiệt Tình"
              className="w-16 h-16 mb-4 shake-icon"
            />
            <h3 className="text-lg font-bold mb-2">HỖ TRỢ NHIỆT TÌNH</h3>
            <p className="text-gray-600 text-justify">
              Chúng tôi luôn luôn cố gắng để khách hàng hài lòng nhất.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={speedCare}
              alt="Hỗ Trợ Tốc Độ"
              className="w-20 h-16 mb-4 shake-icon"
            />
            <h3 className="text-lg font-bold mb-2">HỖ TRỢ TỐC ĐỘ</h3>
            <p className="text-gray-600 text-justify">
              Trợ giúp bạn lấy lại Facebook cá nhân của mình chỉ trong thời gian
              ngắn.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={secuRed}
              alt="Bảo Mật Tuyệt Đối"
              className="w-16 h-16 mb-4 shake-icon"
            />
            <h3 className="text-lg font-bold mb-2">BẢO MẬT TUYỆT ĐỐI</h3>
            <p className="text-gray-600 text-justify">
              Khách hàng sẽ được bảo hành và hỗ trợ bảo mật khi lấy được
              Facebook.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={shoppingCart}
              alt="Thanh Toán Sau"
              className="w-32 h-16 mb-4 shake-icon"
            />
            <h3 className="text-lg font-bold mb-2">THANH TOÁN SAU</h3>
            <p className="text-gray-600 text-justify">
              Khi đến với dịch vụ chúng tôi sẽ được hỗ trợ làm xong thì mới phải
              thanh toán.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <Slider {...settings} className='mt-[100px] rounded-xl'>
      <div>
        <img
          className="w-full h-[582px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slider 1"
        />
      </div>
      <div>
        <img
          className="w-full h-[582px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slider 2"
        />
      </div>
      <div>
        <img
          className="w-full h-[582px] object-cover rounded-xl"
          src="https://plus.unsplash.com/premium_photo-1684341008385-31d2eb4f3afe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slider 3"
        />
      </div>
    </Slider>



      </div>
    </div>
       {/* Service Details Section */}
       <Element name="serviceDetails">
                {service && service.subServices && (
                    <div className="max-w-7xl mx-auto px-4 py-12 text-center p-10">
                        <h2 className="text-2xl font-bold mb-6 text-center">Chi Tiết Dịch Vụ</h2>
                        <span className="font-bold text-3xl block mb-10">
                            Dịch vụ 
                            <span className="gradient-text font-bold"> {service.title}.</span>
                        </span>
                        <div 
                            className={`grid gap-10 items-center justify-center ${
                                service.subServices.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : 
                                service.subServices.length === 2 ? 'grid-cols-2 max-w-3xl mx-auto' : 
                                'grid-cols-1 md:grid-cols-3'
                            }`}
                        >
                            {service.subServices.map((subService, index) => (
                                <div key={index} className="bg-gray-100 rounded-lg h-full w-[400px] shadow-md text-center mt-10 max-w-xs mx-auto transform transition-transform hover:scale-105">
                                    <div className="bg-[#58efd8] text-white text-lg p-4 font-bold py-2 rounded-t-lg">
                                        <span className="text-black">{service.title}</span>
                                    </div>
                                    {subService.image && (
                                        <img src={subService.image} alt={subService.subTitle} className="w-40 h-40 mx-auto my-4 object-cover rounded-md" />
                                    )}
                                    <h3 className="text-lg font-semibold mb-4 px-6 mt-[30px]">{subService.subTitle}</h3>
                                    <h4 className="text-xl font-bold text-blue-600 mb-4 px-6">{subService.price}</h4>
                                    <p className="text-sm text-gray-700 mb-4 px-6 text-justify" dangerouslySetInnerHTML={{ __html: subService.description }} />
                                    <button className="font-bold bg-blue-500 text-white py-2 px-4 rounded-full mt-[30px]" onClick={() => window.open('https://zalo.me/0392778939', '_blank')}>Liên Hệ Ngay</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {service.otherSubService && service.otherSubService.length > 0 ? (
                    <div className="other-sub-services mb-12 text-center p-10">
                        <h2 className="text-2xl font-bold mb-6 text-center">Chi Tiết Dịch Vụ</h2>
                        <span className="text-3xl mb-[30px]">
                            Dịch vụ
                            <span className="gradient-text font-bold"> {service.title}.</span>
                        </span>
                        <div 
                            className={`grid gap-10 max-w-[1000px] mx-auto mt-12 items-center ${
                                service.otherSubService.length === 1 ? 'justify-center' : ''} ${
                                service.otherSubService.length === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-3'
                            }`}
                        > 
                            {service.otherSubService.map((otherSub, index) => (
                                <div key={index} className="bg-white border border-gray-200 h-[400px] rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
                                    <div className="bg-blue-600 text-white text-sm font-bold p-2 rounded-t-lg uppercase">
                                        {otherSub.subServer}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 mt-[20px]">{otherSub.subName}</h3>
                                    <p className="text-gray-700 text-xs mb-4 px-5">{otherSub.subPrice}</p>
                                    <p className="text-gray-600 mb-6 leading-10 text-justify  ml-[50px]" dangerouslySetInnerHTML={{ __html: otherSub.subOtherDescription }}></p>
                                    <button className="bg-[#eeae47] shadow-lg text-white py-2 px-6 mb-[20px] rounded-full font-bold" onClick={() => window.open('https://zalo.me/0392778939', '_blank')}>Mua Ngay</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                {service.otherSubYTService && service.otherSubYTService.length > 0 && (
                    <div className="other-sub-yt-services mb-12 text-center p-10">
                        <h2 className="text-2xl font-bold mb-6 text-center">Chi Tiết Dịch Vụ</h2>
                        <span className="text-3xl mb-[30px]">
                            Dịch vụ
                            <span className="gradient-text font-bold"> {service.title}.</span>
                        </span>
                        <div 
                            className={`flex flex-wrap gap-10 max-w-[1000px] mt-12 m-auto items-center justify-center ${
                                service.otherSubYTService.length === 1 ? 'justify-center' : ''} ${
                                service.otherSubYTService.length === 2 ? 'justify-around' : 'justify-between'
                            }`}
                        >
                            {service.otherSubYTService.map((subYTService, index) => (
                                <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md mx-auto text-center flex-1 max-w-[300px] transform transition-transform hover:scale-105">
                                    <h3 className="text-lg font-semibold mb-2">{subYTService.subYTName}</h3>
                                    <span className="text-[#ff110d] font-bold">Liên hệ để báo giá</span>
                                    <p className="text-gray-600 mb-2">{subYTService.subYTPrice}</p>
                                    <p className="text-gray-600 leading-10 text-justify ml-[75px]" dangerouslySetInnerHTML={{ __html: subYTService.subYTOtherDescription }}></p>
                                    <button className="bg-[#ff110d] text-white py-2 px-4 rounded-full font-bold mt-[40px]" onClick={() => window.open('https://zalo.me/0392778939', '_blank')}>Mua Ngay</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Element>
        </div>
           
        
        
    );
};

export default ServiceDetail;
