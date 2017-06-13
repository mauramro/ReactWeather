var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h3>About Component</h3>
//       </div>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>Simple weather app, tech used:</p>
      <ul>
        <li>React</li>
        <li>Open Weather Map</li>
      </ul>
    </div>
  )
}

module.exports = About;
