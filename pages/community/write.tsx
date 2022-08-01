import Btn from "@components/btn";
import Layout from "@components/layout";
import TextArea from "@components/textArea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout title="Write">
      <div className=" px-4">
        <div className="mt-2">
          <TextArea placeholder="Please write something here" label=" Title" />
          <Btn>post</Btn>
        </div>
      </div>
    </Layout>
  );
};

export default Write;
