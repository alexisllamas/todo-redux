import React from 'react';

const getClass = (filter, activeFilter) => (
  filter === activeFilter ? 'pure-button pure-button-active' : 'pure-button'
);

const Filter = ({filterAll, filterActive, filterCompleted, active}) => (
   <div className="pure-button-group" role="group" aria-label="...">
    <button className={getClass('all', active)} onClick={filterAll}>All</button>
    <button className={getClass('active', active)} onClick={filterActive}>Active</button>
    <button className={getClass('completed', active)} onClick={filterCompleted}>Completed</button>
  </div>
);

export default Filter;
