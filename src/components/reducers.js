import { ADD_TASK, TOGGLE_TODO, FILTER_ISDONE, SET_FILTER } from './actionTypes'

const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'do taxes',
            isDone: false
        }
    }
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            isDone: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            isDone: !(state.data[action.payload.id].isDone)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}
