
import { ListGroup, ListGroupItem } from 'bootstrap-react';
import data from './fantasy.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Children, useState } from 'react';
import { MDBCol } from "mdbreact";
import './AllTheBooks.css'
import CommentArea from './CommentArea';

let lastClicked = null;
function DrawAllTheBooks() {

  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(data)


 
  let input = null;
  const handleInputChange = (e) => { 

   
    console.log(e.target.value);
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = data.filter((el) =>
      el.title.includes(searchTerm)
    );

    setFilteredUsers(filteredItems);
  }

  const [clicked, setClicked] = useState(false);

  function handleBookClick(e)
  {
    setClicked(!clicked);

    if(lastClicked !== e.target && lastClicked != null) {
      lastClicked.style.border = "2px solid rgba(242, 248, 248, 0.733)"; 
    }

    e.target.style.border= clicked ? "3px solid red" : "2px solid rgba(242, 248, 248, 0.733)"; 
    lastClicked = e.target;
  }
  


  return(

    <div className="container">
      <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input onChange={handleInputChange} className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
      </MDBCol>


      {filteredUsers.map(e => 

      <div className="row" onClick={handleBookClick}>
        <div   className="col p-3">
        <Card style={{ width: '36rem' }} class="card-border">
              <Card.Img variant="top" src={e.img}/>
              <Card.Body>
              <Card.Title>{e.title}</Card.Title>
              <Card.Text>
                EUR {e.price}
              </Card.Text>
              <Button variant="warning">Add to Cart</Button>    
              <CommentArea
                asin = {e.asin}
                title = {e.title}
              />        
              </Card.Body>
        </Card>
        </div>
      </div>
       
      )}

    </div>
  
  );
}

export default DrawAllTheBooks;