// src/components/visibilityFilter.jsx
import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from './components/actions'
import { Filters } from './components/actionTypes'

function visibilityFilter({ activeFilter, setFilter }) {
    return (
        Filters.map((filter, i) => (
            <button
                className={filter === activeFilter ? 'active' : ''}
                onClick={() => setFilter(filter)}
                key={`filter-${i}`}>
                {filter}
            </button>
        ))
    )
}

const mapState = (state) => ({ activeFilter: state.visibilityFilter.activeFilter })
export default connect(mapState, { setFilter })(visibilityFilter)