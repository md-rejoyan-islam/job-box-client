import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAskQuestionMutation } from "../../features/job/jobApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-toastify";

function AskQuestion() {
  const { user } = useSelector((state) => state.userState);
  const [askQuestion] = useAskQuestionMutation();
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const questionRef = useRef();

  // ask question
  const handleAskQuestion = async (e) => {
    e.preventDefault();

    // if not logged in
    if (!user) {
      return navigate("/login", {
        state: { from: location },
      });
    }

    const question = e.target.question.value;

    if (!question) return toast.error("Question is required");

    const data = {
      email: user?.email,
      job: id,
      question,
    };

    const payload = await askQuestion(data);
    if (payload.data.success) {
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleAskQuestion} ref={questionRef}>
      <div className="flex gap-3 my-5">
        <input
          placeholder="Ask a question..."
          type="text"
          name="question"
          className="w-full rounded-md"
        />
        <button
          className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
          type="submit"
        >
          <BsArrowRightShort size={30} />
        </button>
      </div>
    </form>
  );
}

export default AskQuestion;
