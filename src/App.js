import React,{useContext} from 'react';
import Header from './components/Header';
import { DataContext } from "./Context/DataProvider";
import Editor from "./components/Editor"
import DataProvider from './Context/DataProvider';
import Result from './components/Result';
import { Route,Routes } from "react-router-dom";


const App=()=> {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
  
  return (
   <>
   <DataProvider initialHtml="" initialCss="" initialJs="">
       <Header/>
       <Routes>
        <Route  path="/" element={<Editor
        language="xml"
        heading="HTML"
        icon="/"
        color="#FF3C41"
       />} />
        <Route path="/css" element={<Editor
         language="css"
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        />      
        }/>
        <Route path="/javascript" element={
           <Editor
           language="javascript"
           heading="Js"
           icon="<>"
           color="#FCD000"
          />
        }/>
        <Route path="/output"
        element={<Result/>}/>
       </Routes>
   </DataProvider>
      
   </>
  )
}
export default App;
