import { useRouter } from "next/router";

function Snug() {
  const router = useRouter();
  const { snug } = router.query;
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="px-5">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-lg title-font font-medium text-gray-400 mb-2">
            Labour Law
          </h2>
          <h1 className="title-font text-3xl font-medium text-gray-900 mb-4">
            Article 370 - You are allowed to own land in Jammu and Kashmir
          </h1>
          <p className="leading-relaxed mb-4">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. It is also
            used to temporarily replace text in a process called greeking, which
            allows designers to consider the form of a webpage or publication,
            without the meaning of the text influencing the design. Lorem ipsum
            is typically a corrupted version of De finibus bonorum et malorum, a
            1st-century BC text by the Roman statesman and philosopher Cicero,
            with words altered, added, and removed to make it nonsensical and
            improper Latin. The first two words themselves are a truncation of
            dolorem ipsumpain itself.
          </p>
          <a className="text-indigo-500 inline-flex items-center text-lg">
            See the whole Law
            <svg
              className="w-6 h-6 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Snug;
