
import { useState, useEffect } from 'react';

const useFetchMovies = (url) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();

                if (result && result.results) {
                    setData(result.results);
                    setTotal(result.total_pages || 0);
                    setCurrentPage(result.page || 1);
                }
            } catch (error) {
                console.error('Помилка при завантаженні фільмів:', error);
            }
        };

        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, total, currentPage };
};

export default useFetchMovies;
