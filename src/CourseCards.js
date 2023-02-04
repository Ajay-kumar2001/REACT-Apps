import Courseimg from "./CourseImg";
import Courselist from "./Courselist";
import CourseHed from "./CourseHed";
import "./card.css"
import "./inner.css"

function CourseCard(p){
   let arr1=["Introduction" ,"Datatypes","condictional Statment","Functions","oops","expceptions Handeling","Files" ]
return (
        <div className="card">
            <div className="inner">
            <div>
                <CourseHed deta={p.deta.ched}/>
                <ul>
                    {
                     arr1.map((item)=><Courselist lideta={item}/>)
                    }
                </ul>
            </div>
            <div>
            <Courseimg imgdeta={p.deta.img}/>
            </div>
            </div> 
        </div>
    )
}
export default CourseCard

