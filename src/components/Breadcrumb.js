import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item${index === items.length - 1 ? ' active' : ''}`}
            aria-current={index === items.length - 1 ? 'page' : null}
          >
            {item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;