import React from "react";
import styled from "styled-components";

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
  animation: ${(props) => (props.isAnimated ? "bounce 0.3s linear 0s 1" : "")};

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 51.6 51.6"
            style={{ enableBackground: "new 0 0 51.6 51.6" }}
            xmlSpace="preserve"
          >
            <line className="line" x1="10.4" y1="10" x2="41.2" y2="41.6" />
            <line className="line" x1="41.6" y1="10.4" x2="10" y2="41.2" />
          </svg>
        </PlayerSelectButton>
        <PlayerSelectButton
          id="o"
          onClick={() => this.setState({ bounceO: 1, buttonsDisabled: 1 })}
          onAnimationEnd={this.handleClick}
          isDisabled={this.state.buttonsDisabled}
          isAnimated={this.state.bounceO}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            style={{ enableBackground: "new 0 0 60 60" }}
            xmlSpace="preserve"
          >
            <circle className="circle" cx="30" cy="30" r="20" />
          </svg>
        </PlayerSelectButton>
      </MenuBackground>
    );
  }
}
