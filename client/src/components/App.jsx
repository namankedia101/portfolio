import React from "react";
import Cover from "./Cover";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <div>
    <Cover />
    <Skills />
    <Footer/>
    </div>
  );
}

export default App;
