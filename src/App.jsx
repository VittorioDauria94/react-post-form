import { useState } from "react";
import Form from "./components/Form";
import initialState from "./assets/data/initialState";

function App() {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const [name, type] = e.target.value;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  }
  return (
    <>
      <div className="container text-center py-5">
        <h1 className="blog-title mb-2">BoolBlog</h1>
        <h5 className="blog-subtitle">Fill out the form for your new post</h5>
      </div>
      <div className="container">
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
