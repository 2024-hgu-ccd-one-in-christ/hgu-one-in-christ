import aboutLogo from "../../assets/about/aboutLogo.png";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.5 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const AboutMain = () => {
  return (
    <div
      className={`w-full mt-[163px] flex flex-col items-center text-primary-white mb-[176px]`}
    >
      <img
        src={aboutLogo}
        className={`w-[774px] mt-[154px]`}
        alt="about_logo"
      />
      <p
        className={`font-Menda_Medium text-[17px] text-primary-white leading-[30px] mt-[16px]`}
      >
        SO IN CHRIST WE, FORM ONE BODY, BELONGS TO ALL THE OTHERS.
      </p>
      <div
        className={`w-full mt-[145px] flex justify-between text-[18px] font-Pretendard_Bold`}
      >
        <div className={`w-[300px] flex flex-col items-center`}>
          <p>경북 포항시 북구 흥해읍 558</p>
          <p>한동대학교 김영길 그레이스스쿨</p>
        </div>
        <div className={`w-[300px] flex flex-col items-center`}>
          <p>한동대학교 콘텐츠융합디자인학부</p>
          <p>2024 졸업작품전</p>
        </div>
        <div className={`w-[300px] flex flex-col items-center`}>
          <p>2024.10.21 - 10.28</p>
          <p>09:00 - 18:00</p>
        </div>
      </div>
      <div
        className={`flex flex-col items-center text-[20px] font-Pretendard_Regular mt-[260px]`}
      >
        <p>그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.</p>
        <p>So In Christ We, Form One Body, Belongs To All The Others.</p>
        <p>로마서 12:5</p>
      </div>
      <motion.svg
        width="400"
        height="350"
        viewBox="250 0 100 350"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="300"
          y1="50"
          x2="300"
          y2="300"
          stroke="#ffffff"
          variants={draw}
          custom={2}
        />
      </motion.svg>
      <div
        className={`flex flex-col items-center font-Organetto_ExtBold text-[20px]`}
      >
        <p>자신의 능력과 성취에만 집중하여 서로 경쟁하는 사고방식에서</p>
        <p>벗어나 하나님의 뜻을 깨닫는 것은 중요합니다.</p>
        <p>눈이 손이나 발의 역할을 평가하거나 비교하지 않는 것처럼,</p>
        <p>
          우리도 자신이 하는 일의 가치를 과소평가하거나 과대평가해서는 안됩니다.
        </p>
        <p>
          우리는 각자 다른 역할을 가지고 있지만, 공동체 안에서는 모든 사람이
          서로 필요하고
        </p>
        <p>
          서로 돕는 관계에 있으며, 함께 일함으로 써 공동체는 그리스도 안에서
          하나가 됩니다.
        </p>
      </div>
    </div>
  );
};

export default AboutMain;