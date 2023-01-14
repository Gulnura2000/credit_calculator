import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import { useState } from 'react';
function App() {
 const [inp1,setInp1] = useState()
 const [inp2 , setInp2] = useState(20)
 const [inp3 , setInp3] = useState()
const [month ,setmonth] = useState(null)
const [overpayment ,setoverpayment] = useState(null)
  let func = ()=>{
    let parse1 = parseFloat(inp1) 
    let parse2 = parseFloat(inp2)
    let parse3 = parseFloat(inp3)
    let a = (parse2/12)/100
    let k = (a* Math.pow( (1+a),parse3 )/(Math.pow( (1+a), parse3 )-1))
    let s = (k*parse1) 
    let p = (s*parse3)-parse1
    setmonth(Math.round(s))
    setoverpayment( Math.round(p) )  
  }

  return (
    <div className="App col-4 mx-auto text-center my-5">
      <p className='fs-4'> сумма кредита </p>
    <input className='form-control mt-4' onChange={(e)=>{setInp1(e.target.value)}} type="text" placeholder='сумма вложений ' />
    <p className='fs-4'> процентная ставка </p>
    <input className='form-control mt-4 '  type="text"  value={inp2} />
    <p className='fs-4'> срок </p>
    <input className='form-control mt-4 ' onChange={(e)=>{setInp3(e.target.value)}} type="number" defaultValue={'1'} />
    <button className='btn btn-outline-light mx-auto my-5'onClick={func} > посчитать </button>

    { month != null ? <> 
    <h3> Ежемесячный платеж {month} </h3> </> : <></> }
    {overpayment != null ? <>
      <h3> переоплата {overpayment}</h3>
    </>  :<></> }



    </div>
    

  );
}

export default App;
