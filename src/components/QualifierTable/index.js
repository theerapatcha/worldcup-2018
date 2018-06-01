import { connect } from 'react-redux'
import { retrieveQualifierResults } from '../../actions/qualifier'
import QualifierTable from './QualifierTable';

const orderTeamsBasedOnResult = (teamsWithResult) => {
    return teamsWithResult;
}
const mapStateToProps = (state, props) => {
    const { groupId } = props;
    const { groups } = state.qualifier;
    // let groupName = "Group Unknown";
    // let teams = [];
    // if (groupId in groups) {
    //     groupName = groups[groupId].groupName;
    //     teams = groups[groupId].teams
    // }
    console.log(groups);
    return ({
        group: groups[groupId]
        //sortedTeamsWitResult: orderTeamsBasedOnResult(teams)
    });
}

const mapDispatchToProps = dispatch => ({
    retrieveQualifierResults: groupId => dispatch(retrieveQualifierResults(groupId))
});
console.log(retrieveQualifierResults)
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(QualifierTable)