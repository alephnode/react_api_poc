import React from 'react';
import CandidateInfo from './CandidateInfo';

let url = 'http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/house/nv/1/current.json'

class App extends React.Component {
render(){
	return(<div>
					<h1>Hello world!</h1>
				<CandidateInfo source={url} />
				</div>);
}
}

export default App;
