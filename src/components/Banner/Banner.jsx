import "./Banner.scss";

export default function Banner({ image, text }) {
  const style = image ? { backgroundImage: `url(${image})` } : {};

  return (
    <div className="banner" style={style}>
      {text && <h1>{text}</h1>}
    </div>
  );
}
