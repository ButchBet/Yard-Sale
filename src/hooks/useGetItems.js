import React from "react";
import axios from "axios";

const useGetItems = (API) => {
    const [items, setItems] = React.useState([]);

    React.useEffect(async () => {
        const response = await axios(API);

        setItems(response.data);
    }, []);
    
    return items;
};

export default useGetItems;