import MyComponents from "./components/MyComponents";

const App = () => {
  return (
    <>
      <MyComponents name="ReactJS" />
      <MyComponents age={100} />
    </>
  );
};

export default App;