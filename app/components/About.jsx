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
      <h3>About Component with arrow function for stateless component</h3>
    </div>
  )
}

module.exports = About;
