import { useTranslations } from "next-intl";
import Image from "next/image";

import topScrImg from "../../../../../../public/section-3/topscr.webp";
import btmScrImg from "../../../../../../public/section-3/btmscr.webp";
import Preview from "./preview";
import { HeaderText } from "../../common/text/header-text";
import { Wrapper } from "../../common/wrappers/wrapper";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

function TopScreen() {
  return (
    <Image
      src={topScrImg}
      alt="Top Screen"
      className="w-full h-8 md:h-16 select-none relative top-[20px] md:top-[30px]"
      fetchPriority="high"
      priority
    />
  );
}

function BotScreen() {
  return (
    <Image
      src={btmScrImg}
      alt="Bottom Screen"
      className="w-full select-none relative bottom-[20px] md:bottom-[55px]"
      fetchPriority="high"
      priority
    />
  );
}

export const SectionThree = (props: any) => {
  const t = useTranslations("SectionThree");
  return (
    <div className="relative w-full mb-2">
      <TopScreen />
      <AppearWrapper customClass={" bg-white "}>
        <div className="min-h-[80vh] flex items-center justify-center relative z-10 overflow-x-hidden">
          <img
            src={"/section-3/hand1.webp"}
            alt="Hand"
            className="w-[40%] md:w-[20%] absolute left-0 top-0 md:bottom-1/2 translate-y-1/2 select-none -translate-x-[20%]"
          />
          <Wrapper>
            <div className="flex flex-col justify-center items-center gap-24">
              <HeaderText
                customClass={"md:text-6xl text-4xl mt-4 text-center"}
                text={t("1")}
              />
              <a
                className="inline-flex justify-center items-center hover:scale-105 transform ease-in-out duration-300"
                href="https://ar.TRUMPsolana.com/"
                target="_blank"
                rel="noreferrer"
              >
                <picture className="flex justify-center items-center">
                  <source
                    srcSet={"/section-3/vr/qrcode.svg"}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={"/section-3/vr/button.webp"}
                    media="(max-width: 767px)"
                  />
                  <img
                    src={"/section-3/vr/qrcode.svg"}
                    alt="Button"
                    className="w-7/12 rounded-2xl select-none z-50"
                  />
                </picture>
              </a>
              <Preview />
            </div>
          </Wrapper>
          <img
            src={"/section-3/hand2.webp"}
            alt="Hand"
            className="w-[40%] md:w-[20%] absolute right-0 top-0 md:bottom-1/2 translate-y-1/2 select-none translate-x-[20%]"
          />
        </div>
      </AppearWrapper>
      <BotScreen />
    </div>
  );
};
