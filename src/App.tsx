// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
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
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import NameChanger from "./components/NameChanger.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterExamplesLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout";

function App() {

  // useEffect(() => {
  //   const id: number = setInterval(() => console.log("tick"), 1000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <>
      {/*<Layout>*/}
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

        {/*<OnlineStatus/>*/}

      {/*</Layout>*/}

      <BrowserRouter>
          <Routes>
            <Route element={<RouterLayout />}>
              {/*<Route path="/" element={<HomePage />}/>*/}
              <Route index element={<HomePage />}/>
              <Route path="users/:userId" element={<UserPage />}/>
              <Route path="users" element={<UserPage />}/>
            </Route>

            {/*<Route path="examples?" >*/}
            <Route path="examples"  element={<RouterExamplesLayout/>}>
              <Route index element={<ExamplesPage/>}/>
              <Route path="name-changer" element={<NameChangerPage/>}/>
              <Route path="online-status" element={<OnlineStatusPage/>}/>
            </Route>

            <Route path="users/:userId" element={<UserPage />}/>
            <Route path="users" element={<UserPage />}/>
            {/*<Route path="files/*" element={<FilePage/>}/>*/}
            PATH: https://example.com/users/125/name/nick
            QUERY: https://example.com/users?id=125&name=Nick
            https://www.skroutz.gr/c/3074/pagomixanes/f/891854_891908_1066530/trima-epagelmatiki-101-200.html?price_max=3200.0&price_min=1400.001
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App