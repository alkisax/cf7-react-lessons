import {useEffect} from 'react';
import NameChanger from "../components/NameChanger.tsx";

const NameChangerPage = () => {

  useEffect(()=>{
    document.title = "CF7 Name Changer"
  }, [])

  return (
    <>
      <NameChanger/>
    </>
  )
};
export default NameChangerPage;