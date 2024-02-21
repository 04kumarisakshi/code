import { useState} from 'react'

import CodeMirror from "@uiw/react-codemirror";



function Cplus() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');


 
  const compileCode = async () => {
    const data = Cplus.props.code;
    setOutput(data.output);
  };
 return (
<div className="p-7">
  <h1 className=' text-white text-xl'>C++ code</h1>
  <div  className=" w-full  h-80 bg-white">
<CodeMirror
        value={code}
        onChange={(value) => setCode(value)}
        options={{ mode: 'clike' }}
      />
      </div >
      <button onClick={compileCode} className=' text-white bg-slate-500 p-3 rounded-xl m-3'>Compile</button>
      <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                    Result
                </h2>
                <div className="w-full h-48 bg-slate-400">{output}</div></div>
      </div>
  )
}

export default Cplus