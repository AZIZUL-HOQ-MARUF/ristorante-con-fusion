import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

function SelectedDetail(props) {
    if ((props.detail === null) || (props.detail === undefined)) {
        return <div></div>
    } else {
        return (
            <div className="col-xs-12 col-md-5 col-xl-5 m-1">
                <Card>
                    <CardImg top src={process.env.PUBLIC_URL + props.detail.image} alt={props.detail.name} />
                    <CardBody>
                        <CardTitle>{props.detail.name}</CardTitle>
                        <CardText>{props.detail.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default SelectedDetail;
