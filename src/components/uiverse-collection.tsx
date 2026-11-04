import React from "react";

// 23 Authentic Uiverse Components Integrated with 100% Strict Scoped CSS (Zero Leakage)


export interface UivAquaLiquidBtnProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivAquaLiquidBtn: React.FC<UivAquaLiquidBtnProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_0 .button {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  outline: none;
  box-shadow: 0 6px 7px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
  background-image: linear-gradient(
    to top,
    rgba(206, 255, 255, 0.75),
    rgba(216, 255, 244, 0.65)
  );
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 0%;
}
.aq_wrap_0 .button:hover {
  box-shadow: 0 7px 9px rgba(0, 0, 0, 0.15),
    inset 0 3px 5px rgba(255, 255, 255, 0.6);
}
.aq_wrap_0 @keyframes fillButtonAndPress {
  0% {
    background-size: 100% 0%;
    transform: translateY(0);
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
  100% {
    background-size: 100% 100%;
    transform: translateY(2px);
    border: 1px solid rgba(205, 235, 218, 0.6);
  }
}

.button:active {
  animation: fillButtonAndPress 0.4s ease forwards;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.7);
}
.aq_wrap_0 .font {
  font-family: sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}
      `}</style>
      <div className="aq_wrap_0" dangerouslySetInnerHTML={{ __html: `<button className="button font">Hold Me</button>` }} />
    </div>
  );
};


export interface UivCyanGlowBtnProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivCyanGlowBtn: React.FC<UivCyanGlowBtnProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`

      `}</style>
      <div className="aq_wrap_1" dangerouslySetInnerHTML={{ __html: `<!-- From Deep Sea.io by 0x3ther  - Tags: icon, animation, button, navigation, hover effect, tailwindbutton, tailwindcss -->
<div className="flex items-center gap-2">
  <button
    className="relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-[#F5F5F5] h-9 rounded-md px-3 group"
  >
    <svg
      className="lucide lucide-arrow-left"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 19-7-7 7-7"></path>
      <path d="M19 12H5"></path>
    </svg>
    <span className="origin-left scale-0 transition-transform group-hover:scale-100"
      >Back</span
    >
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#06B6D4"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      ></path>
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      ></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
    Dashboard
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#60A5FA"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      ></path>
      <path d="M18 14h-8"></path>
      <path d="M15 18h-5"></path>
      <path d="M10 6h8v4h-8V6Z"></path>
    </svg>
    Articles
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#FACC14"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
      ></path>
      <path d="M15 3v6h6"></path>
    </svg>
    Notes
  </button>
  <button
    className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C] h-9 rounded-md px-3"
  >
    <svg
      className="lucide lucide-star text-orange-400 dark:text-orange-600"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#FB923C"
      fill="#FB923C"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
    Reviews
  </button>
</div>` }} />
    </div>
  );
};


export interface UivAbyssalGlassBtnProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivAbyssalGlassBtn: React.FC<UivAbyssalGlassBtnProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_2 button {
  cursor: pointer;
  padding: 1em 2em;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
  background: rgba(60, 73, 203, 0.35);
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(14.5px);
}
.aq_wrap_2 button:hover {
  box-shadow: 0px 0 32px 0 rgba(31, 38, 135, 0.37),
    0px 0 32px 0 rgba(31, 38, 135, 0.37), 0 0 42px 0px rgba(31, 38, 135, 0.37),
    0 0 52px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.58);
}
.aq_wrap_2 button, .aq_wrap_2 button::before {
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.37);
}
.aq_wrap_2 button::before {
  content: "Button";
  position: absolute;
  background: blue;
  width: 90%;
  height: 80%;
  background: rgba(26, 18, 241, 0.25);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.4s;
}
.aq_wrap_2 button:hover::before {
  background: rgba(51, 57, 236, 0.4);
  box-shadow: 1px 1px 2px 0 rgba(31, 38, 135, 0.37),
    2px 2px 2px 0 rgba(31, 38, 135, 0.37), 0 0px 32px 0 rgba(31, 38, 135, 0.37),
    0 0px 32px 1px rgba(31, 38, 135, 0.37), 0 0px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.aq_wrap_2 button:active::before {
  transform: scale(0.67);
}
      `}</style>
      <div className="aq_wrap_2" dangerouslySetInnerHTML={{ __html: `<button className="button">Button</button>` }} />
    </div>
  );
};


export interface UivSeahorseNavPillProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivSeahorseNavPill: React.FC<UivSeahorseNavPillProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_3 .button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(66, 13, 240);
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  outline: 3px solid #270092;
  cursor: pointer;
  transition: ease-out .5s;
}
.aq_wrap_3 .button:hover {
  width: 180px;
  height: 60px;
  outline-offset: 4px;
  transform: scale(1.3) rotate(2deg);
  background-color: blue;
  box-shadow: 5px 20px #cdcbd4
}
.aq_wrap_3 .icon {
  color: #270092;
  margin-right: 5px;
}
.aq_wrap_3 .share {
  margin-left: 5px;
  color: #fff;
}
      `}</style>
      <div className="aq_wrap_3" dangerouslySetInnerHTML={{ __html: `<button className="button"> 
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon"> 
  <path fill="#fff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path> 
  </svg> 
  <span className="share">SHARE </span> 
  </button>` }} />
    </div>
  );
};


export interface UivBiolumBeamBtnProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivBiolumBeamBtn: React.FC<UivBiolumBeamBtnProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_4 .btn {
  height: 3.5rem;
  width: 13.2rem;
  border-radius: 5px;
  border: 5px solid rgb(255, 255, 255);
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
  animation: flickering 2s linear infinite both;
  text-transform: uppercase;
  background-color: rgb(83, 82, 82);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
}


@keyframes flickering {
  0%,
  100% {
    opacity: 1;
  }
.aq_wrap_4 41.99% {
  opacity: 1;
}
.aq_wrap_4 42% {
  opacity: 0;
}
.aq_wrap_4 43% {
  opacity: 0;
}
.aq_wrap_4 43.01% {
  opacity: 1;
}
.aq_wrap_4 47.99% {
  opacity: 1;
}
.aq_wrap_4 48% {
  opacity: 0;
}
.aq_wrap_4 49% {
  opacity: 0;
}
.aq_wrap_4 49.01% {
  opacity: 1;
}
.aq_wrap_4 .text {
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
}
.aq_wrap_4 .btn:hover {
  background-color: black;
  border-radius: 0;
}
      `}</style>
      <div className="aq_wrap_4" dangerouslySetInnerHTML={{ __html: `<button className="btn">
  <span className="text">Button</span>
</button>` }} />
    </div>
  );
};


export interface UivExpeditionCtaBtnProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivExpeditionCtaBtn: React.FC<UivExpeditionCtaBtnProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_5 .btn {
  padding: 0.9em 1.6em;
 border: none;
 outline: none;
 color: #FFF;
 font-family: inherit;
 font-weight: 500;
 font-size: 17px;
 cursor: pointer;
 position: relative;
 z-index: 0;
 border-radius: 12px;
}
.aq_wrap_5 .btn::after {
  content: "";
 z-index: -1;
 position: absolute;
 width: 100%;
 height: 100%;
 background-color: rgb(46, 46, 46);
 left: 0;
 top: 0;
 border-radius: 10px;
}
.aq_wrap_5 .btn::before {
  content: "";
 background: linear-gradient(
    45deg,
    #FF0000, #002BFF, #FF00C8, #002BFF,
      #FF0000, #002BFF, #FF00C8, #002BFF
);
 position: absolute;
 top: -2px;
 left: -2px;
 background-size: 600%;
 z-index: -1;
 width: calc(100% + 4px);
 height: calc(100% + 4px);
 filter: blur(8px);
 animation: glowing 20s linear infinite;
 transition: opacity .3s ease-in-out;
 border-radius: 10px;
 opacity: 0;
}
.aq_wrap_5 @keyframes glowing {
 0% {
  background-position: 0 0;
 }

 50% {
  background-position: 400% 0;
 }

 100% {
  background-position: 0 0;
 }
}


.btn:hover::before {
  opacity: 1;
}
.aq_wrap_5 .btn:active:after {
  background: transparent;
}
.aq_wrap_5 .btn:active {
  color: #000;
 font-weight: bold;
}
      `}</style>
      <div className="aq_wrap_5" dangerouslySetInnerHTML={{ __html: `<button className="btn">Hover Me!</button>` }} />
    </div>
  );
};


export interface UivSonarAudioToggleProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivSonarAudioToggle: React.FC<UivSonarAudioToggleProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_6 .switch {
  display: inline-block;
  margin: 10em 2em;
  position: relative;
  border-radius: 3.5em;
  -webkit-box-shadow: 0 0 0.5em rgba(2,255,255,0.2);
  -moz-box-shadow: 0 0 0.5em rgba(255,255,255,0.2);
  box-shadow: 0 0 0.5em rgba(255,255,255,0.2);
}
.aq_wrap_6 .switch label {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.aq_wrap_6 .switch input {
  display: none;
}
.aq_wrap_6 .switch span {
  display: block;
  -webkit-transition: top 0.2s;
  -moz-transition: top 0.2s;
  -ms-transition: top 0.2s;
  -o-transition: top 0.2s;
  transition: top 0.2s;
}
.aq_wrap_6 .switch-border1 {
  border: 0.1em solid #000;
  border-radius: 3.5em;
  -webkit-box-shadow: 0 0.2em rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 0 0.2em rgba(255, 255, 255, 0.2);
  box-shadow: 0 0.2em rgba(255, 255, 255, 0.2);
}
.aq_wrap_6 .switch-border2 {
  width: 6.6em;
  height: 12.6em;
  position: relative;
  border: 0.1em solid #323232;
  background-image: -webkit-gradient(linear, left top, right top, from(#2D2D2D), color-stop(0.5, #4B4B4B), to(#2D2D2D));
  background-image: -webkit-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -moz-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -ms-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -o-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: linear-gradient(to right, #2D2D2D, #4B4B4B, #2D2D2D);
  border-radius: 3.4em;
}
.aq_wrap_6 .switch-border2:before, .aq_wrap_6 .switch-border2:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: .3;
  border-radius: 3.4em;
}
.aq_wrap_6 .switch-border2:before {
  background: -webkit-gradient(linear, left top, left bottom, from(#000), to(rgba(0,0,0,0)));
  background: -webkit-linear-gradient(#000, rgba(0,0,0,0));
  background: -moz-linear-gradient(#000, rgba(0,0,0,0));
  background: -ms-linear-gradient(#000, rgba(0,0,0,0));
  background: -o-linear-gradient(#000, rgba(0,0,0,0));
  background: linear-gradient(#000, rgba(0,0,0,0));
}
.aq_wrap_6 .switch-border2:after {
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(#000));
  background: -webkit-linear-gradient(rgba(0,0,0,0), #000);
  background: -moz-linear-gradient(rgba(0,0,0,0), #000);
  background: -ms-linear-gradient(rgba(0,0,0,0), #000);
  background: -o-linear-gradient(rgba(0,0,0,0), #000);
  background: linear-gradient(rgba(0,0,0,0), #000);
}
.aq_wrap_6 .switch-top {
  width: 100%;
  height: 84%;
  position: absolute;
  top: 8%;
  left: 0;
  z-index: 1;
  background-image: -webkit-gradient(linear, left top, right top, from(#2D2D2D), color-stop(0.5, #4B4B4B), to(#2D2D2D));
  background-image: -webkit-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -moz-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -ms-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: -o-linear-gradient(left, #2D2D2D, #4B4B4B, #2D2D2D);
  background-image: linear-gradient(to right, #2D2D2D, #4B4B4B, #2D2D2D);
  border-radius: 3.4em;
}
.aq_wrap_6 .switch-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 3.4em;
  -webkit-box-shadow: 0 0 2em black inset;
  -moz-box-shadow: 0 0 2em black inset;
  box-shadow: 0 0 2em black inset;
}
.aq_wrap_6 .switch-handle-left, .aq_wrap_6 .switch-handle-right {
  content: '';
  display: block;
  width: 3.6em;
  height: 0;
  position: absolute;
  top: 6.6em;
  z-index: 2;
  border-bottom: 4.5em solid #111;
  border-left: 0.7em solid transparent;
  border-right: 0.7em solid transparent;
  border-radius: 0;
}
.aq_wrap_6 .switch-handle-left {
  left: 0.8em;
}
.aq_wrap_6 .switch-handle-right {
  right: 0.8em;
}
.aq_wrap_6 .switch-handle {
  width: 3.6em;
  height: 4.5em;
  position: absolute;
  top: 6.6em;
  left: 1.5em;
  z-index: 3;
  background: #333;
  background-image: -webkit-gradient(linear, left top, right top, from(#111), color-stop(0.4, #777), color-stop(0.5, #888), color-stop(0.6, #777), to(#111));
  background-image: -webkit-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -moz-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -ms-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -o-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: linear-gradient(to right, #111, #777 40%, #888, #777 60%, #111);
  border-radius: 0;
}
.aq_wrap_6 .switch-handle-top {
  width: 5em;
  height: 5em;
  position: absolute;
  top: 8.5em;
  left: 0.8em;
  z-index: 4;
  background-color: #555;
  background-image: -webkit-gradient(linear, left top, right top, from(#5F5F5F), to(#878787));
  background-image: -webkit-linear-gradient(left, #5F5F5F, #878787);
  background-image: -moz-linear-gradient(left, #5F5F5F, #878787);
  background-image: -ms-linear-gradient(left, #5F5F5F, #878787);
  background-image: -o-linear-gradient(left, #5F5F5F, #878787);
  background-image: linear-gradient(to right, #5F5F5F, #878787);
  border-top: 0.2em solid #AEB2B3;
  border-radius: 2.5em;
}
.aq_wrap_6 .switch-handle-bottom {
  width: 3.6em;
  height: 3.6em;
  position: absolute;
  top: 4.7em;
  left: 1.5em;
  z-index: 3;
  background: #333;
  background-image: -webkit-gradient(linear, left top, right top, from(#111), color-stop(0.4, #777), color-stop(0.5, #888), color-stop(0.6, #777), to(#111));
  background-image: -webkit-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -moz-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -ms-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: -o-linear-gradient(left, #111, #777 40%, #888, #777 60%, #111);
  background-image: linear-gradient(to right, #111, #777 40%, #888, #777 60%, #111);
  border-top: 0.2em solid #141414;
  border-radius: 1.8em;
}
.aq_wrap_6 .switch-handle-base {
  width: 4.2em;
  height: 4.2em;
  position: absolute;
  top: 3.8em;
  left: 1.2em;
  z-index: 2;
  border-top: 0.2em solid rgba(255,255,255,0.35);
  border-radius: 2.1em;
  -webkit-box-shadow: 0 0 0.5em rgba(0,0,0,0.8) inset;
  -moz-box-shadow: 0 0 0.5em rgba(0,0,0,0.8) inset;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.8) inset;
}
.aq_wrap_6 .switch-led {
  position: absolute;
  left: 2em;
  border-radius: 1.4em;
}
.aq_wrap_6 .switch-led-border {
  border: 0.2em solid black;
  border-radius: 1.3em;
}
.aq_wrap_6 .switch-led-light {
  border-radius: 1.1em;
  -webkit-box-shadow: 0 0 0.5em rgba(255,255,255,0.5) inset;
  -moz-box-shadow: 0 0 0.5em rgba(255,255,255,0.5) inset;
  box-shadow: 0 0 0.5em rgba(255,255,255,0.5) inset;
}
.aq_wrap_6 .switch-led-glow {
  width: 2em;
  height: 2em;
  position: relative;
  border-radius: 1em;
}
.aq_wrap_6 .switch-led-glow:before {
  content: '';
  display: block;
  width: 0.6em;
  height: 0.6em;
  position: absolute;
  top: 0.3em;
  left: 0.7em;
  background: rgba(255,255,255,0.2);
  border-radius: 0.3em;
  -webkit-box-shadow: 0 0 1em rgba(255,255,255,0.75);
  -moz-box-shadow: 0 0 1em rgba(255,255,255,0.75);
  box-shadow: 0 0 1em rgba(255,255,255,0.75);
}
.aq_wrap_6 .switch-led-glow:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
  filter: alpha(opacity=20);
  border: 1em solid #fff;
  border-color: transparent #fff transparent #fff;
  border-radius: 1em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.aq_wrap_6 .switch-led:after {
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  color: #666;
  font-family: arial, verdana, sans-serif;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0.1em rgba(0,0,0,0.7);
}
.aq_wrap_6 .switch-led-green:after {
  content: 'ON';
  top: -1.8em;
}
.aq_wrap_6 .switch-led-red:after {
  content: 'OFF';
  bottom: -1.8em;
}
.aq_wrap_6 .switch-led-green {
  top: -5em;
  border-top: 0.1em solid rgba(0,161,75,0.5);
  border-bottom: 0.1em solid rgba(255,255,255,0.25);
}
.aq_wrap_6 .switch-led-green .switch-led-light {
  background: rgb(0,161,75);
  border: 0.1em solid rgb(0,104,56);
}
.aq_wrap_6 .switch-led-red {
  bottom: -5em;
  border-top: 0.1em solid rgba(237,28,36,0.2);
  border-bottom: 0.1em solid rgba(255,255,255,0.25);
  -webkit-box-shadow: 0 0 3em rgb(237,28,36);
  -moz-box-shadow: 0 0 3em rgb(237,28,36);
  box-shadow: 0 0 3em rgb(237,28,36);
}
.aq_wrap_6 .switch-led-red .switch-led-light {
  background: rgb(237,28,36);
  border: 0.1em solid rgb(161,30,45);
}
.aq_wrap_6 .switch-led-red .switch-led-glow {
  background: #fff;
  background: rgba(255, 255, 255, 0.3);
  filter: alpha(opacity=30);
}
.aq_wrap_6 .switch input:checked~.switch-handle-left, .aq_wrap_6 .switch input:checked~.switch-handle-right {
  top: 1.5em;
  border-bottom: 0;
  border-top: 4.5em solid #111;
}
.aq_wrap_6 .switch input:checked~.switch-handle {
  top: 1.5em;
}
.aq_wrap_6 .switch input:checked~.switch-handle-top {
  top: -1em;
  border-top: 0;
  border-bottom: 0.2em solid #AEB2B3;
}
.aq_wrap_6 .switch input:checked~.switch-handle-bottom {
  top: 4.2em;
  border-top: 0;
  border-bottom: 0.2em solid #141414;
}
.aq_wrap_6 .switch input:checked~.switch-handle-base {
  top: 4.5em;
  border-top: 0;
  border-bottom: 0.2em solid rgba(255,255,255,0.35);
}
.aq_wrap_6 .switch input:checked~.switch-led-green {
  -webkit-box-shadow: 0 0 3em rgb(0,161,75);
  -moz-box-shadow: 0 0 3em rgb(0,161,75);
  box-shadow: 0 0 3em rgb(0,161,75);
}
.aq_wrap_6 .switch input:checked~.switch-led-green .switch-led-glow {
  background: #fff;
  background: rgba(255, 255, 255, 0.4);
  filter: alpha(opacity=40);
}
.aq_wrap_6 .switch input:checked~.switch-led-red {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.aq_wrap_6 .switch input:checked~.switch-led-red .switch-led-glow {
  background: rgba(255, 255, 255, 0);
  filter: alpha(opacity=0);
}
.aq_wrap_6 #switchwhite {
  visibility: hidden;
  clip: rect(0 0 0 0);
  position: absolute;
  left: 9999px;
}
.aq_wrap_6 .switchwhite {
  display: block;
  width: 130px;
  height: 60px;
  margin: 70px auto;
  position: relative;
  background: #ced8da;
 
  background: -moz-linear-gradient(left,  #ced8da 0%, #d8e0e3 29%, #ccd4d7 34%, #d4dcdf 62%, #fff9f4 68%, #e1e9ec 74%, #b7bfc2 100%);
 
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#ced8da), color-stop(29%,#d8e0e3), color-stop(34%,#ccd4d7), color-stop(62%,#d4dcdf), color-stop(68%,#fff9f4), color-stop(74%,#e1e9ec), color-stop(100%,#b7bfc2));
 
  background: -webkit-linear-gradient(left,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  background: -o-linear-gradient(left,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  background: -ms-linear-gradient(left,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  background: linear-gradient(to right,  #ced8da 0%,#d8e0e3 29%,#ccd4d7 34%,#d4dcdf 62%,#fff9f4 68%,#e1e9ec 74%,#b7bfc2 100%);
 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ced8da', endColorstr='#b7bfc2',GradientType=1 );
 
  transition: all 0.2s ease-out;
  cursor: pointer;
  border-radius: 0.35em;
  box-shadow: 0 0 1px 2px rgba(0,0,0,0.7),
    inset 0 2px 0 rgba(255,255,255,0.6),
    inset 0 -1px 0 1px rgba(0,0,0,0.3),
    0 8px 10px rgba(0,0,0,0.15);
}
.aq_wrap_6 .switchwhite:before {
  display: block;
  position: absolute;
  left: -35px;
  right: -35px;
  top: -25px;
  bottom: -25px;
  z-index: -2;
  content: "";
  border-radius: 0.4em;
  background: #d5dde0;
  background: linear-gradient(#d7dfe2, #bcc7cd);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.6),
    inset 0 -1px 1px 1px rgba(0,0,0,0.3),
    0 0 8px 2px rgba(0,0,0,0.2),
    0 2px 4px 2px rgba(0,0,0,0.1);
  pointer-events: none;
  transition: all 0.2s ease-out;
}
.aq_wrap_6 .switchwhite:after {
  content: "";
  position: absolute;
  right: -25px;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #788b91;
  margin-top: -8px;
  z-index: -1;
  box-shadow: inset 0 -1px 8px rgba(0,0,0,0.7),
    inset 0 -2px 2px rgba(0,0,0,0.2),
    0 1px 0 white,
    0 -1px 0 rgba(0,0,0,0.5),
    -47px 32px 15px 13px rgba(0,0,0,0.25);
}
.aq_wrap_6 #switchwhite:checked ~ .switchwhite {
  background: #b7bfc2;
 
  background: -moz-linear-gradient(left, #b7bfc2 0%, #e1e9ec 26%, #fff9f4 32%, #d4dcdf 38%, #ccd4d7 66%, #d8e0e3 71%, #ced8da 100%);
 
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#b7bfc2), color-stop(26%,#e1e9ec), color-stop(32%,#fff9f4), color-stop(38%,#d4dcdf), color-stop(66%,#ccd4d7), color-stop(71%,#d8e0e3), color-stop(100%,#ced8da));
 
  background: -webkit-linear-gradient(left, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  background: -o-linear-gradient(left, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  background: -ms-linear-gradient(left, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  background: linear-gradient(to right, #b7bfc2 0%,#e1e9ec 26%,#fff9f4 32%,#d4dcdf 38%,#ccd4d7 66%,#d8e0e3 71%,#ced8da 100%);
 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7bfc2', endColorstr='#ced8da',GradientType=1 );
}
.aq_wrap_6 #switchwhite:checked ~ .switchwhite:after {
  background: #b1ffff;
  box-shadow: inset 0 -1px 8px rgba(0,0,0,0.7),
    inset 0 -2px 2px rgba(0,0,0,0.2),
    0 1px 0 white,
    0 -1px 0 rgba(0,0,0,0.5),
    -110px 32px 15px 13px rgba(0,0,0,0.25);
}
      `}</style>
      <div className="aq_wrap_6" dangerouslySetInnerHTML={{ __html: `<span className="switch">
	<span className="switch-border1">
		<span className="switch-border2">
			<input checked="" type="checkbox" id="switch1" />
			<label htmlFor="switch1"></label>
			<span className="switch-top"></span>
			<span className="switch-shadow"></span>
			<span className="switch-handle"></span>
			<span className="switch-handle-left"></span>
			<span className="switch-handle-right"></span>
			<span className="switch-handle-top"></span>
			<span className="switch-handle-bottom"></span>
			<span className="switch-handle-base"></span>
			<span className="switch-led switch-led-green">
				<span className="switch-led-border">
					<span className="switch-led-light">
						<span className="switch-led-glow"></span>
					</span>
				</span>
			</span>
			<span className="switch-led switch-led-red">
				<span className="switch-led-border">
					<span className="switch-led-light">
						<span className="switch-led-glow"></span>
					</span>
				</span>
			</span>
		</span>
	</span>
</span>` }} />
    </div>
  );
};


export interface UivBubblePhysicsSwitchProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivBubblePhysicsSwitch: React.FC<UivBubblePhysicsSwitchProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_7 .checkbox-wrap {
  display: block;
  width: 106px;
  height: 51px;
  position: relative;
  margin: 1px auto;
}
.aq_wrap_7 #slide {
  display: block;
  width: 106px;
  height: 51px;
  margin: 0px;
  padding: 0px;
  position: absolute;
  z-index: 2;
  opacity: 0;
}
.aq_wrap_7 #slide + label {
  display: block;
  width: 105px;
  height: 50px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
}
.aq_wrap_7 #pinkliquid {
  width: 88px;
  height: 36px;
  border-radius: 18px;
  margin: 7px 0 0 9px;
  overflow: hidden;
  background: #b4264a;
  background: linear-gradient(to bottom, #fe0744 0%, #ff0460 50%, #ff0082 100%);
  box-shadow: 0px 0px 9px 0px #ff1e00;
}
.aq_wrap_7 .shine {
  width: 100%;
  background: rgba(255, 255, 255, 0.23);
  margin: 6px 0 4px 0;
  transition: all 300ms ease;
}
.aq_wrap_7 .shine#shine-one {
  height: 12px;
}
.aq_wrap_7 .shine#shine-two {
  height: 3px;
}
.aq_wrap_7 #bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.aq_wrap_7 #bubbles i {
  display: block;
  border-radius: 20px;
  background: #3a3236;
  position: absolute;
  transition: all 600ms ease;
}
.aq_wrap_7 i#a {
  width: 4px;
  height: 4px;
  top: 35px;
  left: 19px;
}
.aq_wrap_7 i#b {
  width: 5px;
  height: 5px;
  top: 24px;
  left: 30px;
}
.aq_wrap_7 i#c {
  width: 3px;
  height: 3px;
  top: 15px;
  left: 26px;
}
.aq_wrap_7 i#d {
  width: 6px;
  height: 6px;
  top: 20px;
  left: 40px;
}
.aq_wrap_7 i#e {
  width: 5px;
  height: 5px;
  top: 30px;
  left: 33px;
}
.aq_wrap_7 i#f {
  width: 5px;
  height: 5px;
  top: 30px;
  right: 33px;
}
.aq_wrap_7 i#g {
  width: 6px;
  height: 6px;
  top: 20px;
  right: 40px;
}
.aq_wrap_7 i#h {
  width: 3px;
  height: 3px;
  top: 15px;
  right: 26px;
}
.aq_wrap_7 i#i {
  width: 4px;
  height: 4px;
  top: 35px;
  right: 19px;
}
.aq_wrap_7 i#j {
  width: 5px;
  height: 5px;
  top: 24px;
  right: 30px;
}
.aq_wrap_7 #circle {
  width: 37px;
  height: 37px;
  border-radius: 19px;
  background: #191919;
  position: absolute;
  top: 7px;
  left: 9px;
  border-right: 1px solid #e3006f;
  box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.24),
    0px 3px 4px 0px #000000;
  transition: all 300ms ease;
}
.aq_wrap_7 #inner-circle {
  width: 31px;
  height: 31px;
  margin: 3px;
  border-radius: 16px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 1, 122, 0.2) 100%
  );
}
.aq_wrap_7 #slide:checked + label #circle {
  left: 60px;
  border-right: 1px solid transparent;
  border-left: 1px solid #e3006f;
  background-color: #c27098;
}
.aq_wrap_7 #slide:checked + label #inner-circle {
  background: linear-gradient(
    to right,
    rgba(255, 1, 122, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.aq_wrap_7 #slide:checked + label i#a {
  width: 4px;
  height: 4px;
  top: 26px;
  left: 19px;
}
.aq_wrap_7 #slide:checked + label i#b {
  width: 5px;
  height: 5px;
  top: 24px;
  left: 30px;
}
.aq_wrap_7 #slide:checked + label i#c {
  width: 3px;
  height: 3px;
  top: 24px;
  left: 26px;
}
.aq_wrap_7 #slide:checked + label i#d {
  width: 6px;
  height: 6px;
  top: 29px;
  left: 40px;
}
.aq_wrap_7 #slide:checked + label i#e {
  width: 5px;
  height: 5px;
  top: 21px;
  left: 33px;
}
.aq_wrap_7 #slide:checked + label i#f {
  width: 5px;
  height: 5px;
  top: 26px;
  right: 33px;
}
.aq_wrap_7 #slide:checked + label i#g {
  width: 6px;
  height: 6px;
  top: 28px;
  right: 40px;
}
.aq_wrap_7 #slide:checked + label i#h {
  width: 3px;
  height: 3px;
  top: 23px;
  right: 26px;
}
.aq_wrap_7 #slide:checked + label i#i {
  width: 4px;
  height: 4px;
  top: 25px;
  right: 19px;
}
.aq_wrap_7 #slide:checked + label i#j {
  width: 5px;
  height: 5px;
  top: 30px;
  right: 30px;
}
.aq_wrap_7 #slide:checked + label .shine#shine-one {
  height: 12px;
  margin-top: 12px;
}
.aq_wrap_7 #slide:checked + label .shine#shine-two {
  height: 3px;
  margin-top: -20px;
}
      `}</style>
      <div className="aq_wrap_7" dangerouslySetInnerHTML={{ __html: `<div className="checkbox-wrap">
  <input name="slide" id="slide" type="checkbox" />
  <label htmlFor="slide">
    <div id="pinkliquid">
      <div id="shine-one" className="shine"></div>
      <div id="shine-two" className="shine"></div>
      <div id="bubbles"></div>
    </div>
    <div id="circle">
      <div id="inner-circle"></div>
      <div id="inner-circle-two"></div>
    </div>
  </label>
</div>` }} />
    </div>
  );
};


export interface UivDiveTorchSwitchProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivDiveTorchSwitch: React.FC<UivDiveTorchSwitchProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_8 label, .aq_wrap_8 .bubble {
  display: block;
  -webkit-tap-highlight-color: transparent;
}
.aq_wrap_8 label {
  animation: float74 4s ease-in-out infinite;
}
.aq_wrap_8 .bubble, .aq_wrap_8 .bubble:before, .aq_wrap_8 .bubble:after {
  transition-duration: 0.2s;
}
.aq_wrap_8 .bubble, .aq_wrap_8 .bubble:after {
  border-radius: 50%;
}
.aq_wrap_8 .bubble {
  background-image: radial-gradient(8% 8% at 22% 28%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 23% 27%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 24% 26%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 25% 25%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 26% 24%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 27% 23%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		radial-gradient(8% 8% at 28% 22%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%);
  box-shadow: 0 -0.06em 0.1em hsl(0,90%,100%) inset,
		0 -0.15em 0.4em hsl(0,90%,45%) inset,
		0 0.05em 0.05em hsl(0,90%,45%) inset,
		0.05em 0 0.1em hsl(0,90%,100%) inset,
		-0.05em 0 0.1em hsl(0,90%,100%) inset,
		0 0.1em 0.4em hsl(0,90%,60%) inset;
  cursor: pointer;
  position: relative;
  width: 3em;
  height: 3em;
  transform-style: preserve-3d;
  transition-property: box-shadow, transform, width, height;
  transition-timing-function: ease-in-out, ease-in-out, var(--bubbleTiming), var(--bubbleTiming);
  will-change: transform;
  -webkit-appearance: none;
  appearance: none;
  z-index: 0;
}
.aq_wrap_8 .bubble:before, .aq_wrap_8 .bubble:after {
  content: "";
  display: block;
  position: absolute;
  transition-timing-function: var(--bubbleTiming);
}
.aq_wrap_8 .bubble:before {
  border-radius: 0.75em;
  box-shadow: 0 0 0 0.5em hsl(0,0%,100%) inset;
  filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));
  top: 50%;
  left: 50%;
  width: 1.5em;
  height: 1.5em;
  transform: translate3d(-50%,-50%,-1px);
  z-index: -1;
}
.aq_wrap_8 .bubble:after {
  background: radial-gradient(100% 100% at center,hsla(0,0%,0%,0) 35%,hsla(0,0%,0%,0.2) 48%,hsla(0,0%,0%,0) 50%);
  filter: blur(4px);
  top: 0.6em;
  left: 0.6em;
  width: 100%;
  height: 100%;
  transform: translate3d(0,0,-1px);
  z-index: -2;
}
.aq_wrap_8 .bubble:focus, .aq_wrap_8 .bubble:hover {
  transform: scale(1.1);
  outline: none;
}
.aq_wrap_8 .bubble:focus:active, .aq_wrap_8 .bubble:hover:active {
  width: 3.6em;
  height: 2.4em;
}
.aq_wrap_8 .bubble:focus:before, .aq_wrap_8 .bubble:hover:before {
  filter: drop-shadow(0.75em 0.75em 4px hsla(0,0%,0%,0.2));
}
.aq_wrap_8 .bubble:focus:after, .aq_wrap_8 .bubble:hover:after {
  transform: translate3d(0.15em,0.15em,-1px);
}
.aq_wrap_8 .bubble:checked {
  box-shadow: 0 -0.06em 0.1em hsl(120,90%,100%) inset,
		0 -0.15em 0.4em hsl(120,90%,45%) inset,
		0 0.05em 0.05em hsl(120,90%,45%) inset,
		0.05em 0 0.1em hsl(120,90%,100%) inset,
		-0.05em 0 0.1em hsl(120,90%,100%) inset,
		0 0.1em 0.4em hsl(120,90%,60%) inset;
}
.aq_wrap_8 .bubble:checked:before {
  border-radius: 0.25em;
  width: 0.5em;
}


@media (prefers-reduced-motion: reduce) {
  label {
    animation: none;
  }
.aq_wrap_8 .bubble, .aq_wrap_8 .bubble:before, .aq_wrap_8 .bubble:after {
  transition-duration: 0s;
}
.aq_wrap_8 .bubble:focus, .aq_wrap_8 .bubble:hover {
  transform: scale(1);
}
.aq_wrap_8 .bubble:focus:active, .aq_wrap_8 .bubble:hover:active {
  width: 3em;
    height: 3em;
}
.aq_wrap_8 .bubble:focus:before, .aq_wrap_8 .bubble:hover:before {
  filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));
}
.aq_wrap_8 .bubble:focus:after, .aq_wrap_8 .bubble:hover:after {
  transform: translate3d(0,0,-1px);
}


@keyframes float74 {
  from, to {
    transform: translate(0,3%);
  }
.aq_wrap_8 25% {
  transform: translate(-3%,0);
}
.aq_wrap_8 50% {
  transform: translate(0,-3%);
}
.aq_wrap_8 75% {
  transform: translate(3%,0);
}
      `}</style>
      <div className="aq_wrap_8" dangerouslySetInnerHTML={{ __html: `<label><input value="on" name="dummy" type="checkbox" className="bubble" /></label>` }} />
    </div>
  );
};


export interface UivDepthUnitsSwitchProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivDepthUnitsSwitch: React.FC<UivDepthUnitsSwitchProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_9 .switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8em;
  height: 3.8em;
}
.aq_wrap_9 .torch {
  margin-top: 0.9em;
  margin-left: 0.95em;
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
}
.aq_wrap_9 .slider .b {
  position: relative;
  top: -3.3em;
  transform: rotate(270deg);
}
.aq_wrap_9 .slider .bling_85 {
  stroke: #fff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 3;
  stroke-dashoffset: 15;
  transition: all 0.3s ease;
}
.aq_wrap_9 .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.aq_wrap_9 .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  border-radius: 50%;
  background-color: rgba(116, 115, 115, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.aq_wrap_9 .chk_85:checked + .slider {
  animation: tap 0.3s linear forwards;
}
.aq_wrap_9 .chk_85:checked + .slider .bling_85 {
  animation: bling_8561328 0.3s linear forwards;
  animation-delay: 0.2s;
}
.aq_wrap_9 .chk_85:checked + .slider {
  background-color: #FFA133;
}
.aq_wrap_9 .chk_85:focus + .slider {
  box-shadow: 0 0 1px #FFA133;
}


@keyframes bling_8561328 {
  50% {
    stroke-dasharray: 3;
    stroke-dashoffset: 12;
  }

  100% {
    stroke-dasharray: 3;
    stroke-dashoffset: 9;
  }
}

@keyframes tap {
  50% {
    scale: 0.9;
  }

  100% {
    scale: 1;
  }
}

      `}</style>
      <div className="aq_wrap_9" dangerouslySetInnerHTML={{ __html: `<label className="switch">
  <input className="chk_85" type="checkbox" />
  <span className="slider">
    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="torch">
    <path d="M 63.85,54.65 Q 62.77,54.13 61.88,53.31 Q 54.13,46.12 46.31,37.69 Q 43.88,35.06 44.29,31.53 Q 44.51,29.56 46.54,25.87 Q 56.15,8.39 59.06,3.56 Q 60.59,1.03 63.83,2.41 Q 67.73,4.07 71.11,6.55 Q 72.85,7.82 77.51,11.86 Q 89.11,21.92 96.94,34.06 Q 100.09,38.95 95.24,41.73 Q 83.77,48.31 72.16,54.64 Q 68.24,56.77 63.85,54.65 Z" fill="#ffffff"></path>
    <path d="M 14.03,66.29 Q 27.40,51.66 40.57,37.33 A 0.54,0.54 52.1 0 1 41.44,37.44 Q 43.25,40.72 45.58,43.04 Q 47.66,45.11 47.71,45.17 Q 54.67,52.58 62.60,58.93 A 0.44,0.43 43.0 0 1 62.63,59.59 Q 42.87,77.87 22.77,95.78 Q 20.75,97.58 19.20,97.93 Q 16.72,98.49 14.81,96.94 Q 6.88,90.47 2.81,84.94 Q 1.47,83.11 2.03,80.84 Q 2.37,79.43 4.04,77.51 Q 8.97,71.84 14.03,66.29 ZM 42.9269,57.1766 A 3.76 3.76 0.0 0 0 37.6102,57.0930 L 33.1721,61.3938 A 3.76 3.76 0.0 0 0 33.0886,66.7106 L 33.3531,66.9834 A 3.76 3.76 0.0 0 0 38.6698,67.0670 L 43.1079,62.7662 A 3.76 3.76 0.0 0 0 43.1914,57.4494 L 42.9269,57.1766 Z" fill="#ffffff"></path>
    </svg>
    <svg className="b" width="100%" height="50%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 20L31 22" className="bling_85"></path>
    <path d="M31.5 15H34.5" className="bling_85"></path>
    <path d="M29 10L31 8" className="bling_85"></path>
    </svg>
  </span>
</label>` }} />
    </div>
  );
};


export interface UivBiolumMarineCardProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivBiolumMarineCard: React.FC<UivBiolumMarineCardProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_10 .main__heading {
  font-weight: 600;
  font-size: 2.25em;
  margin-bottom: 0.75em;
  text-align: center;
  color: #eceff1;
}
.aq_wrap_10 .cards {
  position: relative;
}
.aq_wrap_10 .card {
  --flow-space: 0.5em;
  --hsl: var(--hue), var(--saturation), var(--lightness);
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: #2b2b2b;
  border: 1px solid #eceff133;
  border-radius: 15px;
}
.aq_wrap_10 .card:nth-child(1) {
  --hue: 165;
  --saturation: 82.26%;
  --lightness: 51.37%;
}
.aq_wrap_10 .card__bullets {
  line-height: 1.4;
}
.aq_wrap_10 .card__heading {
  font-size: 1.05em;
  font-weight: 600;
}
.aq_wrap_10 .card__price {
  font-size: 1.75em;
  font-weight: 700;
}
.aq_wrap_10 .flow > * + * {
  margin-top: var(--flow-space, 1.25em);
}
.aq_wrap_10 .cta {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  outline: 1px solid white;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
}
.aq_wrap_10 .card:hover {
  --lightness: 80%;
  background: #ffffff80;
  color: #000;
  outline: 1px solid rgb(255, 255, 255);
  box-shadow: inset 0 0 80px whitesmoke, inset 20px 0 80px rgba(255, 0, 255, 0.747),
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  transition: all ease-in-out 0.3s;
}
.aq_wrap_10 .card:hover > .cta {
  outline: none;
  background-color: #0d0d0d;
}
      `}</style>
      <div className="aq_wrap_10" dangerouslySetInnerHTML={{ __html: `<div className="cards__inner">
  <div className="cards__card card">
    <p className="card__heading">Free Plan</p>
    <p className="card__price">$0/month</p>
    <ul className="card_bullets flow" role="list">
      <li>Access to all features</li>
      <li>Unlimited storage</li>
      <li>No ads</li>
    </ul>
    <a className="card__cta cta" href="#basic">Get Started</a>
  </div>
  <div className="overlay cards__inner"></div>
</div>` }} />
    </div>
  );
};


export interface UivNeonReefCardProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivNeonReefCard: React.FC<UivNeonReefCardProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_11 .card {
  position: relative;
  width: 190px;
  height: 190px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.aq_wrap_11 .card > div {
  margin: auto auto;
}
.aq_wrap_11 .card::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.aq_wrap_11 .card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}
.aq_wrap_11 .heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}
.aq_wrap_11 .card p:not(.heading) {
  font-size: 14px;
}
.aq_wrap_11 .card p:last-child {
  color: #e81cff;
  font-weight: 600;
}
.aq_wrap_11 .card:hover::after {
  filter: blur(30px);
}
.aq_wrap_11 .card:hover::before {
  transform: rotate(-90deg) scaleX(1) scaleY(1);
}
.aq_wrap_11 .card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
.aq_wrap_11 .card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}
      `}</style>
      <div className="aq_wrap_11" dangerouslySetInnerHTML={{ __html: `<div className="card">
  <div>
    <p className="heading">Popular this month</p>
    <p>Aqua Sphere</p>
    <p>Deep Sea</p>
  </div>

  <button className="card-button">More Info</button>
</div>` }} />
    </div>
  );
};


export interface UivAbyssalDepthCardProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivAbyssalDepthCard: React.FC<UivAbyssalDepthCardProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_12 .card {
  position: relative;
  margin: 0 auto;
  height: fit-content;
  padding: 20px;
  background-image: linear-gradient(
    45deg,
    blueviolet,
    black,
    rgb(116, 214, 247)
  );
  background-color: #121212;
  border-radius: 10px;
  box-shadow: 5px -5px 25px rgb(116, 214, 247), -5px 5px 25px blueviolet;
  transition: all 0.3s ease;
}
.aq_wrap_12 .card:hover {
  box-shadow: 0px 5px 10px rgb(116, 214, 247), 0px -5px 10px blueviolet;
  transform: scale(1.05);
  background-size: 0 0;
}
.aq_wrap_12 .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.8) 0%,
    rgb(138, 43, 226) 15%,
    rgba(138, 79, 226, 0.75) 35%,
    rgba(138, 43, 226, 0.5) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  border-radius: 10px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.aq_wrap_12 .card:hover::before {
  opacity: 1;
  animation: space-animation 25s infinite alternate, sparkle 1.5s infinite;
}


@keyframes space-animation {
  0%,
  100% {
    background-position: -10%;
  }
.aq_wrap_12 50% {
  background-position: 110%;
}
.aq_wrap_12 @keyframes sparkle {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

.image {
  width: 100%;
  max-width: 190px;
  display: block;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: rotate 1s ease, scale 1s ease;
  rotate: -70deg;
  animation: float 10s ease infinite;
  scale: 1.4;
  z-index: -1;
}
.aq_wrap_12 .card:hover .image {
  rotate: 70deg;
  scale: 1.05;
}
.aq_wrap_12 .card:hover .image:hover {
  scale: 1.15;
}


@keyframes float {
  0%,
  100% {
    transform: translateX(0);
  }
.aq_wrap_12 50% {
  transform: translateX(-20px);
}
.aq_wrap_12 .heading {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #f0f0f0;
  transform: translateY(-30px);
  transition: all 0.3s ease;
}
.aq_wrap_12 .heading:hover {
  transform: translateY(-40px);
}
.aq_wrap_12 .card:hover .heading {
  color: rgb(116, 214, 247);
}
.aq_wrap_12 .icons {
  display: flex;
  justify-content: space-between;
}
.aq_wrap_12 .icons a {
  text-decoration: none;
  color: #f0f0f0;
  transition: transform 0.3s ease;
}
.aq_wrap_12 .card:hover a {
  color: rgb(116, 214, 247);
}
.aq_wrap_12 .icons .instagram:hover {
  color: #e4405f;
}
.aq_wrap_12 .instagram:hover {
  animation: wiggle 0.5s ease infinite;
}
.aq_wrap_12 @keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.icons .x:hover {
  color: #14171a;
}
.aq_wrap_12 .x:hover {
  animation: pulse 0.5s ease infinite;
}
.aq_wrap_12 @keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.icons .discord:hover {
  color: #7289da;
}
.aq_wrap_12 .discord:hover {
  animation: bounce 0.5s ease infinite;
}


@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
}


      `}</style>
      <div className="aq_wrap_12" dangerouslySetInnerHTML={{ __html: `<div className="card">
  <img
    className="image"
    alt=""
    src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
  />
  <div className="heading">We're on Social Media</div>
  <div className="icons">
    <a className="instagram" href="https://www.instagram.com/uiverse.io/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 25"
        height="25"
        width="24"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z"
        ></path>
      </svg>
    </a>
    <a className="x" href="https://twitter.com/uiverse_io">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="24"
        width="24"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421"
        ></path>
      </svg>
    </a>
    <a className="discord" href="https://discord.gg/KD8ba2uUpT">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
        height="25"
        width="25"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M11.5989 6.5003H14.2919C14.3851 6.5003 14.4764 6.47427 14.5555 6.42515C14.6347 6.37603 14.6985 6.30577 14.7399 6.2223L15.4179 4.8543C15.4664 4.75358 15.5488 4.67313 15.6506 4.62706C15.7524 4.58098 15.8673 4.57222 15.9749 4.6023C16.6309 4.7903 18.0049 5.2433 19.1029 6.0003C22.9669 8.8973 22.6069 15.3903 22.5779 16.7603C22.5765 16.8444 22.5541 16.9269 22.5129 17.0003C20.5299 20.5003 17.0899 20.5003 17.0899 20.5003L15.9239 18.0743M15.9239 18.0743C16.4479 17.9163 17.0029 17.7253 17.6029 17.5003M15.9239 18.0743C13.4799 18.8093 11.7219 18.8083 9.27791 18.0733M13.5989 6.5003H10.9109C10.8179 6.50039 10.7266 6.47451 10.6475 6.42557C10.5683 6.37664 10.5044 6.30659 10.4629 6.2233L9.77991 4.8533C9.73146 4.75279 9.64925 4.6725 9.54762 4.62644C9.446 4.58038 9.33142 4.57148 9.22391 4.6013C8.56891 4.7893 7.19291 5.2433 6.09391 6.0003C2.23091 8.8973 2.59091 15.3903 2.61991 16.7603C2.62132 16.8445 2.64366 16.9269 2.68491 17.0003C4.66791 20.5003 8.10791 20.5003 8.10791 20.5003L9.27791 18.0733M9.27791 18.0733C8.75491 17.9163 8.19891 17.7253 7.59891 17.5003M10.6009 12.5003C10.6009 12.7655 10.4956 13.0199 10.308 13.2074C10.1205 13.3949 9.86612 13.5003 9.60091 13.5003C9.33569 13.5003 9.08134 13.3949 8.8938 13.2074C8.70626 13.0199 8.60091 12.7655 8.60091 12.5003C8.60091 12.2351 8.70626 11.9807 8.8938 11.7932C9.08134 11.6057 9.33569 11.5003 9.60091 11.5003C9.86612 11.5003 10.1205 11.6057 10.308 11.7932C10.4956 11.9807 10.6009 12.2351 10.6009 12.5003ZM16.6029 12.5003C16.6029 12.7655 16.4976 13.0199 16.31 13.2074C16.1225 13.3949 15.8681 13.5003 15.6029 13.5003C15.3377 13.5003 15.0833 13.3949 14.8958 13.2074C14.7083 13.0199 14.6029 12.7655 14.6029 12.5003C14.6029 12.2351 14.7083 11.9807 14.8958 11.7932C15.0833 11.6057 15.3377 11.5003 15.6029 11.5003C15.8681 11.5003 16.1225 11.6057 16.31 11.7932C16.4976 11.9807 16.6029 12.2351 16.6029 12.5003Z"
        ></path>
      </svg>
    </a>
  </div>
</div>` }} />
    </div>
  );
};


export interface UivExpeditionRouteCardProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivExpeditionRouteCard: React.FC<UivExpeditionRouteCardProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_13 .card {
  background-color: #222;
  border: 10px solid rgb(161, 156, 116);
  padding: 30px;
  width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 9px 11px 1px rgb(0, 0, 0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}
.aq_wrap_13 .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px,
    transparent 2px
  );

  opacity: 0.3;
  pointer-events: none;
  z-index: 2;
  animation: tv-static 0.2s infinite linear alternate;
}
.aq_wrap_13 .card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  background-size: 100% 2px, 3px 100%;
  animation: tv-flicker 0.15s infinite;
  z-index: 35;
  pointer-events: none;
  opacity: 0.5;
}
.aq_wrap_13 @keyframes tv-static {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
}

.eye-of-providence {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 20px;
}
.aq_wrap_13 .triangle {
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 190px solid rgb(198, 181, 113);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease;
}
.aq_wrap_13 .card:hover .triangle {
  transform: scale(1.05);
}
.aq_wrap_13 .eye {
  width: 90px;
  height: 50px;
  background: radial-gradient(circle at 30% 30%, #fff, #e6e6e6);
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: 65px;
  overflow: hidden;
  box-shadow: 0 0 0 10px rgb(115, 112, 92), 15px 15px 0 #000,
    inset -5px -5px 10px rgba(0, 0, 0, 0.2),
    inset 5px 5px 10px rgba(255, 255, 255, 0.3);
  z-index: 2;
  animation: blink 6s infinite cubic-bezier(0.76, 0, 0.24, 1);
}
.aq_wrap_13 .pupil {
  width: 16px;
  height: 16px;
  background: rgb(207, 19, 19);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #000, #444);
  border: 2px solid #fff;
  position: absolute;
  top: 14px;
  left: 14px;
  box-shadow: inset 0 0 10px rgba(203, 4, 4, 0.2), 0 0 10px rgba(0, 0, 0, 0.5);
}


@keyframes blink {
  0%,
  90%,
  100% {
    height: 50px;
  }
.aq_wrap_13 92%, .aq_wrap_13 98% {
  height: 0px;
}


@keyframes blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }
.aq_wrap_13 94% {
  transform: scaleY(0.1);
}
.aq_wrap_13 .iris {
  width: 45px;
  height: 45px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 22px;
  animation: look-around 6s infinite;
  animation-timing-function: ease-in-out;
}


@keyframes look-around {
  0%,
  100% {
    transform: translate(-2, 10px) scale(1);
  }
.aq_wrap_13 25% {
  transform: translate(-18px, 10px) scale(1.1);
}
.aq_wrap_13 50% {
  transform: translate(0, 15px) scale(1.2);
}
.aq_wrap_13 75% {
  transform: translate(20px, 10px) scale(1.1);
}
.aq_wrap_13 .triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.aq_wrap_13 @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  padding-bottom: 33px;
  text-shadow: 3px 3px #000;
  z-index: 3;
  position: relative;
  display: inline-block;
}
.aq_wrap_13 .title::before, .aq_wrap_13 .title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .title::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}
.aq_wrap_13 .title::after {
  left: -2px;
  text-shadow: -1px 0 blue;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}
.aq_wrap_13 @keyframes glitch-anim-1 {
  0% {
    clip: rect(30px, 9999px, 10px, 0);
  }
  100% {
    clip: rect(42px, 9999px, 78px, 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  100% {
    top: 1px;
    left: -1px;
    clip: rect(79px, 9999px, 16px, 0);
  }
}

.glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text::before, .aq_wrap_13 .glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 @keyframes glitch-anim {
  0% {
    clip: rect(34px, 9999px, 11px, 0);
  }
  5% {
    clip: rect(92px, 9999px, 89px, 0);
  }
  10% {
    clip: rect(6px, 9999px, 22px, 0);
  }
  15% {
    clip: rect(75px, 9999px, 4px, 0);
  }
  20% {
    clip: rect(6px, 9999px, 87px, 0);
  }
  25% {
    clip: rect(45px, 9999px, 98px, 0);
  }
  30% {
    clip: rect(39px, 9999px, 57px, 0);
  }
  35% {
    clip: rect(90px, 9999px, 65px, 0);
  }
  40% {
    clip: rect(7px, 9999px, 90px, 0);
  }
  45% {
    clip: rect(30px, 9999px, 88px, 0);
  }
  50% {
    clip: rect(76px, 9999px, 23px, 0);
  }
  55% {
    clip: rect(57px, 9999px, 35px, 0);
  }
  60% {
    clip: rect(85px, 9999px, 87px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 12px, 0);
  }
  70% {
    clip: rect(32px, 9999px, 56px, 0);
  }
  75% {
    clip: rect(36px, 9999px, 98px, 0);
  }
  80% {
    clip: rect(12px, 9999px, 43px, 0);
  }
  85% {
    clip: rect(54px, 9999px, 76px, 0);
  }
  90% {
    clip: rect(43px, 9999px, 23px, 0);
  }
  95% {
    clip: rect(76px, 9999px, 87px, 0);
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.5);
  animation: scan 2.5s linear infinite;
  z-index: 4;
}
.aq_wrap_13 @keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.aq_wrap_13 @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  text-shadow: 3px 3px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text::before, .aq_wrap_13 .glitch-text::after {
  content: "The Eye of Providence";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 @keyframes glitch-anim {
  0% {
    clip: rect(34px, 9999px, 11px, 0);
  }
  5% {
    clip: rect(92px, 9999px, 89px, 0);
  }
  10% {
    clip: rect(6px, 9999px, 22px, 0);
  }
  15% {
    clip: rect(75px, 9999px, 4px, 0);
  }
  20% {
    clip: rect(6px, 9999px, 87px, 0);
  }
  25% {
    clip: rect(45px, 9999px, 98px, 0);
  }
  30% {
    clip: rect(39px, 9999px, 57px, 0);
  }
  35% {
    clip: rect(90px, 9999px, 65px, 0);
  }
  40% {
    clip: rect(7px, 9999px, 90px, 0);
  }
  45% {
    clip: rect(30px, 9999px, 88px, 0);
  }
  50% {
    clip: rect(76px, 9999px, 23px, 0);
  }
  55% {
    clip: rect(57px, 9999px, 35px, 0);
  }
  60% {
    clip: rect(85px, 9999px, 87px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 12px, 0);
  }
  70% {
    clip: rect(32px, 9999px, 56px, 0);
  }
  75% {
    clip: rect(36px, 9999px, 98px, 0);
  }
  80% {
    clip: rect(12px, 9999px, 43px, 0);
  }
  85% {
    clip: rect(54px, 9999px, 76px, 0);
  }
  90% {
    clip: rect(43px, 9999px, 23px, 0);
  }
  95% {
    clip: rect(76px, 9999px, 87px, 0);
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(75, 68, 68, 0.5);
  animation: scan 2.5s linear infinite;
  z-index: 4;
}
.aq_wrap_13 @keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

.triangle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid #f00;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}
.aq_wrap_13 @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  color: rgb(255, 255, 255);
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 28px;
  text-shadow: 3px 3px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text {
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px #000;
  z-index: 3;
}
.aq_wrap_13 .glitch-text::before, .aq_wrap_13 .glitch-text::after {
  content: "Always Watching";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.aq_wrap_13 .glitch-text::before {
  left: 3px;
  text-shadow: -3px 0 #f00;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .glitch-text::after {
  left: -3px;
  text-shadow: -3px 0 #0ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}
.aq_wrap_13 .footer-text {
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  position: relative;
  z-index: 3;
}
.aq_wrap_13 .footer-text::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 50px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateX(-50%);
}
      `}</style>
      <div className="aq_wrap_13" dangerouslySetInnerHTML={{ __html: `<div className="card">
  <div data-text="The Eye of Providence" className="title">
    The Eye of Providence
  </div>
  <div className="eye-of-providence">
    <div className="triangle"></div>
    <div className="eye">
      <div className="eyelid"></div>
      <div className="iris">
        <div className="pupil"></div>
      </div>
    </div>
  </div>
  <div className="spotlight"></div>
  <div className="scan-line"></div>
  <div className="glitch-text">Always Watching</div>
  <div className="footer-text">Obey. Trust. Consume</div>
</div>` }} />
    </div>
  );
};


export interface UivAquaSearchInputProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivAquaSearchInput: React.FC<UivAquaSearchInputProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`

      `}</style>
      <div className="aq_wrap_14" dangerouslySetInnerHTML={{ __html: `<!-- From Deep Sea.io by ARUSH221617  - Tags: input -->
<form className="flex items-center max-w-lg mx-auto">
  <label className="sr-only" htmlFor="voice-search">Search</label>
  <div className="relative w-full">
    <div
      className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      <svg
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
      >
        <path
          d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
        ></path>
      </svg>
    </div>
    <input
      required=""
      placeholder="Search..."
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id="voice-search"
      type="text"
    />
    <button
      className="absolute inset-y-0 end-0 flex items-center pe-3"
      type="button"
    >
      <svg
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <path
          d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
        ></path>
      </svg>
    </button>
  </div>
  <button
    className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="submit"
  >
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-4 h-4 me-2"
    >
      <path
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
      ></path></svg
    >Search
  </button>
</form>` }} />
    </div>
  );
};


export interface UivDiverNameInputProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivDiverNameInput: React.FC<UivDiverNameInputProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_15 .search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.aq_wrap_15 .search-bar {
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    #333,
    #111
  ); 
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4), 0 0 20px #8839ff; 
  padding: 10px 15px;
}
.aq_wrap_15 .search-icon {
  color: #fff; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}
.aq_wrap_15 .search-bar input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  flex: 1;
  min-width: 200px;
}
.aq_wrap_15 .search-bar input::placeholder {
  color: #bbb;
}
.aq_wrap_15 .filter-button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0 10px;
  cursor: pointer;
  color: #fff; 
  display: flex;
  align-items: center;
  justify-content: center;
}
      `}</style>
      <div className="aq_wrap_15" dangerouslySetInnerHTML={{ __html: `<div className="search-bar-container">
  <div className="search-bar">
    <span className="search-icon">
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.53,20.47l-5-5a8,8,0,1,0-1.06,1.06l5,5a.75.75,0,0,0,1.06-1.06ZM4,10A6,6,0,1,1,10,16,6,6,0,0,1,4,10Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    <input placeholder="Search..." type="text" />
    <button className="filter-button" type="button">
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3,5V7H4L10,13.92V19A1,1,0,0,0,11,20h2a1,1,0,0,0,1-1V13.92L20,7h1V5ZM12,17H12V13a1,1,0,0,0-.29-.71L6.41,7h11.18l-5.29,5.29A1,1,0,0,0,12,13Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
</div>` }} />
    </div>
  );
};


export interface UivDiverEmailInputProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivDiverEmailInput: React.FC<UivDiverEmailInputProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_16 .search {
  display: inline-block;
  position: relative;
}
.aq_wrap_16 .search input[type="text"] {
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.aq_wrap_16 .search button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  transition: .9s ease;
}
.aq_wrap_16 .search button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: blue;
}
      `}</style>
      <div className="aq_wrap_16" dangerouslySetInnerHTML={{ __html: `<div className="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>` }} />
    </div>
  );
};


export interface UivDiverCertInputProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivDiverCertInput: React.FC<UivDiverCertInputProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_17 .input[type=text] {
  max-width: 180px;
  height: 20px;
  background-color: #fff;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0px 10px 20px -18px blue;
  border-bottom: 3px solid #0d14e9;
  transition: .10s ease;
}
.aq_wrap_17 .input[type=text]:hover {
  outline: 2px solid #0d14e9;
  max-width: 200px;
}
.aq_wrap_17 .input[type=text]:focus {
  border-bottom: 3px solid #0d14e9;
  border-radius: 5px 5px 2px 2px;
  transform: scale(1.1);
}
      `}</style>
      <div className="aq_wrap_17" dangerouslySetInnerHTML={{ __html: `<input type="text" name="search" placeholder="Search For AnyThink.." className="input" />` }} />
    </div>
  );
};


export interface UivOxygenPulseLoaderProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivOxygenPulseLoader: React.FC<UivOxygenPulseLoaderProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_18 #loader {
  width: 80px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px -40px;
  z-index: 1000;
}
.aq_wrap_18 .lightsaber {
  position: absolute;
  width: 4px;
  height: 12px;
  background-color: #666;
  border-radius: 1px;
  bottom: 0;
}
.aq_wrap_18 .lightsaber.ls-left {
  left: 0;
}
.aq_wrap_18 .lightsaber.ls-right {
  right: 0;
}
.aq_wrap_18 .lightsaber:before {
  position: absolute;
  content: ' ';
  display: block;
  width: 2px;
  height: 25px;
  max-height: 1px;
  left: 1px;
  top: 1px;
  background-color: #fff;
  border-radius: 1px;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  -webkit-transform-origin: center top;
  -ms-transform-origin: center top;
  transform-origin: center top;
}
.aq_wrap_18 .lightsaber:after {
  position: absolute;
  content: ' ';
  display: block;
  width: 2px;
  height: 2px;
  left: 1px;
  top: 4px;
  background-color: #fff;
  border-radius: 50%;
}
.aq_wrap_18 .ls-particles {
  position: absolute;
  left: 42px;
  top: 10px;
  width: 1px;
  height: 5px;
  background-color: rgb(51, 51, 51, 0);
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
}
.aq_wrap_18 .lightsaber.ls-green:before {
  -webkit-animation: showlightgreen 2s ease-in-out infinite 1s;
  animation: showlightgreen 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .lightsaber.ls-red:before {
  -webkit-animation: showlightred 2s ease-in-out infinite 1s;
  animation: showlightred 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .lightsaber.ls-left {
  -webkit-animation: fightleft 2s ease-in-out infinite 1s;
  animation: fightleft 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .lightsaber.ls-right {
  -webkit-animation: fightright 2s ease-in-out infinite 1s;
  animation: fightright 2s ease-in-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-1 {
  -webkit-animation: particles1 2s ease-out infinite 1s;
  animation: particles1 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-2 {
  -webkit-animation: particles2 2s ease-out infinite 1s;
  animation: particles2 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-3 {
  -webkit-animation: particles3 2s ease-out infinite 1s;
  animation: particles3 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-4 {
  -webkit-animation: particles4 2s ease-out infinite 1s;
  animation: particles4 2s ease-out infinite 1s;
}
.aq_wrap_18 .ls-particles.ls-part-5 {
  -webkit-animation: particles5 2s ease-out infinite 1s;
  animation: particles5 2s ease-out infinite 1s;
}


@-webkit-keyframes showlightgreen {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }
.aq_wrap_18 5% {
  box-shadow: 0 0 4px 2px #87c054;
}
.aq_wrap_18 10% {
  max-height: 22px;
}
.aq_wrap_18 80% {
  max-height: 22px;
}
.aq_wrap_18 85% {
  box-shadow: 0 0 4px 2px #87c054;
}
.aq_wrap_18 100% {
  max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
}


@-webkit-keyframes showlightred {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
  }
.aq_wrap_18 20% {
  box-shadow: 0 0 4px 2px #f06363;
}
.aq_wrap_18 25% {
  max-height: 22px;
}
.aq_wrap_18 80% {
  max-height: 22px;
}
.aq_wrap_18 85% {
  box-shadow: 0 0 4px 2px #f06363;
}
.aq_wrap_18 100% {
  max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
}


@-webkit-keyframes fightleft {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    left: 0;
    bottom: 0;
  }
.aq_wrap_18 30% {
  -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
}
.aq_wrap_18 40% {
  -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 0;
    bottom: 2px;
}
.aq_wrap_18 45% {
  -webkit-transform: rotateZ(65deg);
    transform: rotateZ(65deg);
    left: 0;
}
.aq_wrap_18 65% {
  -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 30px;
    bottom: 10px;
}
.aq_wrap_18 95% {
  -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 0;
    bottom: 0;
}
.aq_wrap_18 100% {
  -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    left: 0;
    bottom: 0;
}


@-webkit-keyframes fightright {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    right: 0;
    bottom: 0;
  }
.aq_wrap_18 30% {
  -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
}
.aq_wrap_18 45% {
  -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    right: 0;
    bottom: 2px;
}
.aq_wrap_18 50% {
  -webkit-transform: rotateZ(-65deg);
    transform: rotateZ(-65deg);
    right: 0;
}
.aq_wrap_18 68% {
  -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 27px;
    bottom: 13px;
}
.aq_wrap_18 95% {
  -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 0;
    bottom: 0;
}
.aq_wrap_18 100% {
  -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
    right: 0;
    bottom: 0;
}


@-webkit-keyframes particles1 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(-30px);
    transform: rotateZ(35deg) translateY(-30px);
}


@-webkit-keyframes particles2 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
}
.aq_wrap_18 95% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
}


@-webkit-keyframes particles3 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
}
.aq_wrap_18 97% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
}


@-webkit-keyframes particles4 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
}
.aq_wrap_18 97% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
}


@-webkit-keyframes particles5 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }
.aq_wrap_18 63% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
}
.aq_wrap_18 64% {
  background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
}
.aq_wrap_18 97% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
}
.aq_wrap_18 100% {
  background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
}


@keyframes showlightgreen {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }

  5% {
    box-shadow: 0 0 4px 2px #87c054;
  }

  10% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #87c054;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }
}

@keyframes showlightred {
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
  }

  20% {
    box-shadow: 0 0 4px 2px #f06363;
  }

  25% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #f06363;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #f06363;
  }
}

@keyframes fightleft {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    left: 0;
    bottom: 0;
  }

  30% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
  }

  40% {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 0;
    bottom: 2px;
  }

  45% {
    -webkit-transform: rotateZ(65deg);
    transform: rotateZ(65deg);
    left: 0;
  }

  65% {
    -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 30px;
    bottom: 10px;
  }

  95% {
    -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 0;
    bottom: 0;
  }

  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    left: 0;
    bottom: 0;
  }
}

@keyframes fightright {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    right: 0;
    bottom: 0;
  }

  30% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
  }

  45% {
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    right: 0;
    bottom: 2px;
  }

  50% {
    -webkit-transform: rotateZ(-65deg);
    transform: rotateZ(-65deg);
    right: 0;
  }

  68% {
    -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 27px;
    bottom: 13px;
  }

  95% {
    -webkit-transform: rotateZ(-410deg);
    transform: rotateZ(-410deg);
    right: 0;
    bottom: 0;
  }

  100% {
    -webkit-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
    right: 0;
    bottom: 0;
  }
}

@keyframes particles1 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(35deg) translateY(0px);
    transform: rotateZ(35deg) translateY(0px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(35deg) translateY(-30px);
    transform: rotateZ(35deg) translateY(-30px);
  }
}

@keyframes particles2 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-65deg) translateY(0px);
    transform: rotateZ(-65deg) translateY(0px);
  }

  95% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-65deg) translateY(-40px);
    transform: rotateZ(-65deg) translateY(-40px);
  }
}

@keyframes particles3 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-75deg) translateY(0px);
    transform: rotateZ(-75deg) translateY(0px);
  }

  97% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-75deg) translateY(-35px);
    transform: rotateZ(-75deg) translateY(-35px);
  }
}

@keyframes particles4 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(-25deg) translateY(0px);
    transform: rotateZ(-25deg) translateY(0px);
  }

  97% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(-25deg) translateY(-30px);
    transform: rotateZ(-25deg) translateY(-30px);
  }
}

@keyframes particles5 {
  0% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }

  63% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }

  64% {
    background-color: rgba(51, 51, 51,1);
    -webkit-transform: rotateZ(65deg) translateY(0px);
    transform: rotateZ(65deg) translateY(0px);
  }

  97% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
  }

  100% {
    background-color: rgba(51, 51, 51,0);
    -webkit-transform: rotateZ(65deg) translateY(-35px);
    transform: rotateZ(65deg) translateY(-35px);
  }
}

      `}</style>
      <div className="aq_wrap_18" dangerouslySetInnerHTML={{ __html: `<div id="loader">
  <div className="ls-particles ls-part-1"></div>
  <div className="ls-particles ls-part-2"></div>
  <div className="ls-particles ls-part-3"></div>
  <div className="ls-particles ls-part-4"></div>
  <div className="ls-particles ls-part-5"></div>
  <div className="lightsaber ls-left ls-green"></div>
  <div className="lightsaber ls-right ls-red"></div>
</div>` }} />
    </div>
  );
};


export interface UivBubbleAscentLoaderProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivBubbleAscentLoader: React.FC<UivBubbleAscentLoaderProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_19 @keyframes drop {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(80px);
  }
  100% {
    transform: translateY(0px);
  }
}

.lava-lamp {
  position: relative;
  width: 50px;
  height: 100px;
  background: #000;
  border-radius: 25px;
  overflow: hidden;
}
.aq_wrap_19 .bubble {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #e64980, #ff8787);
  border-radius: 50%;
  left: 15px;
  animation: drop 5s ease-in-out infinite;
}
.aq_wrap_19 .bubble1 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #82c91e, #3bc9db);
  border-radius: 50%;
  left: 1px;
  animation: drop 3s ease-in-out infinite;
}
.aq_wrap_19 .bubble2 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #7950f2, #f783ac);
  border-radius: 50%;
  left: 30px;
  animation: drop 4s ease-in-out infinite;
}
.aq_wrap_19 .bubble3 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #4481eb, #04befe);
  border-radius: 50%;
  left: 20px;
  animation: drop 6s ease-in-out infinite;
}
      `}</style>
      <div className="aq_wrap_19" dangerouslySetInnerHTML={{ __html: `<div className="lava-lamp">
  <div className="bubble"></div>
  <div className="bubble1"></div>
  <div className="bubble2"></div>
  <div className="bubble3"></div>
</div>` }} />
    </div>
  );
};


export interface UivCoralTooltipProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivCoralTooltip: React.FC<UivCoralTooltipProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_20 .tooltip-container {
  --background-light: #ff5555; 
  --background-dark: #000000; 
  --text-color-light: #ffffff;
  --text-color-dark: #ffffff;
  --bubble-size: 12px;
  --glow-color: rgba(255, 255, 255, 0.5); 

  position: relative;
  background: var(--background-light);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  padding: 0.7em 1.8em;
  color: var(--text-color-light);
  border-radius: 8px;
}
.aq_wrap_20 .tooltip {
  position: absolute;
  top: -100%; 
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6em 1em;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: var(--bubble-size);
  background: var(--background-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.aq_wrap_20 .tooltip::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  border-style: solid;
  border-width: 8px 8px 0;
  border-color: var(--background-light) transparent transparent;
}
.aq_wrap_20 .tooltip-container:hover {
  background: var(--background-dark);
  color: var(--text-color-dark);
  box-shadow: 0 0 20px var(--glow-color);
}
.aq_wrap_20 .tooltip-container:hover .tooltip {
  top: -120%; 
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
      `}</style>
      <div className="aq_wrap_20" dangerouslySetInnerHTML={{ __html: `<div className="tooltip-container">
  <span className="tooltip">Deep Sea.io</span>
  <span className="text">Tooltip</span>
</div>` }} />
    </div>
  );
};


export interface UivNitroxGearCheckboxProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivNitroxGearCheckbox: React.FC<UivNitroxGearCheckboxProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_21 .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.aq_wrap_21 .container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}
.aq_wrap_21 .checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 2.3em;
  width: 2.3em;
  background-color: #ccc;
  border-radius: 50%;
  transition: .4s;
}
.aq_wrap_21 .checkmark:hover {
  box-shadow: inset 17px 17px 16px #b3b3b3,
            inset -17px -17px 16px #ffffff;
}
.aq_wrap_21 .container input:checked ~ .checkmark {
  box-shadow: none;
  background-color: limegreen;
  transform: rotateX(360deg);
}
.aq_wrap_21 .container input:checked ~ .checkmark:hover {
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
}
.aq_wrap_21 .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.aq_wrap_21 .container input:checked ~ .checkmark:after {
  display: block;
}
.aq_wrap_21 .container .checkmark:after {
  left: 0.96em;
  top: 0.7em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
  transform: rotate(45deg);
}
      `}</style>
      <div className="aq_wrap_21" dangerouslySetInnerHTML={{ __html: `<label className="container">
  <input type="checkbox" checked="checked" />
  <div className="checkmark"></div>
</label>` }} />
    </div>
  );
};


export interface UivNightDiveCheckboxProps {
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const UivNightDiveCheckbox: React.FC<UivNightDiveCheckboxProps> = ({ className = "", onClick, ...rest }) => {
  return (
    <div className={`inline-block ${className}`} onClick={onClick} {...rest}>
      <style>{`
.aq_wrap_22 .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.aq_wrap_22 .container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  width: 24px;
  height: 24px;
}
.aq_wrap_22 .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background-color 0.3s ease;
  z-index: 1;
}
.aq_wrap_22 .glass-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  height: 14px;
  width: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: transform 0.3s ease;
  z-index: 2;
}
.aq_wrap_22 .container input:checked ~ .checkmark {
  background-color: #2196F3;
}
.aq_wrap_22 .container input:checked ~ .glass-effect {
  transform: translate(-50%, -50%) scale(1);
}
.aq_wrap_22 .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.aq_wrap_22 .container input:checked ~ .checkmark:after {
  display: block;
}
.aq_wrap_22 .container .checkmark:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}
      `}</style>
      <div className="aq_wrap_22" dangerouslySetInnerHTML={{ __html: `<label className="container">
  <input checked="checked" type="checkbox" />
  <div className="checkmark"></div>
  <div className="glass-effect"></div>
</label>` }} />
    </div>
  );
};
