import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

import {
  FaHome,
  FaCompass,
  FaBook,
  FaFolder,
  FaHistory,
  FaDownload,
  FaSignInAlt,
  FaBolt,
} from "react-icons/fa";

const menuItems = [
  {
    icon: <FaHome />,
    title: "Home",
    active: true,
  },
  {
    icon: <FaCompass />,
    title: "Discover",
  },
  {
    icon: <FaBook />,
    title: "Library",
  },
  {
    icon: <FaFolder />,
    title: "Collections",
  },
  {
    icon: <FaHistory />,
    title: "History",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}

      <div className="logo">
        <FaBolt className="logo-icon" />
        <span>perplexity</span>
      </div>

      {/* Navigation */}

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            title={item.title}
            active={item.active}
          />
        ))}
      </nav>

      {/* Pro Card */}

      <div className="pro-card">
        <h4>Try Pro</h4>

        <p>
          Upgrade to unlock more Pro Search, file upload, and image generation.
        </p>

        <button>Learn More</button>
      </div>

      {/* Bottom */}

      <div className="sidebar-bottom">
        <SidebarItem
          icon={<FaDownload />}
          title="Download"
        />

        <SidebarItem
          icon={<FaSignInAlt />}
          title="Sign In"
        />
      </div>
    </aside>
  );
}

export default Sidebar;