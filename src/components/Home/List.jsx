import { useQuery } from "@apollo/client";
import Item from "./Item";
import getItemsQry from "../gql/getItemsQry";
import { useState, useEffect } from "react";

const divClasses = "mb-3 flex flex-col gap-4";

const List = () => {
  const [fetchedItems, setFetchedItems] = useState([]);
  const { error, loading, data } = useQuery(getItemsQry);

  useEffect(() => {
    if (data) {
      setFetchedItems(
        data.items.map((item) => {
          return <Item key={item.id} title={item.title} />;
        })
      );
    }
  }, [data]);
  return (
    <>
      <div className={divClasses}>{fetchedItems}</div>
    </>
  );
};

export default List;
