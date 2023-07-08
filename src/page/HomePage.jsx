import axios from "axios";
import { useState } from "react";

function HomePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [university, setUniversity] = useState("");
  //update
  const [newUniversity, setNewUniversity] = useState("");

  const [studentList, setStudentList] = useState([]);

  const getStudentList = () => {
    axios.get("http://localhost:8888/student").then((response) => {
      setStudentList(response.data);
    });
  };

  const addStudentList = () => {
    axios
      .post("http://localhost:8888/createstudent", {
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
  const updateNewUniversity = (id) => {
    axios
      .put("http://localhost:8888/updatestudent", {
        university: newUniversity,
        id: id,
      })
      .then(() => {
        setStudentList(
          studentList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  age: val.age,
                  university: newUniversity,
                }
              : val;
          })
        );
      });
  };

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8888/deletestudent/${id}`).then(() => {
      setStudentList(
        studentList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
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
            placeholder="Enter age"
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

      <div>
        {studentList.map((val) => (
          <div key={val.id}>
            <div>
              <p>name: {val.name}</p>
              <p>age: {val.age}</p>
              <p>university: {val.university}</p>
              <div>
                <input
                  type="text"
                  placeholder="Edit university"
                  onChange={(event) => {
                    setNewUniversity(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateNewUniversity(val.id);
                  }}
                >
                  Update
                </button>
              </div>
              <button
                className="hover:bg-pink-500"
                onClick={() => {
                  deleteStudent(val.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
