import { Course } from "@/type/Types";

export default function List(props: { courses: Course[] }) {
  const filteredCourses = props.courses.filter((course) => course.isEnrolled);
  if (filteredCourses.length > 0) {
    return (
      <div>
        {filteredCourses.map((course) => (
          <div key={course.rgno}>
            <h3>{course.e}</h3>
            {course.schedule?.map((schedule) => (
              <div key={schedule}>{schedule}</div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>No items selected</div>;
  }
}
