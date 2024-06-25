import { BsArrowReturnRight, BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAskQuestionMutation } from "../../features/job/jobApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

function Chat({ queries }) {
  const { user } = useSelector((state) => state.userState);
  const [askQuestion] = useAskQuestionMutation();
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  // ask question
  const handleAskQuestion = (e) => {
    e.preventDefault();

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

    askQuestion(data);
  };
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-primary mb-5">General Q&A</h1>
        <div className="text-primary my-2">
          {queries?.map(({ question, email, reply }, index) => {
            return (
              <div key={index}>
                <small>{email}</small>
                <p className="text-lg font-medium">{question}</p>
                {reply?.map((item, index) => (
                  <p
                    className="flex items-center gap-2 relative left-5"
                    key={index}
                  >
                    <BsArrowReturnRight /> {item}
                  </p>
                ))}

                {user?.role === "employer" && (
                  <div className="flex gap-3 my-5">
                    <input
                      placeholder="Reply"
                      type="text"
                      className="w-full "
                    />
                    <button
                      className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                      type="button"
                    >
                      <BsArrowRightShort size={30} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <form onSubmit={handleAskQuestion}>
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
      </div>
    </div>
  );
}

Chat.propTypes = {
  queries: PropTypes.array,
};

export default Chat;
