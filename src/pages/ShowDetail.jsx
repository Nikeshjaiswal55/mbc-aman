import { useEffect } from "react";
import SuggestedVideos from "../components/SuggestedVideos";
import { VideoDetails, VideoPlayer } from "../components/VedioDetail";
import { useFirebase } from "../context/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../service/useApi";
import { fetchData } from "../service/apiService";
import { ShowPosterGrid } from "../components/ScrollerGrid";

export const ShowDetail = () => {
  const firebase = useFirebase();
  const { content_id } = useParams();

  const { data: getContentSource, callApi: fetchContentSource } =
    useApi(fetchData);

  const { data: vdeoUrl, callApi: fetchVedio } = useApi(fetchData);

  useEffect(() => {
    fetchContentSource(`/api/watch-video?item_id=${content_id}`);
  }, [content_id]);

  useEffect(() => {
    fetchVedio(`/api/play-video?item_id=${content_id}`);
  }, [content_id]);

  return (
    <div className="container pt-2 mb-5">
      <div className="row mb-5">
        {/* Main Video and Details */}
        <div className="col-lg-8 col-12 order-1 order-lg-1">
          <VideoPlayer data={vdeoUrl?.data?.video} />
        </div>

        {/* Suggested Videos */}
        <div className="col-lg-4 col-12 order-3 order-lg-2">
          <VideoDetails data={getContentSource?.data.item} />
        </div>
      </div>
      <div className="row mb-5">
        <ShowPosterGrid shows={getContentSource?.data.related_items} />
      </div>
    </div>
  );
};
