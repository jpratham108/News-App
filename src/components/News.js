import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) =>{

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
   


    const updateNews = async ()=>{

        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
       setLoading(true)
       let data = await fetch(url);
       props.setProgress(30);
       let parsedData = await data.json()
       console.log(parsedData);
       props.setProgress(70);

       setArticles(parsedData.articles);
       setTotalResults(parsedData.totalResults);
       setLoading(false);
       
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])

    // const handlePrevClick = async ()=>{
    //     console.log("Previous");
    //     setPage(page - 1);
    //     updateNews();

    // }

    // const handleNextClick = async ()=>{
    //     console.log("Next");
    //     setPage(page + 1)
    //     updateNews();

    // }

    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        setPage(page+1)

       let data = await fetch(url);
       let parsedData = await data.json()
       console.log(parsedData);

       setArticles(articles.concat(parsedData.articles))
       setTotalResults(parsedData.totalResults)
    //    setLoading(false)
               
      };

        return (
            
            <>
                <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>Daily News - Top {props.category} Headlines</h1>
                {loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={ <Spinner/>}
                >

                <div className="container">

                    <div className="row">
                    {articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                    </div>

                </div>

                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between" style={{margin: '40px 0'}}>
                    <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous </button>
                    <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}> Next &rarr; </button>
                </div> */}

            </>
        
        )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'General',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News