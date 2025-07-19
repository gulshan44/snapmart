import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
            <ul className="space-y-3">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.to}
                            className="transition text-gray-600 hover:text-indigo-600 hover:pl-1"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
