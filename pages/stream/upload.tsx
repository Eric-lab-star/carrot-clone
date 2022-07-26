import Btn from "../../components/btn";
import Input from "../../components/input";
import Layout from "../../components/layout";
import VideoSVG from "../../components/svg/video";
import TextArea from "../../components/textArea";
import UploadField from "../../components/uploadField";
export default function UploadStream() {
  return (
    <Layout title="Upload" canGoBack>
      <div className="py-6 px-6">
        <UploadField SVG={<VideoSVG />} />
        <Input label="Title" placeholder="Title" />
        <TextArea placeholder="Please describe about your video." />
        <Btn>Go Live</Btn>
      </div>
    </Layout>
  );
}
