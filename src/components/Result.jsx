import React,{useState,useEffect} from 'react'
import { Box,styled } from '@mui/material';
import { DataContext } from '../Context/DataProvider';
import { useContext } from 'react';

const Container = styled(Box)`
height: 89vh;
overflow:hidden;
`


const Result = () => {
  const [src,setSrc]=useState('');
  const{html,css,js}=useContext(DataContext);
  

  useEffect(() => {

    const srcCode = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `;
    const timeout = setTimeout(() => {
      setSrc(srcCode);
      
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <Container style={html || css || js ? null : { background: '#444857' }}>
       <iframe
       id="output-iframe"
       srcDoc={src}
       title='Output'
       sandbox='allow-scripts'
       frameBorder={0}
       width="100%"
       height="100%"
        />
    </Container>
  );
};

export default Result;