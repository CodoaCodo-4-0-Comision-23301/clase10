export default function Card( { image, title, text } ) {
    
    return(
        <div>
        <img src={ image }/>
        <h3 className="card-title"> { title } </h3>
        <p className="card-text text-secondary">{ text } </p>
        </div>
        );
}