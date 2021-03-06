import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PlayerX from "./PlayerX.jsx";
import PlayerO from "./PlayerO.jsx";
import Bounce from "../styling/Bounce.jsx";

const MenuBackground = styled.div`
  height: 500px;
  width: 500px;
  background: #4760ff;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &.menu--appear {
    transform: scale(0);
  }
  &.menu--appear-active {
    transform: scale(1);
    transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &.menu--enter {
    transform: rotateY(90deg);
  }
  &.menu--enter-active {
    transform: rotateY(0);
    transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &.menu--exit-active {
    transform: rotateY(90deg);
    transition: transform 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
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

PlayerSelectButton.propTypes = {
  isDisabled: PropTypes.oneOf([0, 1]),
  isAnimated: PropTypes.oneOf([0, 1]),
};

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = { bounceX: 0, bounceO: 0, buttonsDisabled: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id: selectedPlayer } = event.currentTarget;
    const { handleMenuSelection } = this.props;
    handleMenuSelection(selectedPlayer);
  }

  render() {
    const { bounceX, bounceO, buttonsDisabled } = this.state;
    return (
      <MenuBackground>
        <PlayerSelectButton
          id="x"
          onClick={() => this.setState({ bounceX: 1, buttonsDisabled: 1 })}
          onAnimationEnd={this.handleClick}
          isDisabled={buttonsDisabled}
          isAnimated={bounceX}
        >
          <PlayerX isButton={true} />
        </PlayerSelectButton>
        <PlayerSelectButton
          id="o"
          onClick={() => this.setState({ bounceO: 1, buttonsDisabled: 1 })}
          onAnimationEnd={this.handleClick}
          isDisabled={buttonsDisabled}
          isAnimated={bounceO}
        >
          <PlayerO isButton={true} />
        </PlayerSelectButton>
      </MenuBackground>
    );
  }
}

Menu.propTypes = {
  handleMenuSelection: PropTypes.func,
};
