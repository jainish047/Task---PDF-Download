import { Entry } from "@/types/entry";

export default function Card({ entry }: { entry: Entry }) {
  return (<>
    {/* // <div className=""> */}
      <div
        className="font-semibold text-justify"
        dangerouslySetInnerHTML={{ __html: entry.htmlQuestion }}
      />
      <hr className="my-2" />
      <div
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: entry.htmlAnswer }}
      />
    {/* // </div> */}
    </>
  );
}
