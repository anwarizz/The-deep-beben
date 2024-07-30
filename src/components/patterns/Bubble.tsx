import React from 'react';

interface BubbleProps {
    style: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ style }) => {
    return (
        <div 
            className="bg-[#ffffff81] bg-opacity-80 rounded-full absolute animate-float"
            style={style}
        />
    );
};

export default Bubble;
