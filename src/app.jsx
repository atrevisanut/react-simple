import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './shared/AwesomeComponent/AwesomeComponent.jsx';
//tell app to render out party list
import PartyList from './shared/PartyList.jsx';
import AddGuest from './shared/AwesomeComponent/AddGuest.jsx';

import './app.css';

class App extends React.Component {
    render() {
        return (
          // console.log('RENDERING');
            <div className="jumbotron">
                <h1>Hello React!</h1>
                <AwesomeComponent />
                <PartyList /> {/*THIS IS WHERE WE CALL IN THE COMPONENT*/}
                <AddGuest />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
