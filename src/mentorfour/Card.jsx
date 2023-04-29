import BuyButton from "./BuyButton";
import RemoveButton from "./RemoveButton";

function Card({name, index}) {
    return (
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <RemoveButton index={index} />
                &nbsp;&nbsp;
                <BuyButton index={index} />
            </div>
        </div>
    );
}

export default Card;
