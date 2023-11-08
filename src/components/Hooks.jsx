import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios';

const Hooks = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState("");

    const addTodo = () => {
        if (todo != "") {
            setTodos([...todos, todo]);
        }
    };

    const removeTodo = (index) => {
        todos.splice(index, 1)
        setTodos([...todos])
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`https://dummyjson.com/products/${count}`);
              setProduct(response?.data);
              return response;
            }
            catch (error) {
              console.log("Error handling data!")
            }
          }
          fetchData();
    }, [count])

    return (
        <>
            <div className="row mt-5" style={{ maxWidth: "100%" }}>
                <div className="col-12">
                    <h1 className="eventTitle">React Hooks Examples</h1>
                </div>
            </div>
            <div className='cardContainer d-flex justify-content-around mt-5'>
                <div className="card">
                    <p className="cardEventTitle">UseState Hook</p>
                    <p id="first" className="cardEventHead">To Do List</p>

                    <div className="button d-flex justify-content-center" style={{ margin: "1rem 0 8rem 0" }}>
                        <div className="row" style={{ width: "100%" }}>
                            <div className="col-12">
                                <input type="text" style={{ width: "100%" }} className="mb-3" name="todo" placeholder='add tasks' onChange={(e) => { setTodo(e.target.value) }} />
                                <button onClick={addTodo} className="mb-5">Add</button>
                            </div>

                            <div className="col-12">
                                <div className="todolist">
                                    <ul className="row">
                                        <p className="row" style={{fontWeight: "bold"}}>List:</p>
                                        {todos.map((item, index) => {
                                            return (
                                                <div className="col">
                                                    <li style={{ listStyle: "none" }} key={index}>{item}</li>
                                                    <button onClick={() => {removeTodo(index)}}>Delete</button>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <p className="cardEventTitle">UseEffect Hook</p>
                    <div className="row">
                        <div>
                        <h6 className="col-12 text-center mt-3">Product Id (Between 1 and 100): </h6>
                        </div>
                       
                       <div className="d-flex justify-content-center">
                        <input className="col-10" type='number' placeholder='enter product id' style={{width: "10rem"}} onChange={(e) => setCount(e.target.value)}/>
                       </div>
                        
                        <div className='productDetails'>
                            <h6 className="products">Product ID: {product?.id}</h6>
                            <h6 className="products">Product Title: {product?.title}</h6>
                            <h6 className="products">Product Description: {product?.description}</h6>
                            <h6 className="products">Product Price: {product?.price}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hooks;