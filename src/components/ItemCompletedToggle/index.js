import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {toggleCompletedVisibility } from '../../logic/actions';
import './styles.css';

export const ItemCompletedToggle = ({hiddenText, completedHidden, onToggleVisibility }) => {

  return (
    <div className={'item-completed-toggle'}>
        <input
            className={'completed-item-button-toggle'}
            type="button"
            value={ hiddenText +' completed tasks'}
            onClick={() => {
               onToggleVisibility(completedHidden);
            }}
        />
    </div>
  );
};

ItemCompletedToggle.defaultProps = {
    completedHidden: false,
    hiddenText:'Hide'
};


ItemCompletedToggle.propTypes = {
    completedHidden:PropTypes.bool.isRequired,
    onToggleVisibility: PropTypes.func.isRequired,
    hiddenText:PropTypes.string
};

const mapStateToProps = state => ({completedHidden:state.todos.completedHidden, hiddenText:state.todos.hiddenText});

    const mapDispatchToProps = dispatch => ({
        onToggleVisibility: completedHidden => dispatch(toggleCompletedVisibility(!completedHidden))
    });

export default connect(mapStateToProps, mapDispatchToProps)(ItemCompletedToggle);
