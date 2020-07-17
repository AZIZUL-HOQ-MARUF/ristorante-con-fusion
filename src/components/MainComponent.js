import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            // selectedDish: null
        }
    }
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId }, () => { console.log(this.state.selectedDish) });
    // }
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu disheMenu={this.state.dishes} />} />
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
                {/* <Menu disheMenu={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* <Dishdetail dishDetail={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        );
    }
}
export default Main;
