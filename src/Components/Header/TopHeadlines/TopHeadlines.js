import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadlines = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-05&sortBy=publishedAt&apiKey=77427e77ace04a959e8c2a6221fe7f71';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article = {article}></News>)
            }
        </div>
    );
};

export default TopHeadlines;