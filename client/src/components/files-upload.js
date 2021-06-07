import { useState } from 'react';
// import axios from 'axios';

const FilesUploadComponent = () => {
  const [state, setState] = useState({
    images: [],
    files: [],
  });

  const onFileChange = e => {
    setState({ images: Array.from(e.target.files), files: e.target.files });
  }

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    // for (let img in images) {
    //     formData.set(img, img)
    // }

    console.log('files', Object.keys(state.files))

    for (let file in state.files) {
      formData.set('file', file)
    }

    console.log('uploading', 'fd', formData, 'fl', state.files)

    // https://dev.to/eswari/how-to-send-email-with-attachments-in-node-js-using-nodemailer-3g4i

    let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    // headers.append('Origin', 'http://localhost:3000');


    fetch("http://localhost:3001/api/upload", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // "Access-Control-Allow-Origin": 'http://localhost:3001'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(formData) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(data => console.log(data));

    // https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="file" name="imgCollection" onChange={onFileChange} multiple />
          </div>
          <div className="img-list">
            <ul>
              {state.images.map((img, i) => <li key={img.name + i}>{img.name}</li>)}
            </ul>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit" disabled={!(state.images.length)}>Feltöltés</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FilesUploadComponent;

// const types = ['image/png', 'image/jpeg', 'image/gif']
//   // loop access array
//   for(var x = 0; x<files.length; x++) {
//    // compare file type find doesn't matach
//        if (types.every(type => files[x].type !== type)) {
//        // create error message and assign to container   
//        err += files[x].type+' is not a supported format\n';
//      }
//    };
