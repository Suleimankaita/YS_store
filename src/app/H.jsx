// import { useState, useEffect } from 'react';

// const ScrollHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`header ${isScrolled ? 'scrolled' : ''}`} style={isScrolled?{backgroundColor:"black"} :null}>
//       <div className="header-container">
//         <div className="logo">Your Logo</div>
//         <nav>
//           <ul className="nav-list">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </nav>
//   );
// };

// export default ScrollHeader;