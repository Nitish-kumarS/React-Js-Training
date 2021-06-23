const LoadnewContent = (props) => {
  function loadImage(image) {
    if (image === "None") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
    }
    return image;
  }
  function loadAuthor(msg) {
    if (msg !== "[]") {
      return msg;
    }
    return "Author not mentioned";
  }
  return (
    <div className="contentNews">
      <table>
        <tr>
          <th rowSpan="7">
            <img id="newsImage" src={loadImage(props.x.image)} alt="No image" />
          </th>
        </tr>
        <tr>
          <label>TITLE: {props.x.title}</label>
          <br />
        </tr>
        <tr>
          <label>Description: {props.x.description}</label>
          <br />
        </tr>
        <tr>
          <label>For more detail: </label>
          <a id="content-a" href={props.x.url}>{props.x.url}</a>
          <br />
        </tr>
        <tr>
          <label>Author: {loadAuthor(props.x.author)}</label> <br />
        </tr>
        <tr>
          <label>PublishedAt: {props.x.published}</label>
        </tr>
      </table>
    </div>
  );
};

export default LoadnewContent;
