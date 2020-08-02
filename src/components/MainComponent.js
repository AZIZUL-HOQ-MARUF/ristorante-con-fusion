import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions ,
        comments: state.comments,
        leaders: state.leaders
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.find(dish => dish.featured)}
                    promotion={this.props.promotions.find(promo => promo.featured)}
                    leader={this.props.leaders.find(leader => leader.featured)} />
            );
        }
        const DishWithId = ({ match }) => {
            return (
                <Dishdetail dishDetail={this.props.dishes.find(dish => dish.id === parseInt(match.params.dishId))}
                    comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))} />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu disheMenu={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));