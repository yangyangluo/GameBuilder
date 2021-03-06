import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PieceList from './gamespec/PieceList';
import Board from './gamespec/Board';
import styles from '../styles';
import withDragDropContext from './withDragDropContext';
import RaisedButton from 'material-ui/RaisedButton';

const flexStyle = {
  width: '70%',
  ...styles.center
};

const flexElement = {
  position: 'relative',
  width: '30%',
  float: 'left'
};

const GameSpecBuilder = props => {
  let {
    standardElements,
    toggableElements,
    cardElements,
    diceElements,
    cardsDeckElements,
    piecesDeckElements,
    currentUserElements,
    setItems,
    setBoardSize,
    getItems,
    boardImage,
    allImages,
    allElements,
    specType,
    setDecks,
    getDecks,
    handleClickShuffle,
    setDeckCount,
    getDeckCount
  } = props;

  let elements = [
    { key: 'My Uploads', data: currentUserElements },
    { key: 'standard', data: standardElements },
    { key: 'toggable', data: toggableElements },
    { key: 'card', data: cardElements },
    { key: 'dice', data: diceElements },
    { key: 'cardsDeck', data: cardsDeckElements },
    { key: 'piecesDeck', data: piecesDeckElements }
  ];

  if (props.specType !== 'PlaySpec') {
    return (
      <div style={flexStyle}>
        <div style={flexElement}>
          <DropDownMenu
            value={props.getValue()}
            onChange={(e, newValue) => {
              props.setValue(newValue);
            }}
          >
            <MenuItem value={0} primaryText="My Uploads" />
            <MenuItem value={1} primaryText="standard" />
            <MenuItem value={2} primaryText="toggable" />
            <MenuItem value={3} primaryText="card" />
            <MenuItem value={4} primaryText="dice" />
            <MenuItem value={5} primaryText="cardsDeck" />
            <MenuItem value={6} primaryText="piecesDeck" />
          </DropDownMenu>
          <PieceList data={elements[props.getValue()].data} />
        </div>
        <Board
          setBoardSize={setBoardSize}
          setItems={setItems}
          getItems={getItems}
          boardImage={boardImage}
          allImages={allImages}
          allElements={allElements}
          specType={specType}
          setDecks={setDecks}
          getDecks={getDecks}
          setDeckCount={setDeckCount}
          getDeckCount={getDeckCount}
        />
        <div>
          <RaisedButton
            label="shuffle"
            disabled={specType !== 'PlaySpec'}
            primary={true}
            onClick={event => {
              handleClickShuffle();
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div style={flexStyle}>
        <Board
          setBoardSize={setBoardSize}
          setItems={setItems}
          getItems={getItems}
          boardImage={boardImage}
          allImages={allImages}
          allElements={allElements}
          specType={specType}
          setDecks={setDecks}
          getDecks={getDecks}
          setDeckCount={setDeckCount}
          getDeckCount={getDeckCount}
        />
        <div>
          <RaisedButton
            label="shuffle"
            disabled={specType !== 'PlaySpec'}
            primary={true}
            onClick={event => {
              handleClickShuffle();
            }}
          />
        </div>
      </div>
    );
  }
};

export default withDragDropContext(GameSpecBuilder);
