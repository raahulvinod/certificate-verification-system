import IcBaselineRemoveRedEye from '../assets/IcBaselineRemoveRedEye ';
import MaterialSymbolsCheckSmallRounded from '../assets/MaterialSymbolsCheckSmallRounded';
import Polygon1 from '../assets/Polygon1';
import Vector from '../assets/Vector';

const Cert = () => {
  return (
    <div className="relative w-[1440px] h-[860px] bg-gradient-to-br from-white to-[#FFEADC] overflow-clip rounded-[20px]">
      <IcBaselineRemoveRedEye />
      <p className="absolute left-[120px] top-16 text-[32px] font-semibold text-[#666] font-['Raleway']">
        Go back
      </p>
      <div className="absolute left-[67px] top-[62px] w-[42px] h-[42px] rounded-full bg-[#D9D9D960] backdrop-blur-[70px]" />
      <Vector />

      <div className="absolute left-[303px] top-[178px] w-[835px] h-[504px] bg-white shadow-lg" />

      <div className="absolute left-[332px] top-[211px] w-[776px] h-[438px] bg-transparent border-2 border-[#F42A40] inset-shadow" />

      <p className="absolute left-[459px] top-[238px] text-6xl text-center font-normal text-black font-['PT_Serif']">
        CERTIFICATE
      </p>

      <p className="absolute left-[471px] top-[362px] text-6xl text-center font-normal tracking-[1.28px] text-[#2CA4C6] font-['PT_Serif']">
        Donor name
      </p>

      <p className="absolute left-[459px] top-[322px] text-2xl text-center font-normal text-black font-['PT_Serif']">
        Proudly presented to
      </p>

      <div className="absolute left-[528px] top-[440px] w-96 h-0 border-t border-[#2CA4C6]" />

      <p className="absolute left-[458px] top-[458px] w-[526px] text-center text-base font-light text-black font-['Raleway']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
        nulla, mattis et dolor non, sollicitudin rhoncus augue. Curabitur non
        nunc quam. Orci varius
      </p>

      <p className="absolute left-[419px] top-[551px] text-xl font-normal text-black font-['Raleway']">
        Date
      </p>

      <p className="absolute left-[971px] top-[551px] text-xl font-normal text-black font-['Raleway']">
        Signature
      </p>

      <div className="absolute left-[627px] top-[713px] w-[185.89px] h-[39px] bg-[#F42A40] rounded-[14px]" />

      <p className="absolute left-[672px] top-[719px] text-xl font-semibold text-white font-['Raleway']">
        Download
      </p>

      <div className="absolute left-[397px] top-[257px] w-[60.68px] h-[60.68px] bg-[#2CA4C6] rounded-full" />

      <div className="absolute left-[409.49px] top-[306.08px] w-[34.8px] h-[57.11px] bg-[#2CA4C6]" />

      <Polygon1 />

      <div className="absolute left-[405px] top-[265px] w-11 h-11 bg-white rounded-full" />

      <MaterialSymbolsCheckSmallRounded />
    </div>
  );
};

export default Cert;
