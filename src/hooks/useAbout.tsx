import { useState } from 'react';

const useAbout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openAbout = () => {
        setIsOpen(true);
    };

    const closeAbout = () => {
        setIsOpen(false);
    };

    return { isOpen, openAbout, closeAbout };
};

export default useAbout;
