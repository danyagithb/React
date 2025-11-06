import {type FC, memo} from "react";

const IteratorComponent: FC<{ foo: () => void, arr: number[] }> = memo(({arr}) => {

    console.log(arr);

    for(let i: number = 0; 10 > i; i++) {
        console.log(i);
    }

    return (
        <div>
            iterator
        </div>
    );
});

// memo() Не дает возможности сработать итератору во второй раз

export default IteratorComponent;