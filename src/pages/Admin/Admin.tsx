import React, { useRef } from 'react';
import './SideBar.css';
// import profileImg from '../../images/profile.jpeg';
import avatarImg from '../../images/profileimg.svg';
import { Link, Outlet } from 'react-router-dom';

const Admin: React.FC = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const arrowParent = e.currentTarget.parentElement?.parentElement;
    if (arrowParent != null) {
      arrowParent.classList.toggle('showMenu');
    }
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
          <li>
            <Link to="/admin/test">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link to="/admin/test" className="link_name">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/admin">
                <i className="bx bx-collection"></i>
                <span className="link_name">Category</span>
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
                <Link className="link_name" to="/admin">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/admin">HTML & CSS</Link>
              </li>
              <li>
                <Link to="/admin">JavaScript</Link>
              </li>
              <li>
                <Link to="/admin">PHP & MySQL</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/admin">
                <i className="bx bx-book-alt"></i>
                <span className="link_name">Posts</span>
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
                <Link className="link_name" to="/admin">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/admin">Web Design</Link>
              </li>
              <li>
                <Link to="/admin">Login Form</Link>
              </li>
              <li>
                <Link to="/admin">Card Design</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="link_name">Analytics</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin">
                  Analytics
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin">
              <i className="bx bx-line-chart"></i>
              <span className="link_name">Chart</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin">
                  Chart
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/admin">
                <i className="bx bx-plug"></i>
                <span className="link_name">Plugins</span>
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
                <Link className="link_name" to="/admin">
                  Plugins
                </Link>
              </li>
              <li>
                <Link to="/admin">UI Face</Link>
              </li>
              <li>
                <Link to="/admin">Pigments</Link>
              </li>
              <li>
                <Link to="/admin">Box Icons</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin">
              <i className="bx bx-compass"></i>
              <span className="link_name">Explore</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin">
                  Explore
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin">
              <i className="bx bx-history"></i>
              <span className="link_name">History</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin">
                  History
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin">
              <i className="bx bx-cog"></i>
              <span className="link_name">Setting</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin">
                  Setting
                </Link>
              </li>
            </ul>
          </li>
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
