import React from 'react';
import './BoothTag.css';

interface BoothTagProps {
  booth: string;
}

const BoothTag: React.FC<BoothTagProps> = ({ booth }) => {
  return (
    <div className="booth-tag-container">
      <span className="booth-tag-text">{booth}</span>
    </div>
  );
};

export default BoothTag;