import {useNavigate} from "react-router-dom";

export const Page2 = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen p-10 flex items-start justify-between flex-col">
      <h1 className=" text-4xl mb-2">Page 2</h1>
      <p>
        The content in page 2 can be anything. Candidate can feel free to
        brainstorm, and decide to pick any of the following topics, and the
        content is not meant to be lengthy:
        <br /> a. Biography of yourself <br /> b. Fun activities you and/or your
        family did recently <br /> c. Recent news that you find interesting to
        share
        <br /> The content can contain text, links, images …, with any styles
        you deem fit
      </p>
      <button
        className=" bg-stone-300 px-2 py-1 rounded text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
};
