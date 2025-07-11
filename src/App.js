// // import './App.css';

// // import React, { Component } from 'react'
// // import NavBar from './component/NavBar';
// // import News from './component/News';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from "react-router-dom";

// // export default class App extends Component {
// //   pageSize=6;
// //   render() {
// //     return (
// //       <div>
// //         <Router>
// //         <NavBar/>
      
// //         <Routes>
// //           <Route exact path="/" element={ <News key='general'  pageSize={this.pageSize} country="in" category="general"/>}></Route>
// //           <Route exact path="/Business" element={ <News key='business'  pageSize={this.pageSize} country="in" category="business"/>}></Route>
// //           <Route exact path="/Entertainment" element={<News key='entertainment'  pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
// //           <Route exact path="/General" element={ <News key='general'  pageSize={this.pageSize} country="in" category="general"/>}></Route>
// //           <Route exact path="/Health" element={ <News key='health'  pageSize={this.pageSize} country="in" category="health"/>}></Route>
// //           <Route exact path="/Science" element={ <News key='science'  pageSize={this.pageSize} country="in" category="science"/>}></Route>
// //           <Route exact path="/Sports" element={ <News key='sports'  pageSize={this.pageSize} country="in" category="sports"/>}></Route>
// //           <Route exact path="/Technology" element={ <News  key='technology}>' pageSize={this.pageSize} country="in" category="technology"/>}></Route>
// //         </Routes>
        
// //         </Router>
// //       </div>
// //     )
// //   }
// // }


// import './App.css';

// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// // import LoadingBar from 'react-top-loading-bar'

// const App = ()=> {
//   const pageSize = 5;
//   const apiKey = process.env.REACT_APP_NEWS_API
//   const [setProgress] = useState(0)
 
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         {/* <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress} 
//       /> */}
//         <Routes>
//           <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Routes>
//         </Router>
//       </div>
//     )
 
// }

// export default App;



import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = ()=> {

const pageSize = 6;
const apiKey = process.env.REACT_APP_NEWS_API
console.log("API Key:", apiKey);


const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>

        
        <NavBar/>
        
        <LoadingBar
        color='#f11946'
        progress={progress}
        />

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key= "General" pageSize ={pageSize} country= "us" category='General' />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key= "Business" pageSize ={pageSize} country= "us" category='Business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key= "Entertainment" pageSize ={pageSize} country= "us" category='Entertainment' />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key= "General" pageSize ={pageSize} country= "us" category='General' />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key= "Health" pageSize ={pageSize} country= "us" category='Health' />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key= "Science" pageSize ={pageSize} country= "us" category='Science' />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key= "Sports" pageSize ={pageSize} country= "us" category='Sports' />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key= "Technology" pageSize ={pageSize} country= "us" category='Technology' />} />

          
        </Routes>

        </BrowserRouter>
      </div>
    )

}
// console.log("API Key from .env:", apiKey);
export default App