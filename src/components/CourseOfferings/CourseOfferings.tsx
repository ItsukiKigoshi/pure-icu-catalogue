import { Course } from "@/type/Types";

export default function CourseOfferings(props: {
  courses: Course[];
  toggleIsEnrolled: (rgno: number) => () => void;
}) {
  return (
    <div>
      {props.courses.map((course) => (
        <div key={course.rgno}>
          <input
            type="checkbox"
            checked={course.isEnrolled}
            onChange={props.toggleIsEnrolled(course.rgno)}
          />
          <span>{course.e}</span>
        </div>
      ))}
    </div>
  );
}
