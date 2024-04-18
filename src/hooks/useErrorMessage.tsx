import { useState } from 'react';

const useErrorMessage = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>('');

    const setText = (text: string, time: number) => {
        setErrorMessage(text);
        setTimeout(()=>{setErrorMessage(null)}, time)
    };

    return { errorMessage, setText};
};

export default useErrorMessage;
