import type { NextPage } from "next";
import Btn from "../../components/btn";
import Input from "../../components/input";
import Layout from "../../components/layout";
import PhotoSVG from "../../components/svg/photo";
import TextArea from "../../components/textArea";
import UploadField from "../../components/uploadField";

const Upload: NextPage = () => {
  return (
    <Layout title="Upload" canGoBack>
      <div className="py-6 px-5">
        <UploadField SVG={<PhotoSVG />} />
        <Input label="Name" placeholder="Please write your name" />
        <Input label="Price" placeholder="0.00" prefix="$" suffix="USD" />
        <TextArea
          label="Describtion"
          placeholder="Please introduce your items. Detail explanation has higher chance to be sold."
        />
        <Btn>Upload Product</Btn>
      </div>
    </Layout>
  );
};

export default Upload;
