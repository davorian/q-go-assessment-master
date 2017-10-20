import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {deleteItem, toggleItem} from './../../logic/actions';
import './styles.css';

const TodoItem = ( {item, onDelete, onToggle} ) => {

    const completion = item.complete ? 'check':'unchecked';

    function handleDelete() {
            onDelete(item);
    }

    function toggleComplete() {
            onToggle(item);
    }

    return (
        <div>
        <li key={item.id}><div><button onClick={toggleComplete}><span className={'glyphicon glyphicon-'+completion}></span></button> {item.content} <button onClick={handleDelete}><span className="glyphicon glyphicon-remove"></span></button>
        </div></li>
            </div>
    )
};

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle : PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onDelete: item => dispatch(deleteItem(item)),
    onToggle: item => dispatch(toggleItem(item))
});

export default connect(null, mapDispatchToProps)(TodoItem);