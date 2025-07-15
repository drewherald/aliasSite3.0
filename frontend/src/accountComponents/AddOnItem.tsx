import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ShopContext } from "../accountPages/AccountHomeLayout";
import { useAuthContext } from "../hooks/useAuthContext";


type addonCard = {
    name: string, 
    price: number,
    description: string,
    id: string
};

type addonType = {
    addonInfo: addonCard;
}

const AddOnItem: React.FC<addonType> = ({addonInfo}) => {

    //console.log(addonInfo)

    const globalShop = useContext(ShopContext)
    const { user } = useAuthContext();
    
    

     const addToCart = async () => {

        try{

             const object: addonCard = {
            name: addonInfo.name,
            price: addonInfo.price,
            description: addonInfo.description,
            id: addonInfo.id
        }

            globalShop.updateCart(object)

             const response = await fetch(
          "http://localhost:3000/api/addons/postCartItems",
          {
            method: "POST",
            body: JSON.stringify({ cart: globalShop.cart, email: user?.email }),
            headers: {
            "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Upload failed");
        }


        }catch(e){
            console.log(e)
        }

       
       
    }

    

    return(
        <Box sx={{padding: '20px', margin: '20px', display:'grid', gridTemplateRows:'2fr 1fr 2fr 1fr', height: '35svh', width: '35svh', backgroundColor: '#100F55'}}>
            <Typography sx={{fontSize: '3svh'}}>{`${addonInfo.name}`}</Typography>
            <p>{`Price: $${addonInfo.price}`}</p>
            <Typography sx={{fontSize: '2svh'}}>{`Description: ${addonInfo.description}`}</Typography>
            <button className='addCart' style={{cursor: 'pointer', height: '3svh', marginTop: '10px'}} onClick={() => addToCart()}>Add To Cart</button>
        </Box>
    )
}

export default AddOnItem;