import React from "react";
import styled from "styled-components";
import PlayerX from "./PlayerX.jsx";
import PlayerO from "./PlayerO.jsx";
import Bounce from "./Bounce.jsx";

const MenuBackground = styled.div`
  height: 500px;
  width: 500px;
  background: #4760ff;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PlayerSelectButton = styled.button`
  width: 20%;
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};
  transition: filter 0.5s, transform 0.5s;
  ${(props) => (props.isAnimated ? Bounce : "")};

  &:hover {
    filter: brightness(1.5);
    transform: scale(1.2);
  }
`;

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = { bounceX: 0, bounceO: 0, buttonsDisabled: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id: selectedPlayer } = event.currentTarget;
    this.props.handleSelection(selectedPlayer);
  }

  render() {
    return (
      <MenuBackground>
        <PlayerSelectButton
          id="x"
          onClick={() => this.setState({ bounceX: 1, buttonsDisabled: 1 })}
          onAnimationEnd={this.handleClick}
          isDisabled={this.state.buttonsDisabled}
          isAnimated={this.state.bounceX}
        >
          <PlayerX isButton={true} />
        </PlayerSelectButton>
        <PlayerSelectButton
          id="o"
          onClick={() => this.setState({ bounceO: 1, buttonsDisabled: 1 })}
          onAnimationEnd={this.handleClick}
          isDisabled={this.state.buttonsDisabled}
          isAnimated={this.state.bounceO}
        >
          <PlayerO isButton={true} />
        </PlayerSelectButton>
      </MenuBackground>
    );
  }
}
