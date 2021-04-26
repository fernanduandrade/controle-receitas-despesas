import {useMemo} from 'react';

const HandleBalanceValues = (array, str) => {
    const total = useMemo(() => {
        if(str) {
            const searchValues = array.filter(element => element.register_type === str)
            return searchValues.reduce((acc, element) => {
                return acc + element.expense
            }, 0);
        }

        return array.reduce((acc, element) => {
            return acc + element.expense
        }, 0);
    }, [array, str]);

    return total;
};

export default HandleBalanceValues;