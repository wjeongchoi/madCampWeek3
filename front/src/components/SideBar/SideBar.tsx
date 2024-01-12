/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { SidebarButton } from "../SidebarButton";
import "./style.css";

interface Props {
  className: any;
  sidebarButtonPropertyDefaultClassName: any;
  sidebarButtonPropertyDefaultClassNameOverride: any;
  sidebarButtonPropertyClassName: any;
  sidebarButtonPropertyClassNameOverride: any;
  sidebarButtonPropertyVariantClassName: any;
  sidebarButtonPropertyVariantClassNameOverride: any;
  sidebarButtonDivClassName: any;
}

export const SideBar = ({
  className,
  sidebarButtonPropertyDefaultClassName,
  sidebarButtonPropertyDefaultClassNameOverride,
  sidebarButtonPropertyClassName,
  sidebarButtonPropertyClassNameOverride,
  sidebarButtonPropertyVariantClassName,
  sidebarButtonPropertyVariantClassNameOverride,
  sidebarButtonDivClassName,
}: Props): JSX.Element => {
  return (
    <div className={`side-bar ${className}`}>
      <div className="frame">
        <SidebarButton className={sidebarButtonPropertyDefaultClassName} property1="variant-2" />
        <SidebarButton className={sidebarButtonPropertyDefaultClassNameOverride} property1="variant-2" />
        <SidebarButton className={sidebarButtonPropertyClassName} property1="variant-2" />
        <SidebarButton className={sidebarButtonPropertyClassNameOverride} property1="variant-2" />
        <SidebarButton className={sidebarButtonPropertyVariantClassName} property1="variant-2" />
        <SidebarButton className={sidebarButtonPropertyVariantClassNameOverride} property1="variant-2" />
        <SidebarButton className={sidebarButtonDivClassName} property1="variant-2" />
      </div>
    </div>
  );
};
