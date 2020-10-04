import React from "react";
import { CSSTransition } from "react-transition-group";
import GlobalStyles from "./GlobalStyles.jsx";
import Menu from "./Menu.jsx";
import GameBoard from "./GameBoard.jsx";
import WinnerCard from "./WinnerCard.jsx";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: true,
      gameBoard: false,
      currentPlayer: null,
      tiles: ["", "", "", "", "", "", "", "", ""],
      winner: null,
      winnerCard: false,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSetTile = this.handleSetTile.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
  }

  handleSelection(player) {
    this.setState({ menu: !this.state.menu, currentPlayer: player });
  }

  handleSetTile(index) {
    if (this.state.tiles[index] !== "") {
      return;
    }
    const newTiles = [...this.state.tiles];
    newTiles[index] = this.state.currentPlayer;
    this.checkWinner(newTiles, this.state.currentPlayer);
    this.setState({
      tiles: newTiles,
      currentPlayer: this.state.currentPlayer === "x" ? "o" : "x",
    });
  }

  handleRestartGame() {
    this.setState({
      gameBoard: false,
      currentPlayer: null,
      tiles: ["", "", "", "", "", "", "", "", ""],
      winnerCard: false,
    });
  }

  checkWinner(tiles, player) {
    if (this.checkBoard(tiles, player)) {
      this.setState({
        winner: player,
        gameBoard: false,
      });
    }
  }

  checkBoard(tiles, player) {
    if (this.checkRows(tiles, player)) {
      return true;
    }
    if (this.checkColumns(tiles, player)) {
      return true;
    }
    if (this.checkDiagonals(tiles, player)) {
      return true;
    }
    return false;
  }

  checkRows(tiles, player) {
    for (let i = 0; i < 7; i += 3) {
      if (
        tiles[i] === tiles[i + 1] &&
        tiles[i] === tiles[i + 2] &&
        tiles[i] === player
      ) {
        return true;
      }
    }
    return false;
  }

  checkColumns(tiles, player) {
    for (let i = 0; i < 3; i++) {
      if (
        tiles[i] === tiles[i + 3] &&
        tiles[i] === tiles[i + 6] &&
        tiles[i] === player
      ) {
        return true;
      }
    }
    return false;
  }

  checkDiagonals(tiles, player) {
    if (tiles[0] === tiles[4] && tiles[0] === tiles[8] && tiles[0] === player) {
      return true;
    }
    if (tiles[2] === tiles[4] && tiles[2] === tiles[6] && tiles[2] === player) {
      return true;
    }
    return false;
  }

  render() {
    const { menu, gameBoard, tiles, winner, winnerCard } = this.state;
    return (
      <React.Fragment>
        <GlobalStyles />
        <CSSTransition
          in={menu}
          timeout={{
            appear: 700,
            enter: 700,
            exit: 900,
          }}
          classNames={"menu-"}
          unmountOnExit={true}
          appear={true}
          onExited={() => this.setState({ gameBoard: true })}
        >
          <Menu handleSelection={this.handleSelection} />
        </CSSTransition>
        <CSSTransition
          in={gameBoard}
          timeout={{ enter: 700, exit: 1500 }}
          classNames={"gameBoard-"}
          mountOnEnter={true}
          unmountOnExit={true}
          onExited={() => this.setState({ winnerCard: true })}
        >
          <GameBoard
            tiles={tiles}
            handleSetTile={this.handleSetTile}
            winner={winner}
          />
        </CSSTransition>
        <CSSTransition
          in={winnerCard}
          timeout={{ enter: 700, exit: 1200 }}
          classNames={"winnerCard-"}
          mountOnEnter={true}
          unmountOnExit={true}
          onExited={() => this.setState({ menu: true, winner: null })}
        >
          <WinnerCard
            winner={winner}
            handleRestartGame={this.handleRestartGame}
            winnerCard={winnerCard}
          />
        </CSSTransition>
      </React.Fragment>
    );
  }
}
