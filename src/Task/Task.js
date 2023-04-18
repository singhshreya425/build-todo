import React, { useState } from 'react'
import "./Task.css"

const Task = () => {
const [inputData , setInputData] = useState('');
const [items , setItems] = useState([]);
const [toggleSubmit , setToggleSubmit]= useState(true);
const [isEditItem, setIsEditItem] = useState(null);
const addItem= ()=>{
  if(!inputData){
   alert('please fill data');
  }else if (inputData && !toggleSubmit){
        setItems(
          items.map((elem)=>{
            if(elem.id=== isEditItem){
            return {...elem, name: inputData }
            }
            return elem;
          })
        )
        setToggleSubmit (true);

  setInputData('');

  setIsEditItem(null);
        
  }
  else{
    const allInputData = { id: new Date().getTime().toString(),name : inputData}
    setItems([...items,allInputData])
    setInputData('');

  }
}
const deleteItem = (index)=> {
 const updatedItems = items.filter ((elem)=>{
    return index !== elem.id ;
  });
  setItems(updatedItems);
}

const removeAll=()=>{
  setItems([]);
}
const editItem=(id)=>{
  let newEditItem = items.find((elem)=>{
    return elem.id ===id
  });
  setToggleSubmit (false);

  setInputData(newEditItem.name);

  setIsEditItem(id); 


}



  return (
    <>
     <div className='main div'>
      <div className='child-div'>
        <figure>  
          
           <figcaption style={{Color:"black"}}> Add your Todo list here</figcaption>
        </figure>
        <div className='addItems'>

          <input type="text" placeholder='AddItems...' id ="" value={inputData}
          onChange={(e)=> setInputData(e.target.value)}/>
          {
            toggleSubmit ?<i className="fa-solid fa-plus add-btn" title='Add Items' onClick={addItem}></i> 
            : <i className="fa-solid fa-edit  add-btn" title='Add Items' onClick={addItem}></i>
          }

          
        </div>
        <div className='showItem'>
          {
            items.map((elem)=>{
              return(
                <div className='eachItem' key={elem.id}>
                <h3>{elem.name}</h3>
                <div className='todo-btn'>     
                <i className="fa-solid fa-edit add-btn" title = "Edit Item" onClick={()=> editItem(elem.id)}></i>
                <i className="fa fa-trash add-btn" title = "Delete Item" onClick={()=> deleteItem(elem.id)}></i>
              </div>   
              </div>   
              )
              
            })
          }

          
        </div>

        {/* clear all button */}
               <div className='showItems'>

                <button className='btn effect04' data-sm-link-text= "Remove All" onClick={removeAll}><span>Check List</span></button>

               </div>
      </div>
      </div> 
    </>
  )
}

export default Task
