import { useContext } from 'react';
import SelectorProvider from '../Contexts/SelectorProvider';

const useSelectorContext = () => {
    const context = useContext(SelectorProvider);
    return context;
};

export default useSelectorContext;