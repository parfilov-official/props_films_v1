import Star from "../Star/Star.tsx";
import {FC, ReactNode} from "react";

type Stars = {
  count: number
}

const Stars:FC<Stars> = ({count = 0}):ReactNode => {
  let starCount = [];
  if(count <= 5) {
    for (let i = 0; i < count; i++) {
      starCount.push(i);
    }
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {starCount.map((star) => <Star key={star}/>)}
    </ul>
  );
};

export default Stars;

//   console.log()