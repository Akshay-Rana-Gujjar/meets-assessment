import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import { DiscoverIcon, InvieIcon, MenuIcon, SupportIcon } from "../Icons";

export default function Header() {

	const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="header-mweb-menu" onClick={()=>setShowMenu(true)}>
          <MenuIcon />
        </div>
        <div className="header-logo-img align-center">
          <img
            src={logo}
            alt="meetworks logo"
            className="header-logo-img-image"
          />
        </div>
        <div className="header-links">
          <div className="header-link-item active">
            <div className="header-link-item-icon header-discover-link">
              <DiscoverIcon />
            </div>
            <div className="hedaer-link-item-text">Discover</div>
          </div>
          <div className="header-link-item">
            <div className="header-link-item-icon">
              <InvieIcon />
            </div>
            <div className="hedaer-link-item-text">Invite</div>
          </div>
          <div className="header-link-item">
            <div className="header-link-item-icon">
              <SupportIcon />
            </div>
            <div className="hedaer-link-item-text">Support</div>
          </div>
        </div>
        <div className="header-cta-buttons align-center">
          <div className="header-cta btn-border" role="button">
            Post Job
          </div>
          <div className="header-cta btn-fill" role="button">
            Sign In
          </div>
        </div>
      </div>

      <div className={"header-mweb-parent-container "+(showMenu && 'show')} onClick={()=>setShowMenu(false)} >
        <div className="header-mweb-container">
          <div className="header-links">
            <div className="header-link-item active">
              <div className="header-link-item-icon header-discover-link">
                <DiscoverIcon  size={35}/>
              </div>
              <div className="hedaer-link-item-text">Discover</div>
            </div>
            <div className="header-link-item">
              <div className="header-link-item-icon">
                <InvieIcon  size={35}/>
              </div>
              <div className="hedaer-link-item-text">Invite</div>
            </div>
            <div className="header-link-item">
              <div className="header-link-item-icon">
                <SupportIcon size={35} />
              </div>
              <div className="hedaer-link-item-text">Support</div>
            </div>
          </div>
          <div className="header-cta-buttons align-center">
            <div className="header-cta btn-border" role="button">
              Post Job
            </div>
            <div className="header-cta btn-fill" role="button">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
