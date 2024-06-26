import { BsArrowReturnRight, BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import AskQuestion from "./AskQuestion";
import { useReplyInQuestionMutation } from "../../features/job/jobApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function Chat({ queries }) {
  const { user } = useSelector((state) => state.userState);

  const { id } = useParams();

  const [questionReply] = useReplyInQuestionMutation();

  // user all queries
  let myQueryies = [];

  if (user?.role === "candidate") {
    myQueryies = queries.filter((query) => query.email === user?.email);
  } else {
    myQueryies = queries;
  }

  // handle ask question
  const handleReply = async (e, index) => {
    e.preventDefault();

    const reply = e.target.reply.value;
    if (!reply) return toast.error("Message is required!");

    const data = {
      index,
      reply,
      email: user?.email,
      job: id,
    };
    // console.log(data);
    const payload = await questionReply(data);

    if (payload.data.success) {
      e.target.reset();
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-primary mb-5">General Q&A</h1>
        <div className="text-primary my-2">
          {myQueryies?.map(({ question, email, reply }, index) => {
            return (
              <div key={index}>
                <div>
                  <small>{email}</small>
                  <p className="text-lg font-medium">{question}</p>
                  {reply?.map((item, index) => (
                    <p
                      className="flex items-center gap-2 relative left-5"
                      key={index}
                    >
                      <BsArrowReturnRight /> {item?.reply}
                    </p>
                  ))}
                </div>

                {user?.role === "employer" && (
                  <form
                    onSubmit={(e) => {
                      handleReply(e, index);
                    }}
                  >
                    <div className="flex gap-3 my-5">
                      <input
                        placeholder="Reply"
                        type="text"
                        name="reply"
                        className="w-full "
                      />
                      <button
                        className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                        type="submit"
                      >
                        <BsArrowRightShort size={30} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            );
          })}
        </div>

        {/* candidate question ask section  */}
        {user?.role !== "employer" && <AskQuestion />}
      </div>
    </div>
  );
}

Chat.propTypes = {
  queries: PropTypes.array,
};

export default Chat;
