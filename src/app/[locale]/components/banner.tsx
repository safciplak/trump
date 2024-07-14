"use client";

import { useState } from "react";
import { SwitchLang } from "./switch-lang";
import { HeaderText } from "./common/text/header-text";
import Image from "next/image";
import {PUMP_FUN} from "@/app/[locale]/urls";
import bear from "../../../../public/banner/bear.webp";
import lamp from "../../../../public/banner/lamp.webp";
import {Links} from "./sections/section-1/links";
import {BigText} from "./common/text/big-text";
import {CopyCa} from "./common/copy-ca";

const imgClass = "cursor-pointer mb-4 w-44 md:mb-0 lg:w-56";

export const Banner = (props: any) => {
  const [showBanner, setShowBanner] = useState(true);

  const onClick = () => {
    document.body.style.overflow = "auto";
    // setShowBanner(false);
    window.location.href = PUMP_FUN;
  };

  const onHover = (e: any) => {
    const noButton = document.querySelector("#noButton");
    if (!noButton) {
      return;
    }
    //@ts-ignore
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    //@ts-ignore
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    //@ts-ignore
    noButton.style.position = "absolute";
    //@ts-ignore
    noButton.style.left = `${x}px`;
    //@ts-ignore
    noButton.style.top = `${y}px`;
  };

  return (
    <>

      {showBanner ? (
          <div className="w-full min-h-screen bg-black flex flex-col justify-center overflow-hidden items-center relative">
          <Image
              style={{marginTop:100}}
            className="w-full md:w-1/3 absolute top-0 md:left-0 z-0 transform -translate-y-[20%] select-none"
            src={lamp}
            alt="lamp"
            priority
            fetchPriority="high"
          />
          <Image
            className="w-full md:w-1/3 absolute bottom-0 right-0 z-0 transform translate-y-[10%] translate-x-[12% select-none"
            src={bear}
            alt="bear"
            priority
            fetchPriority="high"
          />
          <div className="h-full flex flex-col justify-center items-center gap-6">
            <HeaderText
              text={props.t1}
              customClass="md:text-4xl text-white text-3xl"
            />
            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 lg:space-x-4">
              <div className="lg:min-w-56 min-w-44">
                <img
                  onClick={onClick}
                  className={imgClass + " z-50 relative"}
                  src="./banner/yes.webp"
                />
              </div>
              <div
                className="lg:min-w-56 min-w-44 mb-16 md:mb-0 "
                onMouseEnter={onHover}
              >
                <img
                  id="noButton"
                  className={
                    imgClass +
                    " transition transform duration-300 ease-in-out md:opacity-100 opacity-20"
                  }
                  src="./banner/no.webp"
                />
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 400,
            marginRight: 600,
          }}>
            <Links />
            <BigText customClass={"text-center z-[100]"} text={"TRUMP WIN EAR"} />
            <CopyCa />
          </div>
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};
