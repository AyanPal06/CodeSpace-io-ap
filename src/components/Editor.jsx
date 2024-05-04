import React, { useContext } from 'react';
import { DataContext } from "../Context/DataProvider";
import { Box ,styled} from '@mui/material';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import "../App.css";
const Heading=styled(Box)`
  background:#1d1e22;
  display:flex;
  padding:10px 15px;
  `

const Header=styled(Box)`
  background:#060606;
  display:flex;
  color:#AAAEBC;
  justify-content:space-between;
  font-width:700;
   `

const Container=styled(Box)`
  flex-grow:1;
  flex-basic:0;
  display:flex;
  flex-direction: column;
  min-weight:100vw;
  background-color: #1d1e22;
  overflow-x-hidden;
`

const Editor = ({heading,icon,color,language}) => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
    const handleChange = (editor, data, newValue) => {
      switch (language) {
        case "xml":
          setHtml(newValue);
          break;
        case "css":
          setCss(newValue);
          break;
        case "javascript":
          setJs(newValue);
          break;
        default:
          break;
      }
    };
    let editorValue;
    if (language === "xml") {
    editorValue = html;
    }
    else if (language === "css") {
    editorValue = css;
    }
    else {
    editorValue = js;
    }
  return (
    <Container >
        <Header>
            <Heading>
                <Box component="span"
                style={{
                    background: color,
                    height:20,
                    width:20,
                    display: "flex",
                    placeContent: "center",
                    borderRadius: 5,
                    marginRight: 5,
                    paddingBottom: 2,
                    color:"#000"
                }}>{icon}

                </Box>
                {heading}
            </Heading>
        </Header>
        <ControlledEditor
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: 'material'
        }}
        onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
        value={editorValue}
        className="controlled-editor"/>
    </Container> 
  )
}

export default Editor;
