import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";

import CourseList from "./CourseList";

export default function Coursepage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} /> {/*passing props to child component.*/}
    </>
  );
}


/*
Before splitting Course List page
// import React from "react";
// import { getCourses } from "../api/courseApi";

// export default class Coursepage extends React.Component {
//   state = {
//     courses: [],
//   };

//   componentDidMount() {
//     getCourses().then((courses) => this.setState({ courses: courses }));
//   }

//   render() {
//     return (
//       <>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map((course) => {
//               return (
//                 <tr key={course.id}>
//                   <td>{course.title}</td>
//                   <td>{course.authorId}</td>
//                   <td>{course.category}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//           ;
//         </table>
//       </>
//     );
//   }
// }

// /*
// this.state.courses.map((courses) => {
// //       return (
// //         <tr>
// //           <td>{courses.title}</td>
// //           <td>{courses.authorId}</td>
// //           <td>{courses.category}</td>
// //         </tr>
// //       );
// //     })}
// //   </tbody>; */

// /*
//  renderRow(courses) {
//     return (
//       <tr>
//         <td>{courses.title}</td>
//         <td>{courses.authorId}</td>
//         <td>{courses.category}</td>
//       </tr>
//     );
//   }

//   render() {
//     return (
//       <>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>{this.state.courses.map(this.renderRow)}</tbody>
//         </table>
//       </>
//     );
//   }
// }
// */
