// "use client";
//  import React from "react";
// import Typewriter from "typewriter-effect";

// const HomePage = () => {
//   return (
//     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">

//       <br className="hidden lg:inline-block" />
//       <Typewriter
//         options={{
//           strings: ["Snapshot showcase"],
//           autoStart: true,
//           loop: true,
//         }}
//       />
//     </h1>
//   );
// };

// export default HomePage;
"use client";
import { Button } from "@/components/ui/button";
// import React from "react";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 ml-2">
      <h1 className="flex  title-font font-italic sm:text-7xl text-3xl mb-4 mt-4 font-medium text-white">
        <br className="hidden lg:inline-block" />
        <Typewriter
          options={{
            strings: [
              '<span style="color: purple;"><i>Snapshot<i/></span>showcase',
              // '<span style="color: blue;"><i>Snapshot<i/></span>      <br/>  showcase',
              // '<span style="color: green;"><i>Snapshot<i/></span>     <br/>  showcase',
            ],
            autoStart: true,
            loop: true,
            delay: 100, // optional delay between each string
          }}
          // use `react` attribute to allow HTML tags inside strings
          // eslint-disable-next-line react/no-danger
          // react
        />
      </h1>

      <br />
      <br/>
      
      <p className=" mb-8 leading-relaxed font-bold text-white text-2xl md:text-x">
        The Ultimate Photo Gallery Website
      </p>
      <br/>
      <a href="/gallery">
        <button className="flex text-white bg-purple-800 border-0 py-2 px-6 ml-4 focus:outline-none hover:bg-purple-900 rounded text-lg">
          Start Now
        </button>
      </a>
    </div>
  );
};

export default HomePage;
