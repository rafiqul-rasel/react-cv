import React from 'react';
import Header from '../../Partials/Header/Header'

class HomePage extends React.Component {
    static navigationOptions = {title: null,};

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
}

export default HomePage;
