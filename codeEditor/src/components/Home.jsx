import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className=" text-3xl text-cyan-50 m-12 gap-3">
        <Link to="/webdev"> Webdevlopment</Link>
        
    </div>
     <div className=" text-3xl text-cyan-50 m-12 gap-3">
 
     <Link to="/cplus"> CPP</Link>
 </div>
 </>
  )
}

export default Home