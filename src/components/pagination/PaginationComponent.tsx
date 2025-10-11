import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <div className={'flex flex-row content-center justify-center gap-3'}>
            <button onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()})
                }
            }} className={
                'bg-blue-500 hover:bg-blue-700 transition' +
                ' text-white font-bold' +
                ' py-2 px-4 m-3 rounded'}>Prev</button>

            <button onClick={() => {
                setSearchParams({page: (++currentPage).toString()})
            }} className={
                'bg-blue-500 hover:bg-blue-700 transition' +
                ' text-white font-bold' +
                ' py-2 px-4 m-3 rounded'}>Next</button>
        </div>
    );
};


export default PaginationComponent;