const initialState = {
    groups: {}  
}

const qualifierReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'QUAL_RETRIEVE_RESULTS':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupId]: {
                        groupName: 'Group A',
                        teams: [
                            { teamName: 'Germany', win: 3, draw: 0, lose: 1, played: 4, goalFor: 19, goalAgainst: 2, points: 9 },
                            { teamName: 'Portugal', win: 2, draw: 1, lose: 1, played: 4, goalFor: 9, goalAgainst: 2, points: 7 },
                            { teamName: 'Argen', win: 1, draw: 1, lose: 1, played: 3, goalFor: 3, goalAgainst: 2, points: 4 },
                            { teamName: 'England', win: 0, draw: 2, lose: 1, played: 3, goalFor: 1, goalAgainst: 2, points: 2 }
                        ]
                    }
                }
                
            }
        default:
            return state
    }
}

export default qualifierReducer;