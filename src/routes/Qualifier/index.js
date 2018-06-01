import React from 'react'
import QualifierTable from '../../components/QualifierTable'
class QualifierPage extends React.Component {
    render() {
        return (
            <div>
                This is a qualifier component
                <QualifierTable groupId={1}/>
            </div>
        )
    }
}

export default QualifierPage