import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL_ID);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

  return (
    <>
      <h1>Blog App With Appwrite </h1>
    </>
  );
}

export default App;
