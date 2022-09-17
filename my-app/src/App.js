import './App.css';
import Users from './pages/users/Users';
// import Navbar from './components/navbar/Navbar';
// import './components/navbar/Navbar.css'
// import Overview from './components/overview/Overview';
// import './components/overview/Overview.css'
// import Promise from './components/promise/Promise';
// import './components/promise/Promise.css'


function App() {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;

// {/* <Navbar/> */}
// <div className='navbar'>
//   <div className="nav-contain">
//     <p className="logo">The Rudras</p>
//     <p className="desc">Election campaign promise tracker</p>
//   </div>
// </div>
// {/* <Overview/> */}
// <div className='overview'>
//   <div className="overview-contain">
//       <p  className="contestant">Contestant Overview</p>
//       <div className="cont-over">
//           <div className="fullfiled prom">Fullfiled Promises: <br /> <span>2</span> </div>
//           <div className="ongoing prom">Ongoing Promises: <br /> <span>5</span></div>
//           <div className="unfullfiled prom">Unfullfiled Promises: <br /> <span>20</span></div>
//       </div>
//   </div>
// </div>
// {/* <Promise/> */}
// <div className='promise'>
//   <div className="promise-contain">
//       <p className="promise-head">Promises</p>
//       <div className="promise-list">
//         <div className="list-head">
//           <p className='id'>ID</p>
//           <p className='proms'>Promise</p>
//           <p className='stat'>Status</p>
//         </div>
//         <ul>
//           <li className='id'>1</li>
//           <li className='proms'>Education</li>
//           <li className='stat'>Ongoing</li>
//         </ul>
//         <ul>
//           <li className='id'>1</li>
//           <li className='proms'>Education</li>
//           <li className='stat'>Ongoing</li>
//         </ul>
//         <ul>
//           <li className='id'>1</li>
//           <li className='proms'>Education</li>
//           <li className='stat'>Ongoing</li>
//         </ul>
//         <ul>
//           <li className='id'>1</li>
//           <li className='proms'>Education</li>
//           <li className='stat'>Ongoing</li>
//         </ul>
//       </div>
//   </div>
// </div>