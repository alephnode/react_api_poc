import React from 'react';
import $ from 'jquery';

class CandidateInfo extends React.Component {
  constructor(){
    super();
    this.state = {value: ""}
  }
componentDidMount(){
  //enable us to maintain scope for setting state w/i ajax request
  let _this = this;
  let url = this.props.source;
  url += '?' + $.param({
  'api-key': "a191f4cd23e9401f9ab75a7f3c214fd7"
})
this.serverRequest = $.ajax({
  url: url,
  method: 'GET',
  success: function(result) {
    let data = result.results[0];
    _this.setState({value: data.name});
  }
})
}
render(){
  return(
    <h2>{this.state.value}</h2>
  );
}
}
export default CandidateInfo;
