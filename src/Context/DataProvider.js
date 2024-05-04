import { createContext, useState } from "react";

export const DataContext=createContext();

const DataProvider = ({children,initialHtml = '', initialCss = '', initialJs = ''}) => {
    const[html,setHtml]=useState(initialHtml);
    const[css,setCss]=useState(initialCss);
    const[js,setJs]=useState(initialJs);
    //console.log(html);
  return (
    <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
    }}>
    {children}
    </DataContext.Provider>
  )
}

export default DataProvider;

