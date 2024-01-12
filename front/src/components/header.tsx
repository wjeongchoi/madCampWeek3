import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Link to="/tab1" className="tab">탭 1</Link>
            <Link to="/tab2" className="tab">탭 2</Link>
            <Link to="/tab3" className="tab">탭 3</Link>
        </div>
    );
};

export default Header;
