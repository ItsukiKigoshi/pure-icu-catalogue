import { DevServerCourse } from "@/type/Types";

import { useState } from "react";

export default function SearchCourses() {
  const [query, setQuery] = useState("");
  const [term, setTerm] = useState("*");

  const [courses, setCourses] = useState([]);
  const searchCourses = (query: string, term: string) => {
    const url = `https://devserver.icu/api/v3/search?q=${query}&term=${term}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
        return data;
      });
  };

  return (
    <div>
      <p>SearchCourses</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCourses(query, term).then((data) => console.log(data));
        }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Choose Term form Spring, Autumn, or Winter  */}
        <fieldset
          onChange={(e) => setTerm((e.target as HTMLInputElement).value)}
        >
          <input type="radio" value="*" name="term" defaultChecked /> All
          <input type="radio" value="Spring Term" name="term" /> Spring
          <input type="radio" value="Autumn Term" name="term" /> Autumn
          <input type="radio" value="Winter Term" name="term" /> Winter
        </fieldset>
        <button type="submit">Search</button>
      </form>
      <p>Result</p>
      <div>
        {courses.length === 0 ? (
          <p>No courses found</p>
        ) : (
          <p>Found {courses.length} courses</p>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Course</th>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course: DevServerCourse) => (
            <tr key={course.regno}>
              <td>{course.cno}</td>
              <td>{course.title_e}</td>
              <td>{course.term}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
