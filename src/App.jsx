import React from "react";
import { CSSTransition } from "react-transition-group";
import GlobalStyles from "./GlobalStyles.jsx";
import Menu from "./Menu.jsx";
import GameBoard from "./GameBoard.jsx";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: true,
      gameBoard: false,
      currentPlayer: null,
      tiles: ["", "", "", "", "", "", "", "", ""],
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(player) {
    this.setState({ menu: !this.state.menu, currentPlayer: player });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <CSSTransition
          in={this.state.menu}
          timeout={{
            appear: 700,
            exit: 700,
          }}
          classNames={"menu-"}
          unmountOnExit={true}
          appear={true}
          onExited={() => this.setState({ gameBoard: true })}
        >
          <Menu handleSelection={this.handleSelection} />
        </CSSTransition>
        <CSSTransition
          in={this.state.gameBoard}
          timeout={1000}
          classNames={"gameBoard-"}
          mountOnEnter={true}
        >
          <GameBoard tiles={this.state.tiles} />
        </CSSTransition>
      </React.Fragment>
    );
  }
}
