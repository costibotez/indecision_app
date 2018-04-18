console.log('App.js is running');


const app = {
    title: 'Indecision App',
    subtitle: 'Put your like in the hand of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //going to stop
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        // console.log(app);
        renderTemplate();
    }
};

const onRemoveAll = (e) => {
    e.preventDefault();
    app.options = []
    console.log(app.options);
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    // console.log(randomNumber);
    alert(option);
};

const onRemoveElement = (e) => {
    const element = e.target.getAttribute('name');
    const index = app.options.indexOf(element);
    if(index > -1) {
        app.options.splice(index, 1);
    }
    // console.log(e.target.button);
    renderTemplate();
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    //JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>Elements so far: {app.options.length}</p>
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}<button name={option} onClick={onRemoveElement}>Remove element</button></li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div> 
    );
    ReactDOM.render(template, appRoot);
}
renderTemplate();