class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if(!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch(e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
        // console.log(this.state.count);
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
        // console.log(this.state.count);
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
        // console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
};
ReactDOM.render(<Counter/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// // ReactDOM.render(template, appRoot);
// // ReactDOM.render(template2, appRoot);
// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne} className="button">-1</button>
//             <button onClick={reset} className="button">Reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();