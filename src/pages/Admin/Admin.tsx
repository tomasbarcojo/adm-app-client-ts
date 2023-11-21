import React, { useRef } from 'react';
import './SideBar.css';
// import avatarImg from '../../images/profileimg.svg';
import avatarImg from '../../images/profile.jpeg';
import { Link, Outlet } from 'react-router-dom';
import { sideBarRoutes } from 'routes/routes';

const Admin: React.FC = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const arrowParent = e.currentTarget.parentElement?.parentElement;
    if (arrowParent != null) arrowParent.classList.toggle('showMenu');
  };

  const handleToggleSideBar = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    if (sideBarRef != null) {
      sideBarRef.current?.classList.toggle('close');
    }
  };

  return (
    <div>
      <div className="sidebar close" ref={sideBarRef}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Activa</span>
        </div>
        <ul className="nav-links">
          {sideBarRoutes.children.map((route) =>
            route.type === 'title' ? (
              <li key={route.key}>
                <Link to={route.path ?? ''}>
                  <i className={route.icon}></i>
                  <span className="link_name">{route.name}</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link to={route.path ?? ''} className="link_name">
                      {route.name}
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li key={route.key}>
                <div className="icon-link">
                  <Link to={route.defaultPath ?? 'dashboard'}>
                    <i className={route.icon}></i>
                    <span className="link_name">{route.name}</span>
                  </Link>
                  <i
                    className="bx bxs-chevron-down arrow"
                    onClick={handleClick}
                    role="button"
                    tabIndex={0}
                  ></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link
                      className="link_name"
                      to={route.defaultPath ?? 'dashboard'}
                    >
                      {route.name}
                    </Link>
                  </li>
                  {route.children?.map((child) => (
                    <li key={child.key}>
                      <Link to={`${route.path}/${child.path}`}>
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={avatarImg} alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Desginer</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="dark-overlay"
        onClick={handleToggleSideBar}
        role="button"
        tabIndex={0}
      >
        {' '}
      </div>
      <section className="home-section">
        <div className="home-content">
          <i
            className="bx bx-menu"
            onClick={handleToggleSideBar}
            role="button"
            tabIndex={0}
          ></i>
          <span className="text">Drop Down Sidebar</span>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Admin;
