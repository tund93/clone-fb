import React from "react";
import Sidebarrow from "./SidebarRow";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <Sidebarrow src={user.photoURL} title={user.displayName} />

      <Sidebarrow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <Sidebarrow Icon={EmojiFlagsIcon} title="Pages" />
      <Sidebarrow Icon={PeopleIcon} title="Friends" />
      <Sidebarrow Icon={ChatIcon} title="Messenger" />
      <Sidebarrow Icon={StorefrontIcon} title="Marketplace" />
      <Sidebarrow Icon={VideoLibraryIcon} title="Videos" />
      <Sidebarrow Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
