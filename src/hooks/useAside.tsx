import { useState } from 'react';

const useAside = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAside = () => {
        setIsOpen(!isOpen);
    };


    return { isOpen, toggleAside };
};

export default useAside;
