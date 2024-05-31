export function RenderTodos({ todos }) {
    return <div>
        {todos.map(function(value){
            return <div>
                <h1>{value.title}</h1>
                <h2>{value.description}</h2>
                <button onClick={async function(){
                    await fetch("http://localhost:3000/completed", {method:"PUT",
                        body:JSON.stringify({
                            id : value._id
                        }),
                        headers:{
                            "Content-type":"application/json"
                        }
                    })
                    alert("Marked Completed")
                }}>{value.completed == true ? "Completed": "Mark as Complete"}</button>
            </div>
        })}
    </div>
}
