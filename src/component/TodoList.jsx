import { useState } from "react"



 function TodoList (){
    const [todolist,setTodoList] = useState([])

    let saveTodoList =(event)=>{

     let toname = event.target.toname.value

  

     if(!todolist.includes(toname)){
        let finalTodoList = [...todolist,toname]
        setTodoList(finalTodoList)
       

     }else{
        alert("Allready existe...")
     }
     
     event.preventDefault()
    }

    let list = todolist.map((value,index)=>{
        
        return ( <ListItemTodo value={value} key={index} indexNumber={index}
        todolist = {todolist}
        setTodoList={setTodoList}
        />
        
    ) 
    })


    return(
        <>
        <div className="conatoiner">

       
        <h1 style={{textAlign:"center"}}>Todo List</h1>

        <form  onSubmit={saveTodoList}>
            <input type="text" name="toname" id="" placeholder="Search Here" />
            <button>Add</button>
        </form>

        <div className="outdiv">
            <ul>
             {list}
            </ul>

        </div>
        </div>
        </>
    );
}
export default TodoList


 
 function ListItemTodo({value,indexNumber,todolist,setTodoList}){


    let deleteRow = ()=> {
        let finalResult = todolist.filter((v,i)=>i != indexNumber)
        setTodoList(finalResult)
        console.log(finalResult)
       
    }


    return( <li> {indexNumber+1} {value}<span onClick={deleteRow}> &times;</span></li>
    );
};
