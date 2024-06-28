import React, { useEffect ,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News (props) {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews=async()=> {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?${props.country}&category=${props.category}&language=en&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false)
    props.setProgress(100)
    
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} Newsmonkey`;
    updateNews()
  }, []);
//   const handleNxtBtn = async () => {
//    setPage(page+1)
//     updateNews();
//   };

//  const handlebackBtn = async () => {
//    setPage(page-1)
//     updateNews();
//   };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?${props.country}&category=${props.category}&language=en&apiKey=452994071aca4b9cb43614ef5d509d2d&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults)
  };

    return (
      <div>
        <h2 className="text-center my-4" style={{marginTop:'300px'}}>
          This is newsMonkey on{" "}
          {capitalizeFirstLetter(props.category)}
        </h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => (
                <div key={element.id} className="col-md-4 col-sm-12 my-2">
                  <NewsItem
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/22/USAT/73072171007-usatsi-22816449.jpg?crop=4031,2268,x0,y0&width=3200&height=1801&format=pjpg&auto=webp"
                    }
                    title={element.title ? element.title.slice(0, 25) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 40)
                        : ""
                    }
                    detailUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container my-3">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" onClick={this.handlebackBtn} className="btn btn-dark">&larr; Previous</button>
                        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" onClick={this.handleNxtBtn} className="btn btn-dark">Next &rarr;</button>
                    </div>
               </div> */}
      </div>
    );
}
News.defaultProps = {
  country: "us",
  pageSize: 18,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;