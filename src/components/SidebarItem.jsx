function SidebarItem({ icon, title, active }) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <span className="sidebar-icon">{icon}</span>

      <span>{title}</span>
    </div>
  );
}

export default SidebarItem;