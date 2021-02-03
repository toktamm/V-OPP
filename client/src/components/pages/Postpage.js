import React, { useState } from "react";
import "./Postpage.css";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FindPost from "../FindPost";

export default function PostPage(props) {
  const [category, setCategories] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [positions_available, setPositionsAvailable] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail_photo_url, setImg] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [post_code, setPostCode] = useState("");
  const [date_posted, setDatePosted] = useState("");
  const [start_date, setStartDay] = useState("");
  const [requirements, setRequirement] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    let user_id = props.user.id;
    let data = {
      category,
      title,
      organization,
      positions_available,
      thumbnail_photo_url,
      description,
      street,
      city,
      province,
      post_code,
      date_posted,
      start_date,
      requirements,
      additional_info,
      user_id,
    };
    return axios
      .post("http://localhost:3001/api/posts", data)
      .then((respond) => {
        console.log("this is data: ", data);
        console.log("this is respond: ", respond);
        history.push("/");
      })
      .catch((err) => {
        console.log("Got an error: ", err);
      });
  }

  return (
    <section className="PostPage">
      <h1>
        {console.log(
          "this is props from Postpage.js            " + props?.user?.id
        )}
      </h1>
      <FindPost />
      <Image className="imgPost" src="images/img-5.jpg" />
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group size="lg" as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              autoFocus
              type="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" as={Col} controlId="organization">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              autoFocus
              type="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" as={Col} controlId="positions_available">
            <Form.Label>Positions Available </Form.Label>
            <Form.Control
              autoFocus
              type="positions_available"
              value={positions_available}
              onChange={(e) => setPositionsAvailable(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <InputGroup className="input">
          <InputGroup.Prepend>
            <InputGroup.Text>Description</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            autoFocus
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>

        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              autoFocus
              type="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="province">
            <Form.Label>Province</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              autoFocus
              type="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option>Choose...</option>
              <option>Ontario</option>
              <option>Quebec</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="post_code">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              autoFocus
              type="post_code"
              value={post_code}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group size="lg" controlId="street">
          <Form.Label>Street</Form.Label>
          <Form.Control
            autoFocus
            type="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="categories">
            <Form.Label>Categories</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              autoFocus
              type="categories"
              value={category}
              onChange={(e) => setCategories(e.target.value)}
            >
              <option>Choose...</option>
              <option>Arts/Culture</option>
              <option>Animals</option>
              <option>Children/Youth</option>
              <option>Community</option>
              <option>Disaster/Relief</option>
              <option>Education</option>
              <option>Environment</option>
              <option>Religious</option>
              <option>Health</option>
              <option>Seniors</option>
              <option>Sports</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="date_posted">
            <Form.Label>Date Posted</Form.Label>
            <Form.Control
              placeholder="YYYY-MM-DD"
              autoFocus
              type="date"
              value={date_posted}
              onChange={(e) => setDatePosted(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="start_date">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              placeholder="YYYY-MM-DD"
              autoFocus
              type="date"
              value={start_date}
              onChange={(e) => setStartDay(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <InputGroup className="input">
          <InputGroup.Prepend>
            <InputGroup.Text>Requirements</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            autoFocus
            type="requirements"
            value={requirements}
            onChange={(e) => setRequirement(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="input">
          <InputGroup.Prepend>
            <InputGroup.Text>Addition Information</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            autoFocus
            type="additional_info"
            value={additional_info}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="thumbnail_photo_url">
          <InputGroup.Prepend>
            <InputGroup.Text>Input an Image URL</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            autoFocus
            type="thumbnail_photo_url"
            value={thumbnail_photo_url}
            onChange={(e) => setImg(e.target.value)}
          />
        </InputGroup>

        <Button className="postButton" block size="lg" type="submit">
          Post Opportunity
        </Button>
      </Form>
    </section>
  );
}
