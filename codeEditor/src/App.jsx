
import { useState,useCallback } from 'react'
import Navbar from './components/Navbar'
import Result from './components/Result'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

function App() {
  const [html_edit ,setHtml]=useState('');
  const [css_edit ,setCSS]=useState('');
  const [javascript_edit ,setJavascript]=useState('');
  
  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${javascript_edit}</script>
  </html>
  `
const onChangeHtml=useCallback((value)=>
{
 setHtml(value)
},[])
const onChangecss=useCallback((value)=>
{
 setCSS(value)
},[])
const onChangejs=useCallback((value)=>
{
 setJavascript(value)
},[])

  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
<div className='bg-[#282c34] p-4 rounded-lg shadow'>
<h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
<CodeMirror
value={''}
height="342px"
theme="light"
extension={[html(true)]}
onChange={onChangeHtml}
/>
</div>
<div className='bg-[#282c34] p-4 rounded-lg shadow'>
<h2 className="text-lg font-semibold mb-2 text-white">Css</h2>
<CodeMirror
value={''}
height="342px"
theme="light"
extension={[css(true)]}
onChange={onChangecss}
/>
</div>
<div className='bg-[#282c34] p-4 rounded-lg shadow'>
<h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
<CodeMirror
value={''}
height="342px"
theme="light"
extension={[javascript(true)]}
onChange={onChangejs}
/>
</div>


      </div>
      <Result
        srcCode={srcCode}
        />
    </div>
  )
}

export default App