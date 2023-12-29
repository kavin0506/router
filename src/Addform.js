function AddForm({ arrList, editingId, setEditingId, data }) {
    function handleSubmit(v) {
      v.preventDefault();
  
      function random() {
        return parseInt(Math.random() * 1000);
      }
  
      const name = v.target.elements.name.value;
      const age = v.target.elements.age.value;
  
      if (editingId !== null) {
        
         arrList((preList) =>
          preList.map((item) =>
           item.id === editingId ? {...item,name,age}: item
  
          )
        );
        setEditingId(null); 
        console.log(editingId)
      } else {
  
        const newList={
                  id:random(),
                  name,
                  age
              }
              arrList((preList)=>{
                  return(
                      preList.concat(newList)
                      
                  )
                  
                 
              })
             
              }
             
              v.target.elements.name.value = "";
              v.target.elements.age.value = "";
  
      }
  
   return (
     <div>
        <form className="addform" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" defaultValue={data?data.name:""}></input>

          <input type="text" name="age" placeholder="Enter your age"defaultValue={data?data.age:""}></input>
          
          <button type="submit">{editingId !== null ? "Update" : "Add"}</button>
        </form>
      </div>
    );
  }
  

export default AddForm;