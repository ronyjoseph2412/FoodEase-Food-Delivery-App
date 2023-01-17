import { useEffect, useState } from "react";
import BasketContext from "./BasketContext";

const BasketState = (props) => {
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);
    
    const addToBasket = (item) => {
        setBasket([...basket, item]);
    }
    
    const removeFromBasket = (item) => {
        let newBasket = [];
        let number = 0;
        // if(item===[]){
        //     setBasket([]);
        // }
        // else{
        //     for(let i=0;i<basket.length;i++){
        //         if(basket[i].id === item.id){
        //             if(number===0){
        //                 number = number+1;
        //                 continue;
        //             }
        //             else{
        //                 newBasket.push(basket[i]);
        //             }
        //         }
        //         else{
        //             newBasket.push(basket[i]);
        //         }
        //     }
        //     setBasket(newBasket);
        // }
        for(let i=0;i<basket.length;i++){
            if(basket[i].id === item.id){
                if(number===0){
                    number = number+1;
                    continue;
                }
                else{
                    newBasket.push(basket[i]);
                }
            }
            else{
                newBasket.push(basket[i]);
            }
        }
        setBasket(newBasket);
    }
    
    const updateTotal = () => {
        let total = 0;
        basket.forEach(item => {
        total += item.price;
        }
        );
        setTotal(total);
    }
    
    useEffect(() => {
        updateTotal();
    }, [basket]);
    
    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, total }}>
        {props.children}
        </BasketContext.Provider>
    );
}

export default BasketState;