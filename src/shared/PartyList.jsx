// ALWAYS IMPORT REACT
import React from 'react';
//capitalize each word (pascal case) in file name because this is like a constructor function
class PartyList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      guests: ['batman','superman','normal guy']
    }
    //every component has it's own state, which will be different from other components
  }
  //going to have a list of guests to invite to the PartyList/
  //always renders something in class
  render(){
    var guestList= []; //[<li>Batman</li>, <li>superman</li>]  //this is an array  with html, cool!
    for(var i = 0; i < this.state.guests.length; i++){
      guestList.push(<li>{this.state.guests[i]}</li>) 
    }
    //Must have one root level div
return(
    <div>
      <ul>Party List!!</ul> {/**/}
      {guestList}
      {/* {this.state.guests} this will smuch them all together*/}
      {/* {2*2} this will do javascript*/}
    </div>
  )
    //must return jsx
  }
}

export default PartyList;
//now we go to app.jsx


//download a jsx linter for atom
