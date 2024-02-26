import React from 'react';

const RightSection: React.FC = () => {
  return (
    <div className="rightPane">
      {/* Infinite scrolling content goes here */}
      <div className="section">Section 1</div>
      <div className="section">Section 2</div>
      {/* More sections can be added dynamically */}
    </div>
  );
}

export default RightSection;
