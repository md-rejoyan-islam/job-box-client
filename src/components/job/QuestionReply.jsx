import { BsArrowRightShort } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useReplyInQuestionMutation } from "../../features/job/jobApi";

function QuestionReply({ index, email }) {
  const { id } = useParams();

  const [questionReply] = useReplyInQuestionMutation();

  // handle ask question
  const handleReply = async (e, index) => {
    e.preventDefault();

    const reply = e.target.reply.value;
    if (!reply) return toast.error("Message is required!");

    const data = {
      index,
      reply,
      email,
      job: id,
    };
    // console.log(data);
    const payload = await questionReply(data);

    if (payload.data.success) {
      e.target.reset();
    }
  };

  return (
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
  );
}

export default QuestionReply;
