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

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = { bounceX: 0, bounceO: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id: selectedPlayer } = event.currentTarget;
    this.props.handleSelection(selectedPlayer);
  }

  render() {
    return (
      <MenuBackground>
        <svg
          id="x"
          onClick={() => this.setState({ bounceX: 1 })}
          className={`button-x ${this.state.bounceX ? "click-disabled" : ""} ${
            this.state.bounceX ? "bounce" : ""
          }`}
          bounce={this.state.bounceX}
          onAnimationEnd={this.handleClick}
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
        <svg
          id="o"
          onClick={() => this.setState({ bounceO: 1 })}
          className={`button-o ${this.state.bounceO ? "click-disabled" : ""} ${
            this.state.bounceO ? "bounce" : ""
          }`}
          bounce={this.state.bounceO}
          onAnimationEnd={this.handleClick}
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
      </MenuBackground>
    );
  }
}
