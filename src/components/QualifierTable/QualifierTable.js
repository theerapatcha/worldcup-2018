import React from 'react'
import PropTypes from 'prop-types';

class QualifierTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupName: 'Group Z',
            sortedTeamsWitResult: []
        }
    }
    componentDidMount(){
        console.log(this.props.retrieveQualifierResults)
        this.props.retrieveQualifierResults(this.props.groupId)
    }
    componentWillReceiveProps(nextProps) {
        const { groupId, group } = nextProps;
        console.log('a', group)
        this.state.sortedTeamsWitResult = group.teams;
        this.state.groupName = group.groupName
    }
    render() {
        return (
            <div>
                <h4>{this.state.groupName}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Played</th>
                        <th>Win</th>
                        <th>Draw</th>
                        <th>Lose</th>
                        <th>Agg.</th>
                        <th>Points</th>
                    </tr>
                </thead>
                {this.renderTeamInGroup()}
            </table>
            </div>
        )
    }

    renderTeamInGroup() {
        return (
            <tbody>
            { this.state.sortedTeamsWitResult.map((result)=> {
                return (<tr>
                    <td>{result.teamName}</td>
                    <td>{result.played}</td>
                    <td>{result.win}</td>
                    <td>{result.draw}</td>
                    <td>{result.lose}</td>
                    <td>{result.goalFor} - {result.goalAgainst}</td>
                    <td>{result.points}</td>
                </tr>)
            })}
            </tbody>
        )
    }
}

QualifierTable.propTypes = {
    groupId: PropTypes.number.isRequired,
    group: PropTypes.object.isRequired
}
QualifierTable.defaultProps = {
    groupId: 0,
    group: undefined
}

export default QualifierTable