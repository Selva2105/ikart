import React, { useEffect, useState } from 'react';

interface TextLoaderProps {
    texts?: string[];
}

const TextLoader: React.FC<React.PropsWithChildren<TextLoaderProps>> = ({
    texts = ['Loading', 'Please wait', 'Almost there', 'Just a moment', 'Almost done!'],
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (texts.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 2000); // Change the duration as needed

            return () => clearInterval(interval);
        }
    }, [texts]);

    return (
        <div className="flex items-center justify-center font-inter">
            <div className="flex">
                {texts[currentIndex] && (
                    <span key={currentIndex} className={`mx-1 animate-slide font-inter`}>
                        {texts[currentIndex]}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TextLoader;
