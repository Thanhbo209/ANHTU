import React from 'react';
import AvatarFB from '../picture/76186352_436413310602672_2252516549237669888_n.jpg';
import FBContact from '../picture/Facebook_Logo_2023 (1).png';
import ZaLoContact from '../picture/Icon_of_Zalo.svg.webp';
import PhoneContact from '../picture/2934394.png';

function Contact() {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-cover bg- md:max-width-[795px]"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-white text-center p-4">
        <div className="w-40 border-[3px] border-solid rounded-full border-red-400 m-auto mb-5">
          <img src={AvatarFB} alt="Avatar" className="rounded-full" />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl p-3 font-bold">LỤC VĂN TỨ</h1>
          <h3>CHUYÊN CÁC DỊCH VỤ VỀ <span>MẠNG XÃ HỘI</span></h3>
        </div>

        {/* Responsive Structure */}
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0">
          {/* First Div */}
          <div className="w-80 bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-30">
            <img src={FBContact} alt="Facebook" className="w-10 m-auto mb-2" />
            <h2 className="text-lg font-bold mb-2">FaceBook</h2>
            <p className="text-sm hover:underline">
              <a href="https://www.facebook.com/LVTMMO" target="_blank" rel="noopener noreferrer">
                → Nhấp vào đây
              </a>
            </p>
          </div>

          {/* Second Div */}
          <div className="w-80 bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-30">
            <img src={ZaLoContact} alt="Zalo" className="w-10 m-auto mb-2" />
            <h2 className="text-lg font-bold mb-2">Zalo</h2>
            <p className="text-sm hover:underline">
              <a href="https://zalo.me/0392778939" target="_blank" rel="noopener noreferrer">
                → Nhấp vào đây
              </a>
            </p>
          </div>

          {/* Third Div */}
          <div className="w-80 bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-30">
            <img src={PhoneContact} alt="Phone" className="w-10 m-auto mb-2" />
            <h2 className="text-lg font-bold mb-2">Liên Hệ SĐT</h2>
            <p className="text-2xl font-extrabold tracking-widest text-yellow-400">0392778939</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
