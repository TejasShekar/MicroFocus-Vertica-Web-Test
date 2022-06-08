import {Link} from "react-router-dom";
import {BsArrowRightCircle} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="h-[50px] w-full bg-black text-white fixed bottom-0 flex items-center justify-center">
      <Link className="text-2xl font-bold" to="/page2">
        Go to Page 2
        <BsArrowRightCircle
          style={{display: "inline-block", marginLeft: "10px"}}
        />
      </Link>
    </footer>
  );
};
