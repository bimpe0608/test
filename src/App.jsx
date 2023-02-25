import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Staffs from "./components/Staffs";
import Food from "./components/Food";

import "./App.css";
import Button from "./components/Button";
import StaffForm from "./components/StaffForm";
import FoodList from "./components/FoodList";
import icon from "./assets/icon-cancel.svg";

function App() {
  // const [count, setCount] = useState(0);

  const [yspStaff, setYspStaff] = useState([
    {
      name: "Adebimpe",
      age: "23",
      role: "Frontend/social media",
      gender: "Female",
    },
    {
      name: "Adeola",
      age: "22",
      role: "UI/UX/Customer Success",
      gender: "Female",
    },
    { name: "Oluchi", age: "21", role: "Finance", gender: "Female" },
    {
      name: "Ademilola",
      age: "20",
      role: "Content creator/Social media",
      gender: "Female",
    },
    { name: "Fayokunmi", age: "22", role: "frontend", gender: "Female" },
    { name: "Owujib", age: "25", role: "Senior dev", gender: "Male" },
    { name: "Hamzat", age: "19", role: "Backend", gender: "Male" },
    { name: "David", age: "24", role: "Media", gender: "Male" },
    {
      name: "Layi",
      age: "26",
      role: "Brand Designer/Graphics",
      gender: "Male",
    },
    { name: "Mojeed", age: "27", role: "Math tutor", gender: "Male" },
    { name: "Ore", age: "20", role: "Front desk", gender: "Female" },
    { name: "Bolaji", age: "23", role: "Editing/Media", gender: "Male" },
    { name: "Austin", age: "22", role: "Editong/Media", gender: "Male" },
    { name: "Daniel", age: "29", role: "CEO", gender: "Male" },
    {
      name: "Innocent",
      age: "29",
      role: "Co-founder/creative director",
      gender: "Male",
    },
    { name: "Ope", age: "21", role: "Office Assistant", gender: "Male" },
  ]);

  const [food, setFood] = useState([
    { id: 1, name: "Pasta" },
    { id: 2, name: "Pounded yam & egusi" },
    { id: 3, name: "Fried rice" },
    { id: 4, name: "White rice" },
  ]);


  const addFood = (name) => {
    const newFood = { id: food.length + 1, name };
    // console.log(newFood);

    setFood([...food, newFood]);
  };

  

  const addStaffs = (name) => {
    const newStaff = { id: yspStaff.length + 1, name };
    console.log(newStaff);
    setYspStaff([...yspStaff, newStaff]);
  };


  
  function removeStaff(id, name){
    let removedItem = yspStaff.filter((item, index)=> {
      if(id !== index){
        return item;
      }
    })

    setYspStaff([...removedItem])
  }

   return (
    <>
      <h1>Staff list</h1>
      <div>
        <h1>Favorite foods</h1>
        <ol className="foodContainer">
          {food.map((data, index) => {
            return <Food name={data.name} key={index} />;
          })}
        </ol>
      </div>

      <FoodList addFood={addFood} />

      <div>
        <ul
          style={{
            fontSize: "20px",
          }}
          className="staff-container"
        >
          {yspStaff.map((item, index) => {
            return <Staffs name={item.name} key={index} onClick={(e)=>{
              removeStaff(index, item.name)
            }} />;
          })}
        </ul>
      </div>

      <StaffForm addStaffs={addStaffs} />
    </>
  );
}

export default App;
