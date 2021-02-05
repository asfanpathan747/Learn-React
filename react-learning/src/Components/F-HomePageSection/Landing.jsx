import React from "react";
import "./Landing.css";
import { HeaderSection } from "../A-HeaderSection/HeaderSection";
import { LeftNavigationSection } from "../B-LeftNavigationSection/LeftNavigationSection";
import { MainBodySection } from "../C-BodySection/MainBodySection";
import { RightNavigationSection } from "../D-RightNavigationSection/RightNavigationSection";
import { FooterSection } from "../E-FooterSection/FooterSection";
export const Landing = () => {
    return (
        <div>
            <HeaderSection/>
            <LeftNavigationSection/>
            <MainBodySection/>
            <RightNavigationSection/>
            <FooterSection/>
        </div>
      );
}
 