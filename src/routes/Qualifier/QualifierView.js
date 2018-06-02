import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import QualifierTable from 'components/QualifierTable'
import PageTitle from 'components/PageTitle'
class QualifierView extends React.Component {
    render() {
        return (
            <div>
            <PageTitle>Qualifier Round</PageTitle>
            <Grid>
                <Row>
                    <Col md={3}>
                        <QualifierTable groupId={1}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={2}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={3}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={4}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <QualifierTable groupId={5}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={6}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={7}/>
                    </Col>
                    <Col md={3}>
                        <QualifierTable groupId={8}/>
                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

export default QualifierView