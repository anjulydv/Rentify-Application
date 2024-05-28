import React from 'react'

const PropertyList = () => {
    const [propertyList, setPropertyList] = useState([]);
  
    const addNewProperty = (e) => {
      // console.log(e.code);
      if(!e.target.value.trim()) return;
      if (e.code === "Enter") {
        console.log(e.target.value);
        setTodoList([...propertyList, { text: e.target.value, completed: false }]);
        e.target.value = "";
        console.log(propertyList);
      }
    };
  
    const deleteproperty = (index) => {
      console.log(index);
      const temp = propertyList;
      temp.splice(index, 1);
      setTodoList([...temp]);
    }
    const Completeproperty =(index) =>{
      const temp=propertyList;
      temp[index].completed=true;
      setTodoList([...temp]);
    }

const PropertyList = () => {
  return (
    <>
    <div>
      <div className="container">
        <p className="display-4 fw-bold text-center">ToDo List</p>
        <hr />

        <div className="card">
          <div className="card-header">
            <input
              onKeyDown={addNewProperty}
              className="form-control"
              placeholder="Add Property Here"
            />
          </div>
          <div className="card-body">
            <ul className="list-group">
              {propertyList.map((obj, index) => {
                return <li className="list-group-item" key ={ index}>
                  { obj.completed ? <span className="badge text-bg-success">Completed</span>: <span className="badge text-bg-warning">Pending</span>}
                    <h3 style={{ textDecoration: obj.completed ? 'line-through':''}}>{obj.text}</h3>
                    <button onClick={() => { deleteproperty(index) }} className="btn btn-danger">Delete</button>
                    <button onClick={()=>{ Completeproperty(index)}} className="btn btn-primary ms-2">Complete Task</button>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  

    </>
  )
}
}

export default PropertyList;