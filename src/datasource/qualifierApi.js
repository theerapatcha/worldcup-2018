export const fetchQualifierGroupInfo = (groupId) => {
    return fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json').then((response) => { 
        return response.json() 
    }).then((data) => {
        return processGroupInfo(data);
    }).then((groups) => {
        const group = groups[groupId.toLowerCase()];
        return {
            groupId,
            groupName: group.name,
            teams: group.teamFixtures
        }
    });
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

const processGroupInfo = (data) => {
    const teamsInfo = processTeamInfo(data.teams);
    const groups = data.groups;

    Object.keys(groups).forEach((key) => {
        const teams = [];
        groups[key].matches.map((match) => {
            const homeTeamId = match.home_team;
            const homeTeamName = teamsInfo.getTeamById(homeTeamId).name;

            const awayTeamId = match.away_team;
            const awayTeamName = teamsInfo.getTeamById(awayTeamId).name;

            match.home_team_name = homeTeamName
            match.away_team_name = awayTeamName;
            
            const homeTeamIndex = teams.findIndex((team) => {
                return team.teamId == homeTeamId;
            });

            const awayTeamIndex = teams.findIndex((team) => {
                return team.teamId == awayTeamId;
            });

            createOrUpdateTeams(homeTeamIndex, teams, homeTeamId, homeTeamName, match.finished, match.home_team_result, match.away_team_result);
            createOrUpdateTeams(awayTeamIndex, teams, awayTeamId, awayTeamName, match.finished, match.away_team_result, match.home_team_result);
            
            return match;
        });
        groups[key].teamFixtures = teams.sort(compareFixtures);
    });

    return groups;
}

const processTeamInfo = (data) => {
    const teams = { list: data };
    teams.getTeamById = (id) => {
        return teams.list[id-1];
    }
    return teams;
}

const createOrUpdateTeams = (teamIndex, teams, id, name, finished, result, againstResult ) => {
    if (teamIndex > -1) {
        // Update
        let team = teams[teamIndex];
        team.teamName = name;
        if (finished) team.played += 1;

        if (result) {
            if (result > againstResult) {
                team.win += 1;
                team.points += 3;
            } else if (result == againstResult) {
                team.draw += 1;
                team.points += 1;
            } else if (result < againstResult) team.lose += 1;

            team.goalFor += result;
            team.goalAgainst += againstResult;
        }
    } else {
        // Create
        teams.push({
            teamId: id,
            teamName: name,
            played: 0,
            win: 0,
            draw: 0,
            lose: 0,
            goalFor: 0,
            goalAgainst: 0,
            points: 0
        });
    }
}

const compareFixtures = (a, b) => {
    if (a.points < b.points) return -1;
    if (a.points > b.points) return 1;
    if (a.points == b.points) {
        return a.teamName.localeCompare(b.teamName);
    }
}