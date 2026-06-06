import React,{ useState } from 'react'
import styles from "./Objects.module.css"
const Objects = () => {

  const [data, setdata] = useState({
    id: "", name: ""
  });

  const [edit, setedit] = useState({
    id: "", name: ""
  })
  const [editerror, setediterror] = useState({
    id: "", name: ""
  })
  const [editcheck, seteditcheck] = useState(false);
  const [error, seterror] = useState("");
  const [obj, setobj] = useState([{ id: 1, name: "Apple" }])
  const [editbackup, seteditbackup] = useState([]);

  const [tog_obj, settog_obj] = useState([{ id: 1, done: false }]);

  const [sum_obj, setsum_obj] = useState({
    sum1: "", sum2: "", sum3: "" , totalsum: ""
  });

  const [sumerror, setsumerror] = useState("");



  const [nested_obj, setnested_obj] = useState({ id: 1, user: { name: "Ali", age: 20 } })
  const [nested, setnested] = useState({id: "", user_name: "" , user_age: 0 })
  const [nestederror, setnestederror] = useState("");
  const [nestedcheck, setnestedcheck] = useState(false);


  const [count_obj, setcount_obj] = useState([{ id: 1, count: 0 }, { id: 2, count: 0 }]);
  const [countinput, setcountinput] = useState(null);
  const [countererror, setcountererror] = useState("");
  const [showcount, setshowcount] = useState({});


  const [true_obj, settrue_obj] = useState([{ id: 1,name: "Apple", done: false },
    { id: 2, name: "Orange", done: false }, { id: 3,name: "Banana", done: true },
    { id: 4, name: "Mango", done: true } , { id: 5, name: "StrawBerry",done: true },
     { id: 6,name: "Pineapple", done: false }
  ]);


  const [search, setsearch] = useState("");


  const handleinput = (dets) =>{
      const { name, value } = dets.target;



      if(name === "id")
      {
        let found = obj.find((item) => item.id === Number(value))
        if(found)
        {
          seterror(`Id ${value} already exists`)
        }

        else{
          seterror("");
        }
      }


        if(name === "name")
      {
        let found = obj.find((item) => item.name.toLowerCase() === value.toLowerCase())
        if(found)
        {
          seterror(`Name ${value} already exists`)
        }

        else{
          seterror("");
        }
      }


      

      

      setdata((prev)=>({
        ...prev,
        [name]: value 
      }))
  }


  let addfun = () => {
    if(data.id != "" && data.name != "" && !error)
    {
      setobj((prev) => [
        ...prev,
        {
          id: Number(data.id),
          name: data.name
        }
      ]);


      
      setdata({ id: "", name: "" })


    }

    if( data.name === "")
    {
      seterror(`Enter the Name field`)
    }

    
  }

  let deletefun = (id) => {
   let variable;
   variable = obj.filter((item) => item.id !== id);

   setobj(variable);
  }


  let resetfun = () => {
    setobj([]);
  }


  
  let editinput = (dets) => {
  const { name, value } = dets.target;

  setedit((prev) => ({
    ...prev,
    [name]: value
  }));


  // remove errors while typing
  setediterror((prev) => ({
    ...prev,
    [name]: ""
  }));
};



let editfun = () => {

  // clear previous errors
  setediterror({
    id: "",
    name: ""
  });

  let found = obj.find(
    (item) => item.id === Number(edit.id)
  );

  
  // if id not found
  if(!found)
  {
    setediterror((prev)=>({
      ...prev,
      id:"Id not found"
    }));

    
  }


  // if name empty
  if(edit.name.trim() === "")
  {
    setediterror((prev)=>({
      ...prev,
      name:"Enter name"
    }));

    return;
  }


  seteditbackup(obj);


  // edit name if no errors
  setobj((prev)=>
    prev.map((item)=>
      item.id === Number(edit.id)
      ? {...item , name: edit.name}
      : item
    )
  );


  // clear edit inputs after success
  setedit({
    id:"",
    name:""
  });

};  


   
let togglefun = () => {
  settog_obj((prev) => [{
    ...prev[0], done: !prev[0].done
  }])
} 



let suminput = (dets) => {
  const { name, value } = dets.target;

  // allow only numbers and empty string
  if (value !== "" && isNaN(Number(value))) {
    setsumerror("Please enter a valid number");
    return;
  }

  setsumerror("");

  setsum_obj((prev) => ({
    ...prev,
    [name]: value
  }));
};



let sumfun = () => {
  const n1 = sum_obj.sum1 === "" ? null : Number(sum_obj.sum1);
  const n2 = sum_obj.sum2 === "" ? null : Number(sum_obj.sum2);
  const n3 = sum_obj.sum3 === "" ? null : Number(sum_obj.sum3);

  if (
    n1 === null || n2 === null || n3 === null ||
    isNaN(n1) || isNaN(n2) || isNaN(n3)
  ) {
    setsumerror("Please enter all numbers correctly");
    setsum_obj((prev) => ({
      ...prev,
      totalsum: ""
    }));
    return;
  }

  setsumerror("");

  const total = n1 + n2 + n3;

  setsum_obj((prev) => ({
    ...prev,
    totalsum: total
  }));
};



let nestedinput = (dets) => {

  const { name, value } = dets.target;

  setnestederror("");

  // update input state first
  const updated = {
    ...nested,
    [name]: value
  };

  setnested(updated);

  // validation: empty check
  if (
    updated.id === "" ||
    updated.user_name === "" ||
    updated.user_age === ""
  ) {
    setnestederror("Enter all the fields");
    return;
  }

  // validation: id check (must match existing object)
  if (Number(updated.id) !== nested_obj.id) {
    setnestederror("Id is not matching");
    return;
  }

  // validation: name check (case insensitive)
  if (
    updated.user_name.toLowerCase() !==
    nested_obj.user.name.toLowerCase()
  ) {
    setnestederror("Name is not matching");
    return;
  }

  // validation: age must be number
  if (updated.user_age !== "" && isNaN(Number(updated.user_age))) {
    setnestederror("Age must be a number");
    return;
  }

  setnestedcheck(true);
};




let updatefun = () => {

  // check empty fields
  if (
    nested.id === "" ||
    nested.user_name === "" ||
    nested.user_age === ""
  ) {
    setnestederror("Enter all fields");
    return;
  }

  // check id match
  if (Number(nested.id) !== nested_obj.id) {
    setnestederror("Id is not matching");
    return;
  }

  // check name match (case insensitive)
  if (
    nested.user_name.toLowerCase() !==
    nested_obj.user.name.toLowerCase()
  ) {
    setnestederror("Name is not matching");
    return;
  }

  // check age is number
  if (isNaN(Number(nested.user_age))) {
    setnestederror("Age must be a number");
    return;
  }

  // update nested object (only age changes)
  setnested_obj((prev) => ({
    ...prev,
    user: {
      ...prev.user,
      age: Number(nested.user_age)
    }
  }));

  // clear inputs
  setnested({
    id: "",
    user_name: "",
    user_age: ""
  });

  setnestederror("");
};


let counterhandle = (dets) => {

  const { name, value } = dets.target;

  setcountererror("");


  if(name === "id")
  {
    if(isNaN(value))
    {
      setcountererror("Please Enter a valid id")    
      return;  
    }
  }

  let found = count_obj.find((item) => item.id == Number(value))

  if(!found)
  {
    setcountererror("Id is not matching")
  }

   setcountinput(value)
} 
  


let countincfun = () => {

  if(countinput === "")
  {
    setcountererror("Enter id");
    return;
  }

  let found = count_obj.find(
    (item)=> item.id === Number(countinput)
  );

  if(!found)
  {
    setcountererror("Id is not matching");
    return;
  }

  setcount_obj((prev)=>
    prev.map((item)=>
      item.id === Number(countinput)
      ? {...item , count:item.count + 1}
      : item
    )
  );


  setshowcount(found);
}




let countdecfun = () => {

  if(countinput === "")
  {
    setcountererror("Enter id");
    return;
  }

  let found = count_obj.find(
    (item)=> item.id === Number(countinput)
  );

  if(!found)
  {
    setcountererror("Id is not matching");
    return;
  }

  setcount_obj((prev) =>
  prev.map((item) => {
    if (item.id !== Number(countinput)) return item;

    if (item.count === 0) return item;

    return {
      ...item,
      count: item.count - 1,
    };
  })
);


  setshowcount(found);
}

  return (
    
<div>
      <div className={styles.show_div}>
        <h2>Show</h2>    <button className={styles.resetallbtn}
        onClick={resetfun}
        >Reset All</button>
        {
          obj.map((item,id)=>(
            <div className={styles.show}>

              <div className={styles.left_side}>
                {`${item.id}.`} {item.name}
              </div>


              <div className={styles.right_side}>
                <button className={styles.deletebtn}
                onClick={() => deletefun(item.id)}
                >
                  Delete
                </button>

              </div>
            </div>
          ))
        }
      </div>


      <div className={styles.input_div}>
        <input className={styles.input_box}
        name="id"
        value={data.id}
        placeholder="Enter Id..."
        onChange={handleinput}
        />

        <input className={styles.input_box}
        name="name"
        value={data.name}
        placeholder="Enter Name..."
        onChange={handleinput}
        />



        {error && <p style={{ color: "red" }}>{error}</p>}



        <button className={styles.addbtn}
        onClick={addfun}
        >Add</button>

      </div>


      <div className={styles.edit_div}>
        <input className={styles.input_box}
        name="id"
        value={edit.id}
        placeholder="Enter Id to edit..."
        onChange={editinput}
        />

        <input className={styles.input_box}
        name="name"
        value={edit.name}
        placeholder="Enter Name to edit..."
        onChange={editinput}
        />


        {editerror.id && <p style={{ color: "red" }}>{editerror.id}</p>}

        {editerror.name && <p style={{ color: "red" }}>{editerror.name}</p>}


        <button className={styles.editbtn}
          onClick={editfun}
        >Edit</button>


         <button className={styles.cancelbtn}
          onClick={() => setobj(editbackup)}
        >Cancel</button>



      </div>



      <div className={styles.toggle_div}>
        <h2> { tog_obj[0].done.toString()} </h2>

        <button className={styles.togbtn}
        onClick={togglefun}
        >Toggle</button>
      </div>


      <div className={styles.sum_div}>
        <input className={styles.input_box}
        name="sum1"
        value={sum_obj.sum1}
        placeholder="Enter 1st number..."
        onChange={suminput}
        />

        <input className={styles.input_box}
        name="sum2"
        value={sum_obj.sum2}
        placeholder="Enter 2nd number..."
        onChange={suminput}
        />



         <input className={styles.input_box}
        name="sum3"
        value={sum_obj.sum3}
        placeholder="Enter 3rd number..."
        onChange={suminput}
        />


       


        {sumerror && <p style={{ color: "red" }}>{sumerror}</p>}

        {sum_obj.totalsum && <p style={{ color: "green" }}>{sum_obj.totalsum}</p>}

        


        <button className={styles.sumbtn}
          onClick={sumfun}
        >Sum</button>

      </div>



      <div className={styles.nested_div}>
        <input className={styles.input_box}
        name="id"
        value={nested.id}
        placeholder="Enter id..."
        onChange={nestedinput}
        />

        <input className={styles.input_box}
        name="user_name"
        value={nested.user_name}
        placeholder="Enter User name..."
        onChange={nestedinput}
        />



        <input className={styles.input_box}
        name="user_age"
        value={nested.user_age}
        placeholder="Enter User age..."
        onChange={nestedinput}
        />


        {nestederror && <p style={{ color: "red" }}>{nestederror}</p>}

        {nestedcheck && <p style={{ color: "green" }}>{nested_obj.id} {nested_obj.user.name}
          {nested_obj.user.age}</p>}
        

        <button className={styles.updatebtn}
        onClick={updatefun}
        >Update</button>

      </div>


      <div className={styles.count_div}>
        <input className={styles.input_box}
        name="id"
        value={countinput}
        placeholder="Enter id..."
        onChange={counterhandle}
        />

         {countererror && <p style={{ color: "red" }}>{countererror}</p>}

        {count_obj && (
          count_obj.map((item) => (
            <p key={item.id} style={{ color: "green" }}>
              {item.id} {item.count} </p>
          ))
        )}


        <button className={styles.countincbtn}
        onClick={countincfun}
        >Count Increase</button>

         <button className={styles.countincbtn}
        onClick={countdecfun}
        >Count Decrease</button>


      </div>

      <div className={styles.true_div}>
       {
         true_obj.filter(item => item.done === true ).map((item)=>(
          <p key={item.id}>{item.id} {item.name} {item.done.toString()}</p>
         ))
       }

      </div>


      <div className={styles.search_div}>
        <input className={styles.input_box}
        name="name"
        value={search}
        placeholder="Enter name..."
        onChange={(dets)=> setsearch(dets.target.value)}
        />

         {
         true_obj.filter(item => item.name.toLowerCase() === search.toLowerCase() ).map((item)=>(
          <p key={item.id}>{item.id} {item.name} {item.done.toString()}</p>
         ))
       }
      </div>



      <div className={styles.sort_div}>
        {
        [...true_obj].sort((a,b) => a.name.localeCompare(b.name))
        .map((item)=>(
        <p key={item.id}>{item.id} {item.name} {item.done.toString()}</p>
        ))
        }
      </div>






    </div>

  )
}
export default Objects
