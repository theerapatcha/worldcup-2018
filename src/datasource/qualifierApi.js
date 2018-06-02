export const fetchQualifierGroupInfo = (groupId) => {
    return later(20, {
        groupId,
        groupName: 'Group '+groupId,
        teams: [
            { teamId: 1, teamName: 'Germany', win: 3, draw: 0, lose: 1, played: 4, goalFor: 19, goalAgainst: 2, points: 9 },
            { teamId: 2, teamName: 'Portugal', win: 2, draw: 1, lose: 1, played: 4, goalFor: 9, goalAgainst: 2, points: 7 },
            { teamId: 3, teamName: 'Argen', win: 1, draw: 1, lose: 1, played: 3, goalFor: 3, goalAgainst: 2, points: 4 },
            { teamId: 4, teamName: 'England', win: 0, draw: 2, lose: 1, played: 3, goalFor: 1, goalAgainst: 2, points: 2 }
        ]
    })
}

export const fetchQualifierGroupMatches = (groupId) => {
    return later(20, {
        groupId,
        matches: [
            {
                matchId: 1,
                team1: {
                    teamId: 1,
                    teamName: 'Germany',
                    teamAbbr: 'GER'
                },
                team2: {
                    teamId: 2,
                    teamName: 'Portugal',
                    teamAbbr: 'POR'
                },
                result: null,
                status: 'U',
                date: 1627932832784
            },
            {
                matchId: 1,
                team1: {
                    teamId: 1,
                    teamName: 'Germany',
                    teamAbbr: 'GER'
                },
                team2: {
                    teamId: 2,
                    teamName: 'Portugal',
                    teamAbbr: 'POR'
                },
                result: [1,2],
                status: 'LP',
                date: 1527932832784
            },
            {
                matchId: 1,
                team1: {
                    teamId: 1,
                    teamName: 'Germany',
                    teamAbbr: 'GER'
                },
                team2: {
                    teamId: 2,
                    teamName: 'Portugal',
                    teamAbbr: 'POR'
                },
                result: [2,1],
                status: 'W',
                date: 1529932832784
            }
        ]
        
    })
}
function later(delay, value) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, value); // Note the order, `delay` before `value`
        /* Or for outdated browsers that don't support doing that:
        setTimeout(function() {
            resolve(value);
        }, delay);
        Or alternately:
        setTimeout(resolve.bind(null, value), delay);
        */
    });
}