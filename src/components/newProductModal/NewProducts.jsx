import './NewProducts.scss'
import React, {useState}from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



const ProductModal = ({ open, onClose }) => {
  const [name,setName] = useState('')
  const [batch,setBatch] = useState('')
  const [exp,setExp] = useState('')
  const [qty,setQty] = useState('')
  const [price,setPrice] = useState('')
  const [prod,setProd] = useState('')
  const [products, setProducts] = useState([])

  const handleAddProducts = (e)=>{
    e.preventDefault()
    const newItems = {id:new Date().getSeconds().toString, name, batch, exp, qty, price, prod}
    setProducts(product=>{
      return [...products,newItems]
    })
    
  }
  return (
    <>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{fontWeight:'bold'}}>Add New Product</DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={2} style={{marginTop:'10px'}}>
            <Grid item xs={6}>
              <TextField label="Product Name" fullWidth 
              value={name}
              onChange={(e)=>setName(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Batch Number" fullWidth 
              value={batch}
              onChange={(e)=>setBatch(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Expiry Date" fullWidth 
              value={exp}
              onChange={(e)=>setExp(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Quantity" fullWidth
              value={qty}
              onChange={(e)=>setQty(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Price" fullWidth 
              value={price}
              onChange={(e)=>setPrice(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Production Date" fullWidth 
              value={prod}
              onChange={(e)=>setProd(e.target.value)}/>
            </Grid>
          </Grid>
          <button className='btn' onClick={handleAddProducts} >Save</button>
        </form>
      </DialogContent>
    </Dialog>

   
    
    </>
  );
};

export default ProductModal;
