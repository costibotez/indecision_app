class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.appTitle = 'Visibility Toggle';
        this.text = 'Hey. These are some details you can now see';
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            buttonText: 'Show details',
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility,
                buttonText: (prevState.visibility ? 'Show details' : 'Hide details')
            }
        });
    }
    render() {
        return (
            <div>
                <h1>{this.appTitle}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.buttonText}</button>
                <p>{this.state.visibility && this.text}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle'
// }

// let show = true;
// const onButtonClick = () => {
//     console.log(show);
//     show = !show;
//     render();
// };

// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onButtonClick}>
//             {(show ? 'Show': 'Hide')} details
//             </button>
//             {show && <p>Hey. These are some details you can now see</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();