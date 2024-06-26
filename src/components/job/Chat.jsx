import { BsArrowReturnRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import AskQuestion from "./AskQuestion";
import QuestionReply from "./QuestionReply";

function Chat({ queries }) {
  const { user } = useSelector((state) => state.userState);

  // user all queries
  let myQueryies = [];

  if (user?.role === "candidate") {
    myQueryies = queries.filter((query) => query.email === user?.email);
  } else {
    myQueryies = queries;
  }

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
                  <QuestionReply index={index} email={user?.email} />
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
