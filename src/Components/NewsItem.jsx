import React from "react";

function  NewsItem(props){
    let { title, description, imgUrl, detailUrl, author, date ,source} = props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
              <span className=" badge rounded-pill bg-danger">
                        {source}
                  </span>
          </div>
            
          <img
            src={imgUrl}
            className="card-img-top"
            style={{ height: "140px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {author ? author : "Unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={detailUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem;