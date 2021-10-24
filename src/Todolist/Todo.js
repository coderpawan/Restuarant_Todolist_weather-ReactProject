import React,{useState, useEffect} from 'react'
import "./style.css"
import "./responsive.css"


const getLocalData=() =>{
    const lists = localStorage.getItem("mytodolist");

    if(lists){
        return JSON.parse(lists);
    } else {
        return[];
    }
}
const Todo = () => {
    const[inputData,setInputData] = useState("")
    const[items,setItems] = useState(getLocalData());
    const[edit, setEdit] = useState("")
    const[toggleButton, setToggleButton] = useState(false);
    const addItem = ()=>{
      if(!inputData){
          alert("Please fill the Data");
      } else if (inputData && toggleButton){
         setItems(
             items.map((curElem)=>{
                 if (curElem.id === edit){
                     return{...curElem, name: inputData}
                 }
                 else{
                     return curElem;
                 }
             })
         )
         setInputData([]);
         setEdit(null);
         setToggleButton(false); 
      }
      else{
          const myNewInputData ={
              id: new Date().getTime().toString(),
              name: inputData
          }
          setItems([...items,myNewInputData])
          setInputData("");
      }
      
    };

    const editItem =(index)=>{
        const editTodo = items.find((curElem)=>{
            return curElem.id === index;
        })
        setInputData(editTodo.name);
        setEdit(index);
        setToggleButton(true);

    }


    const deleteItem = (index)=>{
       const updatedItems = items.filter((curElem)=>{
           return curElem.id !== index;
       })
       setItems(updatedItems)
    }
    const removeAll =()=>{
        setItems([]);
    }

    useEffect(()=>{
        localStorage.setItem("mytodolist",JSON.stringify(items));
    },[items])
    return (
        <>
            <div className="Todolist">
                <div className="childTodo">
                    <div className="todoHeading">
                        <img src="images/note pad.png" alt="todo logo" />
                        <p>Add your List Here 😀😋</p>
                    </div>
                    <div className="Input">
                        <input type="text" placeholder="✍️ Add Item" className="writeItem" value={inputData} onChange={(event)=> setInputData(event.target.value)} ></input>
                        {toggleButton?
                        (<i className="fa fa-user-pen add-btn edit" onClick={addItem}></i>):
                        (<i className="fa fa-plus add-btn" onClick={addItem}></i>)
                        
                    }
                        
                    </div>
                    <div className="showItems">
                        {items.map((curElem)=>{
                            return(

                        <div className="eachItem" key={curElem.id}>
                            <h3>{curElem.name}</h3>
                            <div className="todo-btn">
                                <i class="fa fa-user-pen" onClick={()=> editItem(curElem.id)}></i>
                                <i class="fa fa-trash-can" onClick={()=> deleteItem(curElem.id)}></i>
                            </div>
                        </div>
                            );
                        })}

                           
                        
                    </div>
                    <div className="item">
                        <button className="btn" onClick={removeAll}> CLEAR LIST </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
