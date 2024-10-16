import { Link } from "react-router-dom";
import { DOMAIN, PATHS } from "../../constants/paths";
import { DesingerDetailInfo } from "../../models/designer.model";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  designer: DesingerDetailInfo;
}

const DesignerList = ({ designer }: Props) => {
  const { bigEnter, smallEnter, defaultEnter } = useMousePosition();
  const thumbnail = designer.works[0];

  return (
    <Link
      to={`${PATHS.DESIGNERS}/${designer.id}`}
      className={`flex flex-col items-center cursor-none`}
    >
      <motion.div
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className="w-[90%] lg:w-full h-[69px] sm:h-[50px] 
									flex items-center
								text-primary-white lg:hover:text-primary-black md:hover:text-primary-black text-[18px] sm:text-[14px] 
									lg:px-6 gap-[151px] sm:gap-[50px]
								lg:hover:bg-primary-white md:hover:bg-primary-white 
									group
									"
      >
        <p className="font-Pretendard_Regular w-[90px] sm:w-[70px] pl-[10px]">
          {designer.nameKo}
        </p>
        <div className={`sm:hidden flex gap-[20px] sm:gap-[10px]`}>
          {designer.works[0].category === "UX" ? (
            <p className="font-TT_Firs_Light">UX Design</p>
          ) : (
            designer.works.map((work) => (
              <p className="font-TT_Firs_Light">{work.category} Design</p>
            ))
          )}
        </div>

        <p className={`hidden sm:block font-TT_Firs_Light`}>
          {designer.nameEng}
        </p>

        <motion.img
          onMouseEnter={bigEnter}
          onMouseLeave={defaultEnter}
          src={`${DOMAIN}${thumbnail.work[thumbnail.worksId - 1].thumbnail}`}
          className="hidden w-[416px] lg:group-hover:block group-hover:fixed absolute top-[327px] right-[300px]"
        />
      </motion.div>
      <div className={`w-full md:w-[90%] sm:w-screen border-b`}></div>
    </Link>
  );
};

export default DesignerList;
