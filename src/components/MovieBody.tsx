import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVideos } from "../redux/action";
import { Card } from "./Card";
import Loading from "./Loading";
import {RootState } from "../types";

export const MovieBody: React.FC = () => {
    const { moviesData, isLoading }: RootState = useSelector((store: RootState) => {
        return { moviesData: store.moviesData, isLoading: store.isLoading };
    }, shallowEqual);

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        getAllVideos(dispatch, currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {new Array(10).fill(0).map((_, index) => <Loading key={index} />)}
            </div>
        );
    }
    return (
        <div className="mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-4">
                {
                    moviesData?.map((el) => {
                        return <Card key={el.postId} {...el} />
                    })
                }
            </div>

            <div className="flex justify-center mt-2">
                <button className={`py-2 px-5 rounded-md mr-4 mt-2 ${currentPage === 0 ? 'bg-red-200 text-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700 text-white'}`} onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
                <p className="text-white mt-3 ml-1 mr-1 font-semibold">{currentPage + 1}</p>
                <button className={`py-2 px-8 rounded-md ml-4 mt-2 ${currentPage === 9 ? 'bg-red-200 text-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700 text-white'}`} onClick={handleNextPage} disabled={currentPage === 9}>Next</button>
            </div>
        </div>
    );
};