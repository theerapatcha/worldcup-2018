import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
class TeamLabel extends React.Component {
    render() {
        return (
            <div className={classNames('team-label', this.props.className)}>{this.props.team.teamEmoji} {this.props.team.teamAbbr} - {this.props.team.teamName}</div>
        )
    }
}
TeamLabel.propTypes = {
    team: PropTypes.object.isRequired
}
export default TeamLabel;