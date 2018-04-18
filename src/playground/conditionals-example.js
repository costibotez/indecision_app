const template2 = (
    <div>
        <h1>{book.title}</h1>
        {book.subtitle && <p>{book.subtitle}</p>}
        {book.options.length > 0 ? "Here are your options" : "No options"}
        {(book.sales && book.sales >= 18) && <p>Bestseller</p>}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);