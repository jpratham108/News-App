// import React, { Component } from 'react'

// export class NewsItem extends Component {

//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//     return (
//       <div className="my-5">
//         {/* This is a news item */}
//         <div className="card" >

//           <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'92%', zIndex: '1' }} >
//             {source}
//           </span>
//   <img src={imageUrl ? imageUrl : "data:image/jpeg;base64,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"}
//             className="card-img-top" alt="..." />

//           <div className="card-body">
//             <h5 className="card-title"> {title} </h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()
//             }</small></p>

//             <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem


import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://gaadiwaadi.com/wp-content/uploads/2023/06/triumph-speed-400-2.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem