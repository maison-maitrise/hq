import React from "react";
import logo from "../../public/assets/logo.svg";

const Logo = () => {
  return (
    <img
      className="w-[77px] min-w-[77px] max-w-[77px] h-[77px] shrink-0 border-[color:var(--Red-Desire,#F00000)] [background:var(--Dark-Noir,#0F0F0F)] shadow-[0px_0px_4px_0px_rgba(226,165,165,0.50),0px_0px_10px_0px_#F00000,0px_-4px_8px_0px_rgba(240,0,0,0.50)] rounded-[232.031px] border-[0.292px] border-solid"
      src={"/assets/logo.svg"}
      alt="Logo"
    />
  );
};

export default Logo;
