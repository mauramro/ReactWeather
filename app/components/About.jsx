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
      <h3>About</h3>
      <p>About page</p>
    </div>
  )
}

module.exports = About;
