import './Content.css';
import video from './assets/3694915-hd_1080_1920_30fps.mp4';

const Content = () => {
  return (
    <div className="video-container">
      <video className="full-screen-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Content;