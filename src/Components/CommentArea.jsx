import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

import PostManager from "./PostManager";

let fetched = false;

function postMessage(e)
{
  let asinID = e.target.attributes.asin.value;
  let text = e.target.value;
  let score = e.target.attributes.score.value;
  console.log("postMessage - " + asinID + " " + text + " " + score);

  let obj = {
    "comment": text,
    "rate": score,
    "elementId": asinID
  }
  let url = `https://striveschool-api.herokuapp.com/api/comments/`+asinID
    fetch(url + asinID, {
      method: "post",      
      headers: { 
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY3MmMyMjY0NGYxYjAwMTk1MmRmNjYiLCJpYXQiOjE3MTA2OTc1MDYsImV4cCI6MTcxMTkwNzEwNn0.VyiyEJ1QGuzf0DwOPRf_6Rr0-NpqDrEVjnKnsnVbiz0"
      },
      body: JSON.stringify(obj)
  })
  .then(resp => {
      return resp.json()
  })
  .then(data => {     
      console.log(obj);   
  })
.catch((err) => console.log("problem: ", err));

}

function getPosts(el){
    if(fetched == false){
        fetch("https://striveschool-api.herokuapp.com/api/books/:asin/comments/", {
            method: "GET",
            headers: {
           
            },           
          })
          .then((response) => response.json())
          .then((data) => {
          //  setJoke(data[0].joke);
            console.log(data);
         })
        fetched = true;
    }   
  }

export default function CommentArea(cardInfo) {

  const [message, setMessage] = useState("");
  const handleMessage = (e) => { 
    const input = e.target.value;
    setMessage(input)
    console.log("handleMessage - " + message);
  } 

  const [rating, setRating] = useState("");
  function handleRating(r)
  {
    const val = r.target.value;
    setRating(val)
    console.log(rating);
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                    <p className="text-muted small mb-0">
                      Shared publicly - Jan 2020
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip consequat.
                </p>

                <div className="small d-flex justify-content-start">
                  <a href="#!" className="d-flex align-items-center me-3">
                    <MDBIcon far icon="thumbs-up me-2" />
                    <p className="mb-0">Like</p>
                  </a>
                  <a href="#!" className="d-flex align-items-center me-3">
                    <MDBIcon far icon="comment-dots me-2" />
                    <p className="mb-0">Comment</p>
                  </a>
                  <a href="#!" className="d-flex align-items-center me-3">
                    <MDBIcon fas icon="share me-2" />
                    <p className="mb-0">Share</p>
                  </a>
                </div>
              </MDBCardBody>

              <MDBCardFooter
                className="py-3 border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <MDBTextArea onChange={handleMessage} label='Message' id='textAreaExample' rows={4} style={{backgroundColor: '#fff'}} wrapperClass="w-100" />
                </div>
                <div className="float-end mt-2 pt-1">
                <div class="form-check">
                    <p>Rate:</p>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1} onClick={handleRating} checked/>
                    <label class="form-check-label" for="flexRadioDefault1">
                      1/5
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  value={2} onClick={handleRating} />
                    <label class="form-check-label" for="flexRadioDefault2">
                      2/5
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"  value={3} onClick={handleRating} />
                    <label class="form-check-label" for="flexRadioDefault3">
                      3/5
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"  value={4} onClick={handleRating} />
                    <label class="form-check-label" for="flexRadioDefault4">
                      4/5
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"  value={5} onClick={handleRating} />
                    <label class="form-check-label" for="flexRadioDefault5">
                      5/5
                    </label>
                  </div>
                  <MDBBtn size="sm" className="me-1" value={message} onClick={postMessage} asin={cardInfo.asin} score={rating}> Post comment</MDBBtn>                 
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
