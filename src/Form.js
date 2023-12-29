import AddForm from "./Addform";
import { useState } from "react";

function Form() {
  const arrOfObj = [
    {
      id: 1,
      name: "Bala",
      age: 22,
      gender: "male",
    },
    {
      id: 2,
      name: "Arun",
      age: 23,
      gender: "male",
    },
    {
      id: 3,
      name: "Kavi",
      age: 22,
      gender: "male",
    },
  ];

  const [list, setList] = useState(arrOfObj);
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="form">
      <AddForm arrList={setList}
        editingId={editingId}
        setEditingId={setEditingId}
       data={list.find((item) => item.id === editingId)}
      />
      
      <div className="table">
        <table>
          <thead>
          {list.map((v, index) => {
            return (
              <tr key={index}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
                <td>
                    <>
                      <button className="edit" onClick={() => editBtn(v.id)}>Edit</button>
                      <button className="delete" onClick={() => deleteBtn(v.id)}>Delete</button>
                    </>
                </td>
              </tr>
            );
          })}
           </thead>
        </table>
      </div>
    </div>
  );

  function deleteBtn(id) {
    const newList = list.filter((e) => e.id !== id);
    setList(newList);
  }

  function editBtn(id) {
   
    setEditingId(id);
    console.log(id)
  }

}


export default Form;
