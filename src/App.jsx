import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";


const url = 'https://www.course-api.com/react-tabs-project';




const App = () => {
const [resumes,setResumes] = useState([]);
const [loading,setLoading] = useState(true);
const [currentItem,setCurrentItem] = useState(0);
const getData =async()=>{
  setLoading(true);
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      setResumes(data)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
}

useEffect(() => {
getData();
},[]);

if(loading){
  return (
    <section className="jobs-center">
      <div className="loading"></div>
    </section>
  )
}

  return (
    <section className="jobs-center">
      <BtnContainer resumes={resumes} setCurrentItem={setCurrentItem} currentItem={currentItem} />
      <JobInfo resumes={resumes} currentItem={currentItem} />
    </section>
  )
};
export default App;
