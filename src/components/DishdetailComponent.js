import React from 'react'
import SelectedDetail from './SelectedDetailComponent'
import DishComments from './DishComment'

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-5 col-xl-5 m-1">
                    <SelectedDetail detail={props.dishDetail} />
                </div>
                <div className="col-xs-12 col-md-5 col-xl-5 m-1">
                    <h4>Comments</h4>
                    <DishComments comments={props.dishDetail?.comments} />
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;
