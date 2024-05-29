import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  console.log("the course is:", course);
  console.log("ggf", course?.image.url);

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-ms overflow-x-hidden">
      {/* //make parent relative so that the heart child can be absolute */}
      <div className="relative">
        <img src={course?.image.url} alt="errror" />
        {/* make below absolute */}
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder ontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6  ">
          {course.title}
        </p>
        <p className="mt-2 text-white ">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
