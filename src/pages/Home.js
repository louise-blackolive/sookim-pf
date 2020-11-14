import React from "react";
import Avatar from "../images/Coffeeee.jpg";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";

const Home = () => {
  return (
    <React.Fragment>
      <div class="masthead">
        <img class="masthead-avatar" src={Avatar} alt />
        <div class="masthead-name">
          <a class="job">Sookyung Kim</a>
        </div>
        <div>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-star fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
          <i class="fas fa-grip-lines fa-2x masthead-line"></i>
        </div>
        <div class="masthead-tech">
          <a class="tech">AWS - PostgreSQL - EarPods - Coffee</a>
        </div>
      </div>
      <Portfolio />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Home;

// import React from "react";
// import Avatar from "../images/Coffeeee.jpg";
// import Portfolio from "./portfolio";
// import About from "./about";
// import Contact from "./contact";

// const Home = () => {
//   return (
//     <div style={{ height: "100%" }}>
//       <div class="masthead">
//         <img class="masthead-avatar" src={Avatar} alt />
//         <div class="masthead-name">
//           <a class="job">Sookyung Kim</a>
//         </div>
//         <div>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-star fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//           <i class="fas fa-grip-lines fa-2x masthead-line"></i>
//         </div>
//         <div class="masthead-tech">
//           <a class="tech">Blar Blar Blar - EarPods - Coffee</a>
//         </div>
//       </div>
//       <Portfolio />
//       <About />
//       <Contact />
//     </div>
//   );
// };

// export default Home;
