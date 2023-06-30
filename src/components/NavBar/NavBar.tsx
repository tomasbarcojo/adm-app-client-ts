import { type ReactNode, useState, useEffect, type FC } from 'react';
import './NavBar.css';
import notificationIcon from '../../images/notifications.svg';
import profileimg from '../../images/profileimg.svg';

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: FC<NavBarProps> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.title = `(${count}) Dashboard`;
    } else {
      document.title = 'Dashboard';
    }
  }, [count]);

  const handleClick = (): number => {
    setCount(count + 1);
    return count + 1;
  };

  return (
    <div className="NavBarContainer">
      <div className="NavBarTitle">Dashboard</div>
      <div className="NavBarBtn">
        <button className="NotificationBtn" onClick={handleClick}>
          {' '}
          <img src={notificationIcon} alt="Notification Logo"></img>
          {count > 0 && <span className="count">{count}</span>}
        </button>
        <button className="ProfileBtn">
          <h4>Tomas Barcojo</h4>
          <img src={profileimg} alt="profile"></img>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
