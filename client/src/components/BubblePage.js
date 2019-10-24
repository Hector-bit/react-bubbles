import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .post('/api/colors')
    .then(res => {
      console.log(res);
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  }, [] );
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  return (
    <>
    {console.log(colorList)}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// class BubblePage extends React.Component {
//     state = {
//         colorList: []
//     };

//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {
//         axiosWithAuth()
//             .get('/api/colors')
//             .then(res => {
//                 // console.log(res.data)
//                 const color = res.data
//                 this.setState({ colorList: color })
//             })
//             .catch(res => {
//                 console.log(res)
//             })
//     }

//     // forceUpdate()

//   render(){
//     console.log(this.state.colorList)
//     return (
//       <>
//         <ColorList colors={this.state.colorList} updateColors={this.state.colorList} />
//         <Bubbles colors={this.state.colorList} />
//       </>
//     )
// }
// }

// export default BubblePage;
