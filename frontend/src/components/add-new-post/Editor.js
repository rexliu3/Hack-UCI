import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Priority Reason Summary" />
        <ReactQuill className="add-new-post__editor mb-1" placeholder="Please clearly and concisely describe your priority situation." />
        <strong className="text-muted d-block mb-2" style={{ fontSize: '1rem', fontWeight: '600', marginTop: '1vw' }}>
          Attach any relevant files / documentation to support your application (i.e. medical records)
                </strong>
        <input type="file" name="file" />
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
