import { useContext } from 'react';
import { SelectorContext } from '../Contexts/SelectorProvider';

const useSelectorContext = () => {
    const context = useContext(SelectorContext);
    return context;
};

export default useSelectorContext;