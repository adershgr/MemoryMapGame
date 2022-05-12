import { useState } from 'react'
import Card from './card'

export default function Cards(){
 const [items, setItems] =useState([ 
       {id : 1, img:'/img/cat.png',stat:""},
     {id : 1,img:'/img/cat.png',stat:""},
     {id : 2,img:'/img/dog.png',stat:""}, 
     {id : 2,img:'/img/dog.png',stat:""},
     {id : 3,img:'/img/elephant.jpg',stat:""},
     {id : 3,img:'/img/elephant.jpg',stat:""},
    {id : 4,img:'/img/fox.jpg',stat:""},
    {id : 4,img:'/img/fox.jpg',stat:""},
    {id : 5,img:'/img/girrafe.jpg',stat:""},
    {id : 5,img:'/img/girrafe.jpg',stat:""},
    {id : 6,img:'/img/panda.jpg',stat:""},
    {id : 6,img:'/img/panda.jpg',stat:""},
    {id : 7,img:'/img/tux.png',stat:""},
    {id : 7,   img:'/img/tux.png',stat:""},
    {id : 8,img:'/img/zebra.jpg',stat:""},
    {id : 8,img:'/img/zebra.jpg',stat:""}
])
// This object array can later be imported from another file with this content
//code will looks optimal
return(
   <div className="container">
    {items.map((item,index) => (
       <Card key={index} item={item} />
      ))
    }
    </div>
     )
}
