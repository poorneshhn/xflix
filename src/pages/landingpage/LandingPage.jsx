import Layout from "../../components/basic/layout/Layout";
import CustomModal from "../../components/basic/modal/CustomModal";
import Header from "../../components/header/Header";
import VideoList from "../../components/videolist/VideoList";
import { useEffect, useState } from "react";
const LandingPage = (props) => {
  const [videoListObj, setVideoListObj] = useState(props.videoList || []);

  useEffect(() => {
    setVideoListObj(props.videoList);
  }, [props.videoList]);

  return (
    <div className="landingpage-container">
      <Header
        showFilterByCategory={true}
        showFilterByAge={true}
        showSearchComponent={true}
        showUploadFileComponent={true}
        setCurrentSortType={props.setCurrentSortType}
        setSelectedGenreFilter={props.setSelectedGenreFilter}
        setSelectedContentRatingFilter={props.setSelectedContentRatingFilter}
        setSearchValue={props.setSearchValue}
      />
      <Layout>
        <VideoList
          list={videoListObj}
          setSelectedVideoId={props.setSelectedVideoId}
        />
      </Layout>
      <CustomModal />
    </div>
  );
};

export default LandingPage;
