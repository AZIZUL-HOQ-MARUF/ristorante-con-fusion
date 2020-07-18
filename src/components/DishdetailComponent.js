import React from 'react'
import SelectedDetail from './SelectedDetailComponent'
import DishComments from './DishComment'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dishDetail.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <SelectedDetail detail={props.dishDetail} />
                <DishComments comments={props.comments} />
            </div>
        </div>
    );
}

export default Dishdetail;
