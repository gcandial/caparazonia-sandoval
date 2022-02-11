import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ producto }) {

    return (
        <>
            <ItemDetail producto={producto}></ItemDetail>
        </>
    );
}

export default ItemDetailContainer;