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
      winnerCard: false,
      currentPlayer: null,
      tiles: ["", "", "", "", "", "", "", "", ""],
      turn: 0,
      winner: null,
      isADraw: false,
    };
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.handleSetTile = this.handleSetTile.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
  }

  componentDidUpdate() {
    const { tiles, turn, winner } = this.state;
    if (turn > 5 && turn < 10) {
      const newWinner = this.checkWinner(tiles);
      if (newWinner) {
        this.setState({
          gameBoard: false,
          turn: 0, // breaks an infinite loop
          winner: newWinner,
        });
      }
    } else if (turn > 9 && !winner) {
      this.setState({
        gameBoard: false,
        turn: 0,
        isADraw: true,
      });
    }
  }

  handleMenuSelection(player) {
    const { menu, turn } = this.state;
    this.setState({
      menu: !menu,
      currentPlayer: player,
      turn: turn + 1,
    });
  }

  handleSetTile(index) {
    if (this.state.tiles[index] === "") {
      const { currentPlayer, turn } = this.state;
      const newTiles = [...this.state.tiles];
      newTiles[index] = currentPlayer;
      this.setState({
        tiles: newTiles,
        currentPlayer: currentPlayer === "x" ? "o" : "x",
        turn: turn + 1,
      });
    }
  }

  handleRestartGame() {
    this.setState({
      gameBoard: false,
      currentPlayer: null,
      tiles: ["", "", "", "", "", "", "", "", ""],
      winnerCard: false,
    });
  }

  checkWinner(tiles) {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }

    return null;
  }

  render() {
    const { menu, gameBoard, tiles, winner, winnerCard, isADraw } = this.state;
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
          <Menu handleMenuSelection={this.handleMenuSelection} />
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
          onExited={() =>
            this.setState({ menu: true, winner: null, isADraw: false })
          }
        >
          <WinnerCard
            winner={winner}
            isADraw={isADraw}
            handleRestartGame={this.handleRestartGame}
            winnerCard={winnerCard}
          />
        </CSSTransition>
      </React.Fragment>
    );
  }
}
