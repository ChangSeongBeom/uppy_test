import React, { Component, Fragment } from "react";
import UppyModal from "./UppyModal";

class ImagesList extends Component {
  state = {
    images: [
      { id: "1", url: "1.jpg" },
      { id: "2", url: "2.jpg" },
      { id: "3", url: "3.jpg" }
    ]
  };

  handleUploadCompleted = (id, url) => {
    console.log("handleUploadCompleted(), id:", id, " - url:", url);
    let images = this.state.images;
    images.push({ id, url });
    this.setState({ images });
  };

  render() {
    const { images } = this.state;

    return (
      <Fragment>
        <p>
          <b>Images List</b>
        </p>
        <table>
          <tbody>
            {images.map(image => (
              <tr key={image.id}>
                <td>{image.id} - {image.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <UppyModal handleUploadCompleted={this.handleUploadCompleted} />
      </Fragment>
    );
  }
}

export default ImagesList;
