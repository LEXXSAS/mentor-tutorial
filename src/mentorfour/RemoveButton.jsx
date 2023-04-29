import React from "react";
import {AppContext} from './App'

function RemoveButton({index}) {
    const {removeProduct} = React.useContext(AppContext);

    return <button onClick={() => removeProduct(index)} className="btn btn-danger">Удалить</button>
}

export default RemoveButton;
