import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Appeal Reason Summary" />
        <ReactQuill className="add-new-post__editor mb-1" />
                <strong className="text-muted d-block mb-2" style={{fontSize:'1rem', fontWeight:'600', marginTop: '1vw'}}>
                  Attach Relevant Files to Support your Appeal
                </strong>
                <input type="file" name="file"/>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
