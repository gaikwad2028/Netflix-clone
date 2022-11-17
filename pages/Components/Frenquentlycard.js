import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Question from '../../Data/Question';

export const Frenquentlycard = () => {
  const [question, setQuestion] = React.useState(Question)
  const [visibel, setVisibel] = React.useState([])
  const [show,setShow]=React.useState(false)
  const[show1,setShow1]=React.useState(false)
  
  const handelopen = (res, index) => {
    // console.log("res,index", res, "index", index)
     
    // console.log(visibel===res.visibel,"poiuytrewq")
    var a=[];

    question.map((res, index1) => {
      
      console.log("index", index, " index1 ", index1,index==index1)
      if (index1 == index) {
        res.visibel = true
        a.push(res)
        setShow(!show)
        setShow1(true)
      } 
      else if(index1!==index){
        res.visibel= false
        a.push("")
        setShow(true)
        setShow1(false)
      }

    }) 
    setVisibel(a)
    // console.log(res.visibel,"true")
  }
  // console.log("question ", question)

  
  const handelcancel= (res, index) =>{
    setShow1(false)
    setShow(!show)
  }
  // console.log(visibel, "ghj")


  // const handelopen=()=>{
  //   setVisibel(!visibel)
  //   setVisibel1(false)
  //   setVisibel2(false)
  // }
  // const handelopen1=()=>{
  //   setVisibel1(!visibel1)
  //   setVisibel(false)
  //   setVisibel2(false)
  // }
  // const handelopen2=()=>{
  //   setVisibel2(!visibel2)
  //   setVisibel(false)
  //   setVisibel1(false)
  // }
  // console.log(visibel,"visibel",visibel1,"visibel1","visibel2",visibel2)


  // console.log("question ++", question)
  return (
    <div className='questions'>
      <h1 className='ques'> Frequently ask question</h1>
      {question.map((res, index) => {
        // console.log(res.visibel, "res======")
        return (
          <div className='card' key={index}>
            <card className="qes-1">
              <p className='what'>{res.qes} </p>
               <AiOutlinePlus className='plus' size="md" onClick={() => { handelopen(res, index) }}  style={{display: show? "none":"block"}}></AiOutlinePlus>
           <MdCancel className='cancel' size="md"  onClick={()=>{handelcancel(res,index)}} style={{display:show1 || show ? "block":"none"}} ></MdCancel>
            </card>
           <div className='o'>
              { res.visibel ? 
                <p className='ans-1' style={{display: show || show1 ? "block":"none"}}>{res.ans1}</p>:""
              }
          
           </div>
          </div>
        )
      })
      }

    </div>
  )
}
