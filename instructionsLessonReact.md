npm create vite@latest my-name -- --template react-ts 
npm install

**20/5/2025**  

npm run build  
npm run preview  
npm run lintls  

φάκελοι: assets/components/hooks/pages/utils

# πρώτο component

https://tailwindcss.com/docs/installation/using-vite
`npm install tailwindcss @tailwindcss/vite`
-> vite.config.ts για προσθήκη του tailwind οπως τα παίρνω απο το site
`import tailwindcss from '@tailwindcss/vite'`
-> app.css
`@import "tailwindcss";`

- pages/ViteIntro.tsx
τα έκανα κοπι πειστ απο το app για να τα έχω σε χωριστά αρχεία
- - `export default ViteIntro` συμαντικό
```tsx
import { useState } from 'react'
import reactLogo from '../assets/react.svg'  //αυτά στην μετακόμιση μπορεί να χρειάζονται αλλαγή
import viteLogo from '/vite.svg'
import '../App.css'

function ViteIntro() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center text-blue-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default ViteIntro
```

- οπότε έχω ένα καθαρό app.tsx
```tsx
import ViteIntro from "./pages/ViteIntro.tsx";

function App() {

  return (
    <>
      <ViteIntro />
    </>
  )
}

export default App
```

### class components - Πια Obsolete

#### ClassComponent.tsx
- {} για να περάσω στην html μεταβλητή
- προσοχή στο export default
```tsx
import {Component} from "react";

class ClassComponent extends Component{
  render(){

    const title = "Is a Class Component"

    return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
  }
}

export default ClassComponent;
```

- app.tsx
```tsx
import ClassComponent from "./components/ClassComponent.tsx";

<>
  <ClassComponent/>
</>
```

### functional component
#### FunctionalComponent.tsx
- title: string  βαλαμε types γιατι είμαστε σε ts
```tsx
function FunctionalComponent(){
const title: string = "Is a Functional Component!";
return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>;
}

export default FunctionalComponent;
```

- app.tsx
```tsx
import FunctionalComponent from "./components/FunctionalComponent.tsx";

<>
      <FunctionalComponent/>
</>
```

### ArrowFunctionalComponent
#### ArrowFunctionalComponent.tsx
```tsx
const ArrowFunctionalComponent = () => {
const title: string = "Is a Arrow Functional Component";
return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>;
}

export default ArrowFunctionalComponent;
```
- app.tsx
```tsx
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";

<>
  <ArrowFunctionalComponent/>
</>
```

# props
πως περνάμε πληροφορία απο το ένα component στο άλλο
- δύο συμαντικές λέξεις για ts, type και interface. Το interface είναι πιο κοινό σε OOP

#### ArrowFunctionalComponentWithProps.tsx
- είναι συμαντικό στα props να δηλώνετε ο τυπος 
```tsx
type Props = {
  title: string;
}
```
- `({title}: Props) => {`
```tsx
type Props = {
  title: string;
}

const ArrowFunctionalComponentWithProps = ({title}: Props) => {
return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>;
}

export default ArrowFunctionalComponentWithProps;
```

- App.tsx
- - εδώ περάσαμε και επιπλέων πληροφορίες στο <... title="" />, αν και συχνά <... title={} />
```tsx
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

<>
  <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props!"/>
</>
```

### δύο συμαντικές λέξεις για ts, type και interface. Το interface είναι πιο κοινό σε OOP

#### ArrowFunctionalComponentWithPropsType.tsx
- `type Props = A & B;` στην περίπτωση του interface όμως αυτό δεν χρειάστικε γιατι τα προσθέτει κατευθείαν
- `({title, description}: Props) `
```tsx
// type Props = {
//   title: string;
//   description: string;
// }

type A = {
  title: string;
}
type B ={
  description: string;
}
type Props = A & B;

// interface Props {
//   title: string;
// }
//
// interface Props {
//   description: string;
// }

const ArrowFunctionalComponentWithPropsType = ({title, description}: Props) => {
  return (
    <>
      <h1 className="text-center text-xl font-bold mt-12">{title}</h1>;
      <p className="text-center text-gray-800">{description}</p>
    </>
  )
}

export default ArrowFunctionalComponentWithPropsType;
```

- App.tsx
```tsx
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

<>
  <ArrowFunctionalComponentWithPropsType
    title="Is a Arrow Functional Component with Props!"
    description="this is a description"
  />
</>
```