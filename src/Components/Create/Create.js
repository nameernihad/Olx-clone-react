import React, { Fragment ,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { FirebaseContext ,authContext } from "../../store/Context";

const Create = () => {
  const {firebase} = ()=>useContext(FirebaseContext)
  const {user} = useContext(authContext)
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [categoty, setcategoty] = useState('')
  const [image, setimage] = useState(null)
  const handleSubmit =()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
        })
      })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={categoty}
              onChange={(e)=>setcategoty(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price}
              onChange={(e)=>setprice(e.target.value)} id="fname" name="Price" />
            <br />
          
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
         
            <br />
            <input onChange={(e)=>{
              setimage(e.target.files[0])
            }} type="file" />
            <br />
            <button onclick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
