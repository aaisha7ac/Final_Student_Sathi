import React, { useState } from 'react';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [activePage, setActivePage] = useState(1); // State to track active page

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    paginate(number); // Call paginate function to update the page content
    setActivePage(number); // Update active page
  };

  return (
    <div className="center">
      <div className='pagination'>
        {pageNumbers.map(number => (
          <a
            key={number}
            onClick={() => handleClick(number)}
            className={`page-link ${activePage === number ? 'active' : ''}`}
          >
            {number}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
