import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <>
        <div id={idName} className={`app__container ${classNames}`}>
          <SocialMedia />

          <div className="app__wrapper app__flex">
            <Component />

            <div className="copyright">
              <p class="p-text">@2023 SAIN</p>
              <p class="p-text">All rights reserved</p>
            </div>
          </div>

          <NavigationDots active={idName} />
        </div>
      </>
    );
  };

export default AppWrapper;
