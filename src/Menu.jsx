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
          onClick={this.handleClick}
          className="button-x-o"
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
          onClick={this.handleClick}
          className="button-x-o"
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
