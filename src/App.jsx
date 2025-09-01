import MyComponents from "./components/MyComponents";
import MyComponentsFunc from "./components/MyComponentsFunc";

const App = () => {
  return (
    <>
      <MyComponents name="ReactJS" />
      <MyComponents age={100} />
      <hr/>
      <MyComponentsFunc name="함수형">
        <p>함수형 컴포넌트의 하위 엘리먼트</p>
      </MyComponentsFunc>
    </>
  );
};

export default App;