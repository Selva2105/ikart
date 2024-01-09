import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
    label: string;
    url: string;
    className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, url, className }) => {
    return (
        <Link to={url} className={className}>{label}</Link>
    );
}

export default NavItem;
