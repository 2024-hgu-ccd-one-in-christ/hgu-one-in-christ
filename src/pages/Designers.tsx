import PageInfo from "../components/common/PageInfo";
import DesignerList from "../components/designers/DesignerList";
import { DESIGNERS } from "../constants/designers";

const Designers = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <PageInfo>DESIGNERS</PageInfo>
      <div className="w-full lg:max-w-lg mt-[227px] sm:mt-[170px] mb-[206px] sm:mb-[122px]">
        {DESIGNERS.map((designer) => (
          <DesignerList designer={designer} />
        ))}
      </div>
    </div>
  );
};

export default Designers;
