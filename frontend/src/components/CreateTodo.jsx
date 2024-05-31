import { useState } from "react";

export function CreateTodo({setTodos,todos}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input id="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} style={{padding:10,margin:10}} type="text" placeholder="Title"/> <br /><br />
        <input id="description" style={{padding:10,margin:10}} onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} type="text" placeholder="Description"/><br /><br />

        <button style={{padding:10,margin:10}} onClick={async function (){
            const data = await fetch("http://localhost:3000/todo",{method: "POST", 
                body:JSON.stringify({
                    title: title,
                    description : description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            });
            const finaldata = await data;
            setTodos([...todos,{
                title: title,
                description:description,
            }])
            // console.log(finaldata.json);
            alert("todo added")
        }}>Add a Todo</button>
    </div>
}