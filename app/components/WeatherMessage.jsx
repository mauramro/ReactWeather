var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props
//     return(
//       <p>The weather in {location} is {temp}.</p>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
    // var {temp, location} = props;
    console.log(temp, location);
    return(
      <p>The weather in {location} is {temp}.</p>
    )
}

module.exports = WeatherMessage;
