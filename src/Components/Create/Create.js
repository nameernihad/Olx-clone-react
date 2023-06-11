import React, { Fragment} from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { FirebaseContext ,authContext } from "../../store/Context";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const {firebase} =useContext(FirebaseContext)
  const {user} = useContext(authContext)
  const history = useHistory()
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [category, setcategory] = useState('')
  const [image, setimage] = useState(null)

  const handleSubmit =()=>{
    const date = new Date();
       firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);   
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt: date.toDateString(),
          })
          history.push('/')
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
              name="name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setcategory(e.target.value)}
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
            <input onClick={handleSubmit} type="button" className="uploadBtn" value='upload and Submit' />
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
