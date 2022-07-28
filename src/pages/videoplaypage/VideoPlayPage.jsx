import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomHr from "../../components/basic/customhr/CustomHr";
import DisplayError from "../../components/basic/displayerror/DisplayError";
import Layout from "../../components/basic/layout/Layout";
import Header from "../../components/header/Header";
import VideoList from "../../components/videolist/VideoList";
import VideoPlayer from "../../components/videoplayer/VideoPlayer";
import { isEmptyJson } from "../../utils/utils";
const VideoPlayPage = (props) => {
  const [videoListObj, setVideoListObj] = useState(props.videoList || []);
  const videoId = useParams().id;
  // const [video, setVideo] = useState({});

  useEffect(() => {
    // setLoading(true);
    // try {
    //   (async () => {
    //     const res = await axiosInstance.get(`/v1/videos/${videoId}`);
    //     setVideo(res.data);
    //   })();
    // } catch (error) {
    //   setVideo({});
    //   console.log(error, "this is error");
    // } finally {
    //   setLoading(false);
    // }

    props.setSelectedVideoId(videoId);
  }, [videoId]);

  useEffect(() => {
    setVideoListObj(props.videoList);
  }, [props.videoList]);

  return (
    <div>
      <Header
        showFilterByCategory={false}
        showFilterByAge={false}
        showSearchComponent={false}
        showUploadFileComponent={false}
      />
      <Layout>
        {isEmptyJson(props.currentVideo) ? (
          <DisplayError errorMessage="Please select a different video or try again" />
        ) : (
          <div>
            <VideoPlayer video={props.currentVideo} />
          </div>
        )}
        <CustomHr />
        <VideoList list={videoListObj} />
      </Layout>
    </div>
  );
};

export default VideoPlayPage;
