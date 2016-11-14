import React from 'react';
//will only display

class AddGuest extends React.Component{
  constructor(props){
    super(props)
  this.handleClick = this.handleClick.bind(this)
    //every component has it's own state, which will be different from other components
  }
  handleClick(){
    console.log(this.textInput.value);
  }
  render(){
    return(
      <div>
        <ul>Add Guest</ul>
        <input ref = {ref => this.textInput = ref}></input>
        <button onClick={this.handleClick}>AddGuest</button>
      </div>
    )
  }
}
export default AddGuest;
