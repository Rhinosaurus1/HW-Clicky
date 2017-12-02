import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import PanelBody from "./components/PanelBody";
import "./App.css";

  function shuffledArray(array){
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
  };

  
class App extends Component {

  state = {
    friends, count:0 , myArray: [], myID: 0
  };

  handleIncrement = id => {
    this.setState({ count: this.state.count + 1 });
    this.setState({myID: id});
    const myArray2 = this.state.myArray.slice()
    myArray2.push(this.state.myID);
    this.setState({myArray: myArray2});
  };

  render() {
    const shuffledPosts = shuffledArray(this.state.friends);
    console.log(this.state.myArray);
    console.log(this.state.myID);
    return (
      <Wrapper>
        <Title>
        	<div className="panel panel-primary">
            <div className="panel-heading">Memory Game!</div>
              <PanelBody
                count={this.state.count}
              />
          </div>
        </Title>

        {shuffledPosts.map(friend => (

          <FriendCard
            handleIncrement = {this.handleIncrement}
            id={friend.id}
            key = {friend.id}
            image={friend.image}
          />

        ))}
      </Wrapper>
    );
  }
}

export default App;
