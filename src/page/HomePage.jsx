// import axios from "axios";
// import { useState } from "react";
// import FormInput from "../components/formInput";
// import { createStudent } from "../../api/studentApi";

// function HomePage() {
//   // const [name, setName] = useState("");
//   // const [age, setAge] = useState(0);
//   // const [university, setUniversity] = useState("");

//   const [input, setInput] = useState({
//     name: "",
//     age: 0,
//     university: "",
//   });

//   const [studentList, setStudentList] = useState([]);

//   const getStudentList = () => {
//     axios.get("http://localhost:8888/information/student").then((response) => {
//       setStudentList(response.data);
//       // console.log(response.data);
//     });
//   };

//   const hdlSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const rs = await createStudent(input);
//       console.log(rs);
//     } catch (error) {
//       alert("Error");
//     }
//   };
//   const hdlChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   // const addStudentList = () => {
//   //   axios
//   //     .post("http://localhost:8888/information/createstudent", {
//   //       name: name,
//   //       age: age,
//   //       university: university,
//   //     })
//   //     .then(() => {
//   //       setStudentList([
//   //         ...studentList,
//   //         {
//   //           name: name,
//   //           age: age,
//   //           university: university,
//   //         },
//   //       ]);
//   //     });
//   // };

//   return (
//     <>
//       <div>Student Information in CodeCamp 14</div>
//       <form onSubmit={hdlSubmit}>
//         <h1>Name:</h1>
//         <div>
//           <FormInput placeholder="Enter name" name="name" />
//         </div>
//         <h1>Age:</h1>
//         <div>
//           {" "}
//           <FormInput
//             placeholder="Enter age"
//             name="age"
//             value={input.age}
//             onChange={hdlChangeInput}
//           />
//         </div>
//         <h1>University:</h1>
//         <div>
//           <FormInput
//             placeholder="Enter your university "
//             name="university"
//             value={input.university}
//             onChange={hdlChangeInput}
//           />
//         </div>
//         <button className="border hover:bg-purple-400">Add Information</button>
//       </form>
//       <hr />
//       <button onClick={getStudentList} className="border hover:bg-purple-400">
//         Show Information
//       </button>
//       {studentList.map((val, key) => {
//         return (
//           <>
//             <div>name : {val.name}</div>
//             <div>age : {val.age}</div>
//             <div>university : {val.university}</div>
//           </>
//         );
//       })}
//     </>
//   );
// }

// export default HomePage;

//ลองเสร็จ2
import axios from "axios";
import { useState } from "react";
// import FormInput from "../components/formInput";
// import { createStudent } from "../../api/studentApi";

function HomePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [university, setUniversity] = useState("");
  // const [input, setInput] = useState({
  //   name: "",
  //   age: 0,
  //   university: "",
  // });

  const [studentList, setStudentList] = useState([]);

  const getStudentList = () => {
    axios.get("http://localhost:8888/information/student").then((response) => {
      setStudentList(response.data);
    });
  };

  const addStudentList = () => {
    axios
      .post("http://localhost:8888/information/createstudent", {
        name: name,
        age: age,
        university: university,
      })
      .then(() => {
        setStudentList([
          ...studentList,
          {
            name: name,
            age: age,
            university: university,
          },
        ]);
      });
  };

  // const hdlSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const rs = await createStudent(input);
  //     console.log(rs);
  //   } catch (error) {
  //     alert("Error");
  //   }
  // };

  // const hdlChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <div>Student Information in CodeCamp 14</div>
      <form onSubmit={addStudentList}>
        <h1>Name:</h1>
        <div>
          <input
            placeholder="Enter name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <h1>Age:</h1>
        <div>
          <input
            placeholder="Enter name"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <h1>University:</h1>
        <div>
          <input
            placeholder="Enter university"
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
          />
        </div>
        <button className="border hover:bg-purple-400">Add Information</button>
      </form>
      <hr />
      <button onClick={getStudentList} className="border hover:bg-purple-400">
        Show Information
      </button>
      {studentList.map((val, key) => {
        return (
          <div key={key}>
            <div>name: {val.name}</div>
            <div>age: {val.age}</div>
            <div>university: {val.university}</div>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;

//ลองเสร็จ1
// import axios from "axios";
// import { useState } from "react";
// import FormInput from "../components/formInput";
// import { createStudent } from "../../api/studentApi";

// function HomePage() {
//   const [input, setInput] = useState({
//     name: "",
//     age: 0,
//     university: "",
//   });

//   const [studentList, setStudentList] = useState([]);

//   const getStudentList = () => {
//     axios.get("http://localhost:8888/information/student").then((response) => {
//       setStudentList(response.data);
//     });
//   };

//   const hdlSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const rs = await createStudent(input);
//       console.log(rs);
//     } catch (error) {
//       alert("Error");
//     }
//   };

//   const hdlChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div>Student Information in CodeCamp 14</div>
//       <form onSubmit={hdlSubmit}>
//         <h1>Name:</h1>
//         <div>
//           <FormInput
//             placeholder="Enter name"
//             name="name"
//             value={input.name}
//             onChange={hdlChangeInput}
//           />
//         </div>
//         <h1>Age:</h1>
//         <div>
//           <FormInput
//             placeholder="Enter age"
//             name="age"
//             value={input.age}
//             onChange={hdlChangeInput}
//           />
//         </div>
//         <h1>University:</h1>
//         <div>
//           <FormInput
//             placeholder="Enter university"
//             name="university"
//             value={input.university}
//             onChange={hdlChangeInput}
//           />
//         </div>
//         <button className="border hover:bg-purple-400">Add Information</button>
//       </form>
//       <hr />
//       <button onClick={getStudentList} className="border hover:bg-purple-400">
//         Show Information
//       </button>
//       {studentList.map((val, key) => {
//         return (
//           <div key={key}>
//             <div>name: {val.name}</div>
//             <div>age: {val.age}</div>
//             <div>university: {val.university}</div>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default HomePage;
