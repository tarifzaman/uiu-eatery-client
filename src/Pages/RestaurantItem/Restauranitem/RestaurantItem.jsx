import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import useMenu from "../../../hooks/useMenu";
import RestaurantItemCart from "../RestaurantItemCart/RestaurantItemCart";
import { Helmet } from "react-helmet-async";

const RestaurantItem = () => {
    const [dataOfRestaurantsInfo, setDataOfRestaurantsInfo] = useState([]); //  here data come as array so use [] sign in useState 

    const { id } = useParams();  //this is for route 
    
    const restInfo = useLoaderData();
    
    console.log(restInfo);
    
    useEffect(() => {
        const restId = restInfo.find(data => data._id == id)
        setDataOfRestaurantsInfo(restId);
    
    }, [])
    
    console.log(dataOfRestaurantsInfo);
    
    return (
        <div>
            <Helmet>
                <title>
                    uiu | rest item
                </title>
            </Helmet>
            <RestaurantItemCart dataOfRestaurantsInfo={dataOfRestaurantsInfo}></RestaurantItemCart>
        </div>
    );


};

export default RestaurantItem;