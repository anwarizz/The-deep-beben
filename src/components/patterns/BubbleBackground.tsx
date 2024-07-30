import React, { useEffect, useState } from 'react';
import Bubble from './Bubble';

const BubbleBackground: React.FC = () => {
    const [bubbles, setBubbles] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        const bubbleCount = 100;
        const bubbleArray: React.CSSProperties[] = [];

        for (let i = 0; i < bubbleCount; i++) {
            bubbleArray.push({
                top: `${Math.random() * 4000}px`,
                left: `${Math.random() * window.innerWidth}px`,
                width: `${Math.random() * 5}px`,
                height: `${Math.random() * 5}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
            });
        }

        setBubbles(bubbleArray);
    }, []);

    return (
        <div className="relative w-full h-[4000px] overflow-hidden">
            {bubbles.map((style, index) => (
                <Bubble key={index} style={style} />
            ))}
        </div>
    );
};

export default BubbleBackground;
