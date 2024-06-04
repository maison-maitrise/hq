import React from "react";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="flex w-full justify-between items-center [background:linear-gradient(0deg,rgba(15,15,15,0.00)_0%,#0F0F0F_20.94%)] px-[166px] py-[24px] text-neon-red sticky top-0 max-lg:flex-col">
      <div className="flex items-start gap-[67px] pl-[13px] pr-[30px] py-0 max-lg:hidden">
        <a className="text-neon-red" href="/6">
          #PhilosophyOfValentine
        </a>
        <a href="/214">#SunsetValentine</a>
        <a href="/814">#SummerValentine</a>
      </div>
      <a href="/">
        <Logo />
      </a>
      <div className="flex items-start gap-[43px] lg:pl-[51px] lg:pr-[67px] py-0 max-lg:hidden">
        <a href="/voice">#VoiceOfValentine</a>
        <a href="/speak">#AmbassadorsOfValentine</a>
        <a href="/connect">Contact Us</a>
      </div>
    </nav>
  );
};

export default Nav;
