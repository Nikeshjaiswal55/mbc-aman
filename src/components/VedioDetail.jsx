// components/VideoDetails.js

export function VideoDetails({ data }) {
  return (
    <div className="video-details">
      <h4 style={{ marginBottom: "1rem" }}>{data?.title}</h4>
      <p style={{ marginBottom: "2px" }}>Published on: 01 Jan 2023</p>
      <p style={{ marginBottom: "2px" }}>Views: {data?.view}</p>
      <p style={{ marginBottom: "1rem" }}>{data?.ratings}</p>
      <p>{data?.description}</p>
    </div>
  );
}

export function VideoPlayer({ data }) {
  const videoSrc = data?.length > 0 ? data[0]?.content : null;

  // Log the video source URL for debugging
  console.log("Video URL:", videoSrc);

  return (
    <div className="video-player mb-3">
      {videoSrc ? (
        <video
          width="100%"
          className="vedio-detail-height"
          controls
          autoPlay={true}
        >
          <source src={videoSrc} type="video/mp4" autoPlay={true} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video not available</p>
      )}
    </div>
  );
}
