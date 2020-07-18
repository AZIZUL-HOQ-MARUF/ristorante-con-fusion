import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            comments: COMMENTS,
            leaders: LEADERS
        }
    }
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId }, () => { console.log(this.state.selectedDish) });
    // }
    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.find(dish => dish.featured)}
                    promotion={this.state.promotions.find(promo => promo.featured)}
                    leader={this.state.leaders.find(leader => leader.featured)} />
            );
        }
        const DishWithId = ({ match }) => {
            return (
                <Dishdetail dishDetail={this.state.dishes.find(dish => dish.id === parseInt(match.params.dishId))}
                    comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}/>
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu disheMenu={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                {/* <Menu disheMenu={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* <Dishdetail dishDetail={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}

            </div>
        );
    }
}
export default Main;
