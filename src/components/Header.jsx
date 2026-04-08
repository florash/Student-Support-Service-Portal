import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-block" aria-label="Student Support Service Portal">
          <p className="eyebrow">Canberra Student Services</p>
          <NavLink className="brand-link" to="/">
            Student Support Service Portal
          </NavLink>
          <p className="brand-meta">For university and public education support enquiries</p>
        </div>
        <nav className="primary-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
