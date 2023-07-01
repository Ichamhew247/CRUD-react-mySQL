import FormInput from "../components/formInput";

function HomePage() {
  return (
    <>
      <div>Student Information in CodeCamp 14</div>
      <h1>Name:</h1>
      <div>
        <FormInput placeholder="Enter name" />
      </div>
      <h1>Age:</h1>
      <div>
        <FormInput placeholder="Enter your age" />
      </div>
      <h1>University:</h1>
      <div>
        <FormInput placeholder="Enter your university " />
      </div>
      <button className="border hover:bg-purple-400">Add Information</button>
    </>
  );
}

export default HomePage;
