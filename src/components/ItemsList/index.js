import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import TodoItem from './../TodoItem';


export const ItemsList = ( {items} ) => {
    return (
            <ul className={'itemsList-ul'}>
                {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
                {items.map( item =>  <TodoItem id="todos" key={item.id} item={item}/> )}
            </ul>
    );

};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

export default connect(mapStateToProps)(ItemsList);
