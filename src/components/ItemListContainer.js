import ItemList from "./ItemList";

function ItemListContainer({ arrayItems }) {

  return (
    <>
      {
        arrayItems.map(item => <ItemList key={item.id} items={item} />)
      }
    </>
  );
}

export default ItemListContainer;