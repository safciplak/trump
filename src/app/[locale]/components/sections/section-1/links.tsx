import {TELEGRAM, TWITTER,} from "@/app/[locale]/urls";



const buttonClass =
  " select-none orange-link font-bold cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105";

const iconClass = "w-12 h-12 fill-[#111827] 2xl:h-20 2xl:w-20";

export const Links = (props: any) => {
  return (
    <div className="w-full z-50 flex justify-center gap-10 gap-y-4 lg:gap-24 flex-row flex-wrap max-w-screen-2xl ">
      <a target="_blank" href={TWITTER} className={buttonClass}>
      <img src="./banner/x.png"/>
      </a>
      <a target="_blank" href={TELEGRAM} className={buttonClass}>
        <img src="./banner/telegram.png"/>
      </a>
    </div>
  );
};
