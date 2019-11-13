import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Position from './Position';
import Button from '../../../components/UI/Button';
import ElementPosition from '../../../hoc/ElementPosition';
import Modal from '../../../components/Modal';
import classes from './PositionList.module.scss'

const PositionList = ({ positions = [], addPosition, deletePosition }) => {
  const [modalState, setModalState] = useState(false);

  const renderPositions = () => {
    return positions.map(p => <Position deletePosition={deletePosition} key={p.id} position={p}/>)
  };

  const modalToggle = () => {
    setModalState(!modalState)
  };

  const closeModal = () => {
    setModalState(false)
  };

  return (
    <div className={classes.positions}>
      <ElementPosition hEnd={true}>
        <Button onClick={modalToggle} size="small">Add new position</Button>
      </ElementPosition>

      <div className={classes.items}>
        {positions.length ? renderPositions() : <span>No positions</span>}
      </div>

      <Modal addPosition={addPosition} closeModal={closeModal} isOpen={modalState}/>
    </div>
  );
};

PositionList.propTypes = {
  positions: PropTypes.array
};

export default PositionList;
