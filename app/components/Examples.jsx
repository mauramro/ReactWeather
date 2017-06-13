var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h3>Examples component</h3>
//       </div>
//     )
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Few examples:</p>
      <ol>
        <li><Link to="/?location=Heredia">Heredia</Link></li>
        <li><Link to="/?location=Tibas">Tibas</Link></li>
      </ol>
    </div>
  )
}

module.exports = Examples;
