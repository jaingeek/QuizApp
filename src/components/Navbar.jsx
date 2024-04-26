import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };

  return (
    <div className='navbar'>
      <span className='logo'>TechnicalQuiz</span>
      <ul>
        <li>
          <Link to='/jq' className={`link ${activeLink === 1  ? 'active' : ''}`} onClick={() => handleClick(1)}>JavaQuestion</Link>
        </li>
        <li>
          <Link to='/pq' className={`link ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>PythonQuestion</Link>
        </li>
        <li>
          <Link to='/sq' className={`link ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>SQLQuestion</Link>
        </li>
      </ul>
    </div>
  );
}
