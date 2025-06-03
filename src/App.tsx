// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import { useEffect } from "react";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
import OnlineStatus from "./components/OnlineStatus.tsx";

function App() {

  // useEffect(() => {
  //   const id: number = setInterval(() => console.log("tick"), 1000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <>
      <Layout>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props!"/>*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*  title="Is a Arrow Functional Component with Props!"*/}
        {/*  description="this is a description"*/}
        {/*/>*/}

        {/*<ClassComponentWithState/>*/}
        {/*<FunctionalComponentWithState/>*/}
        {/*<Counter/>*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}
        {/*<CounterAdvanced/>*/}
        {/*<CounterWithCustomHook/>*/}
        {/*<CounterAdvancedWithCustomHook/>*/}

        {/*<CounterWithReducer/>*/}
        {/*<Todo/>*/}

        <OnlineStatus/>

      </Layout>
    </>
  )
}

export default App
