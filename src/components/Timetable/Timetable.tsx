import { Course } from "@/type/Types";

const daysOfWeek = ["M", "TU", "W", "TH", "F"];

export default function Timetable(props: { courses: Course[] }) {
  const enrolledCourses = props.courses.filter((course) => course.isEnrolled);
  const daysOfWeek = ["M", "TU", "W", "TH", "F"];
  const timetable: { [key: string]: string[] } = {};

  enrolledCourses.forEach((course) => {
    course.schedule?.forEach((entry) => {
      const [time, day] = entry.split("/");
      if (!timetable[`${time}/${day}`]) {
        timetable[`${time}/${day}`] = [];
      }
      timetable[`${time}/${day}`].push(course.e);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Timetable</th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 5 }, (_, row) => (
          <tr key={row}>
            <td>{row + 1}</td>
            {daysOfWeek.map((day) => (
              <td key={day}>
                {timetable[`${row + 1}/${day}`]?.map((timetableItem) => (
                  <p key={timetableItem}>{timetableItem}</p>
                ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
