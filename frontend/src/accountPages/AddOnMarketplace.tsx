import { Box, Modal, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AddOnItem from "../accountComponents/AddOnItem";
import { ShopContext } from "./AccountHomeLayout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuthContext } from "../hooks/useAuthContext";

type addonCard = {
    name: string, 
    price: number,
    description: string,
    id: string
};



const AddOnMarketplace: React.FC = () => {



    const [addons, setAddons] = useState<addonCard[]>([]);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingAddon, setLoadingAddon] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80svw',
        height: '80svh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        overflowY: 'auto',
        p: 4,
        };
      
    const globalShop = useContext(ShopContext)
    const { user } = useAuthContext();
    
    const removeItem = async (id: string) => {
        const oldCart = globalShop.cart;

        for(let i=0; i<globalShop.cartSize; i++){
          if(oldCart[i].id === id){
            oldCart.splice(i, 1)
            break;
          }
        }

         try{

             const response = await fetch(
          "http://localhost:3000/api/addons/postCartItems",
          {
            method: "POST",
            body: JSON.stringify({ cart: oldCart, email: user?.email }),
            headers: {
            "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const data = await response.json();

        globalShop.setNewCart(data.items.cart)

        //globalShop.removeCart(id)


        }catch(e){
            console.log(e)
        }

       
    }

    useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/addons/getCartItems/${user?.email}`);

        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();

        const cartPH: addonCard[] = [];

        data.items[0].cart.forEach((element: addonCard) => {

        const object: addonCard = {
            name: element.name,
            price: element.price,
            description: element.description,
            id: element.id
        }
            cartPH.push(object)
        
        });
        
        console.log(data.items)
        globalShop.setNewCart(cartPH)
      } catch (err) {
        console.log(err)
      } finally {
        setLoadingUser(false);
      }
    };

     const fetchAddonData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/addons/getAddonItems');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setAddons(data.items);
      } catch (err) {
        //setError(err.message);
        console.log(err)
      } finally {
        setLoadingAddon(false);
      }
    };

    fetchUserData();
    fetchAddonData();
  }, []); 


            


    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', padding: '25px'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
                <Typography variant="h4" sx={{textAlign: 'left'}}>Alias + Add Ons</Typography>
                <Box onClick={handleOpen} sx={{cursor: 'pointer'}}> 
                    <ShoppingCartIcon sx={{height:'32px', width: '32px'}}/>
                    <span className='badge badge-warning' id='lblCartCount'>{globalShop.cartSize}</span>
                </Box>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        { globalShop.cartSize == 0 ? 
                        
                        <>
                            <div className="emptyCartContent" >
                
                                <p className='emptyCartText'>Your Cart is Empty</p> 
                                <br />
                            </div>
                        </> :
                        <>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your Cart
                    </Typography>
                    <hr style={ {width: '70svw', height:'2px', backgroundColor: 'white', margin: '20px 20px 0 20px'}}/>
                    {globalShop.cart.map((addonItem) =>  
                    <Box sx={{margin: '20px', width: '70svw'}}>
                        <p>{addonItem.name}</p>
                        <p>{`$${addonItem.price}`}</p>
                        <button className='removeCartButton' style={{cursor: 'pointer'}} onClick={() => {removeItem(addonItem.id)}}>Remove</button>
                        <hr style={ {width: '70svw', height:'2px', backgroundColor: 'white'}}/>
                    </Box>
                )} </>}
                    </Box>
                </Modal>
        </Box>
        { (!loadingUser && !loadingAddon) ? 
         <Box sx={{padding: '20px', display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(35svh, 1fr))'}}>
           {addons.map((addon) => <AddOnItem addonInfo={addon}/>)}
        </Box> : <Box></Box> }
        </div>
       
    )
}

export default AddOnMarketplace;