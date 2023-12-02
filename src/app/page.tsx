"use client";
import CourseOfferings from "@/components/CourseOfferings/CourseOfferings";
import List from "@/components/List/List";
import Timetable from "@/components/Timetable/Timetable";
import { useEffect, useState } from "react";

export default function Home() {
  const [courses, setCourses] = useState([
    {
      rgno: 1,
      season: "Spring",
      ay: "2022",
      no: "CS101",
      lang: "English",
      e: "Introduction to Computer Science",
      j: "コンピュータサイエンス入門",
      instructor: "John Doe",
      schedule: ["3/M", "3/W", "3/F"],
      unit: "3",
      isEnrolled: false,
    },
    {
      rgno: 2,
      season: "Autumn",
      ay: "2022",
      no: "MTH201",
      lang: "English",
      e: "Calculus",
      j: "微積分学",
      instructor: "Jane Smith",
      schedule: ["3/TU", "2/TH", "3/TH"],
      unit: "4",
      isEnrolled: false,
    },
    {
      rgno: 3,
      season: "Summer",
      ay: "2022",
      no: "PHYS301",
      lang: "English",
      e: "Physics",
      j: "物理学",
      instructor: "David Johnson",
      schedule: ["4/M", "4/W", "4/F"],
      unit: "3",
      isEnrolled: false,
    },
  ]);

  useEffect(() => {
    const enroledCourses = courses.filter((course) => course.isEnrolled);
  }, [courses]);

  const toggleIsEnrolled = (rgno: number) => {
    return () => {
      setCourses(
        courses.map((course) => {
          if (course.rgno === rgno) {
            return { ...course, isEnrolled: !course.isEnrolled };
          } else {
            return course;
          }
        })
      );
    };
  };

  return (
    <div>
      <CourseOfferings courses={courses} toggleIsEnrolled={toggleIsEnrolled} />
      <Timetable courses={courses} />
      <List courses={courses} />
    </div>
  );
}
