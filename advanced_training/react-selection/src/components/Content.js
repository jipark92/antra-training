// import Button from "./Button";
// import Header from "./Header";
// import {useState} from 'react'

// export default function Content() {

//     const [all, setAll] = useState(false)
//     const [kosher, setKosher] = useState(false)
//     const [noCelery, setNoCelery] = useState(false)
//     const [noEgg, setNoEgg] = useState(false)


//     return (
//         <div className="content-container">
//             <div className="selection-container">
//                 <div>
//                     <input type="checkbox" id="select-all" name="select-all" value="select all" onClick={()=>{setAll(prevAll=> !prevAll)}}/>
//                     <label htmlFor="select-all" >Select All</label>
//                 </div>

//                 <div>
//                     <input type="checkbox" id="kosher" name="kosher" value="kosher" onClick={()=>{setKosher(prevKosher=> !prevKosher)}} />
//                     <label htmlFor="kosher" >Kosher</label>
//                 </div>

//                 <div>
//                     <input type="checkbox" id="no-celery" name="no-celery" value="no celery" onClick={()=>{setNoCelery(prevNoCelery=> !prevNoCelery)}}/>
//                     <label htmlFor="no-celery" >No Celery(inc celeriac)</label>
//                 </div>

//                 <div>
//                     <input type="checkbox" id="no-egg" name="no-egg" value="no egg"onClick={()=>{setNoEgg(prevNoEgg=> !prevNoEgg)}} />
//                     <label htmlFor="no-egg" >No Egg</label>
//                 </div>
//             </div>
//         </div>
//     )
// }
