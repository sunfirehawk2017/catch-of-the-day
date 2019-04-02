import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();
    static propTypes = {
        history: PropTypes.object
    }

    // goToStore(event) {
    //     event.preventDefault();
    //     // 1. Stop the form from submitting
    //     console.log("Going to store");
    //     // 2. get the text from that input
    //     console.log(this);
    //     // 3. Change the page to /store/whatever-they-entered
    // }

    
    goToStore = event => {
        event.preventDefault();
        // 1. Stop the form from submitting
        console.log("Going to store");
        // 2. get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;