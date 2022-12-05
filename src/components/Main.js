import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Button from 'react-bootstrap/Button';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import Form from 'react-bootstrap/Form';
import AddIcon from '@mui/icons-material/Add';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MoodBad from '@mui/icons-material/MoodBad';

function Main() {
    let [disabled, setDisabled] = useState(false)
    let [about, setAbout] = useState(true)
    let [posts, setPosts] = useState(false)
    let [friends, setFriends] = useState(false)
    let [friend, setFriend] = useState(false)
    let [friendlist, setFriendlist] = useState(false)
    let [savedPost, setSavedPost] = useState(false)
    let [profile, setProfile] = useState(false)
    let [notifications,setNotifications]=useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <section className='main-page'>
            <div className='container-fluid'>
                <div className='row d-flex flex-column'>
                    <div className='main-left-section'>
                        <div className='main-left-profile-section d-flex'>
                            <div className='main-profile-img'>
                                <img src="https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1" onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(false); setProfile(true) }}></img>
                            </div>
                            <div className='main-profile-name'>Welcome, Prajwal</div>
                            <div className='main-profile-logo'>
                                <img src='https://867688.smushcdn.com/2059713/wp-content/uploads/2020/09/Colen-Insurance-Agency-Icon-350x350.png?lossy=1&strip=1&webp=1'></img>
                            </div>
                        </div>
                        <div className='main-left-sub-section'>
                            <h2>Navigation</h2>
                            <ul>
                                <li className='link-content' onClick={() => { setFriend(false); setDisabled(false); setFriendlist(false); setSavedPost(false); setProfile(false);setNotifications(false) }}><HomeIcon className='icon-style' />Home</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(true); setFriend(false); setSavedPost(false); setProfile(false);setNotifications(false) }}><Diversity3Icon className='icon-style' />Friends</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(true); setProfile(false);setNotifications(false) }}><BookmarkIcon className='icon-style' />Saved Posts</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(false); setProfile(false);setNotifications(true) }}><NotificationsIcon className='icon-style' />Notifications</li>
                                <li><LogoutIcon className='icon-style' />Logout</li>
                            </ul>
                        </div>
                    </div>
                    {
                        disabled ? <></> :
                            <div className='main-right-section'>

                                <div className='main-right-top-section'>
                                    <div className='main-right-top-sub-section'>
                                        <div className='head-section d-flex flex-row'>
                                            <div className='profile-img'>
                                                <img src="https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1" alt='profile-image'></img>
                                            </div>
                                            <div className='profile-content d-flex'>
                                                {/* <h2>What's on your mind,Prajwal</h2> */}
                                                <input type='text' placeholder='what is on your mind Prajwal' className='input-profile-width'></input>
                                            </div>
                                        </div>
                                        <div className='body-section d-flex flex-row'>
                                            <div className='body-left-content'>
                                                <SentimentSatisfiedIcon className='body-icon' /><span className='body-para'  onClick={handleShow}>Mood</span>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Choose an emoji</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <TagFacesIcon id='emoji-collection'/>
                                                        <SentimentSatisfiedIcon id='emoji-collection'/>
                                                        <SentimentVeryDissatisfiedIcon id='emoji-collection'/>
                                                        <MoodBad id='emoji-collection'/>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                           Ok
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                            <div className='body-right-content'>
                                                <Button variant="primary" id='share-btn'>Share</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-right-bottom-section'>
                                    <div className='main-right-body d-flex flex-column'>
                                        <div className='other-profile d-flex'>
                                            <div className='other-profile-img'>
                                                <img src='https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1'></img>
                                            </div>
                                            <div className='other-profile-content'>
                                                <h2><span onClick={() => { setFriend(true); setDisabled(true) }}>Mounika</span> shared a <span style={{ color: 'blue' }}>album</span><span className='save-post-icon'><BookmarkIcon /></span></h2>
                                            </div>
                                        </div>
                                        <div className='other-content'>
                                            <div className='posted-data'>
                                                <p className='para'>I know from experience that we can only see what we are prepared to see. When I was in junior high, I practiced the piano hard to win a tough competition, but my teacher scolded me even for small mistakes and rarely praised me no matter how well I played.</p>
                                            </div>
                                            <div className='posted-image'>
                                                <img src="https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        friend ?
                            <div className='main-right-section d-flex flex-column'>
                                <div className='others-top-div'>
                                    <div className='others-top-image-div d-flex flex-column'>
                                        <div className='profile-img'>
                                            <img src="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1"></img>
                                        </div>
                                        <div className='profile-content d-flex flex-column'>
                                            <div className='profile-content-img d-flex'>
                                                <div className='profile-content-image'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>
                                                </div>
                                                <div className='profile-content-name'>
                                                    <h2>Mounika</h2>
                                                    <p>Anantapur,Andhra pradesh</p>
                                                </div>
                                            </div>
                                            <div className='profile-content-list'>
                                                <ul>
                                                    <li onClick={() => { setFriends(false); setAbout(false); setPosts(true) }}><ArticleIcon />Posts</li>
                                                    <li onClick={() => { setFriends(false); setAbout(true); setPosts(false) }}><InfoIcon />About</li>
                                                    <li onClick={() => { setFriends(true); setAbout(false); setPosts(false) }}><Diversity3Icon />Friends</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='others-bottom-div'>
                                    {about ?
                                        <div className='about'>
                                            <h2>About Me</h2>
                                            <p>Paragraphs are the main component of our academic writings. Sometimes it is easy to write relevant points to explain relevant topics. But it is wrong to place them in improper paragraphs. One paragraph is too long, including a host of different issues, while the other is deprived of sound information.</p>
                                        </div> : <></>
                                    }
                                    {
                                        friends ?
                                            <div className='friends'>
                                                <h2>Friends</h2>
                                                <div className='d-flex flex-wrap'>
                                                    <div className='friends-sub-div d-flex'>
                                                        <div className='friend-img d-flex'>
                                                            <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                        </div>
                                                        <div className='friend-name'>   <p>Venkat</p></div>
                                                    </div>
                                                    <div className='friends-sub-div d-flex'>
                                                        <div className='friend-img d-flex'>
                                                            <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                        </div>
                                                        <div className='friend-name'>   <p>Venkat</p></div>
                                                    </div>
                                                    <div className='friends-sub-div d-flex'>
                                                        <div className='friend-img d-flex'>
                                                            <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                        </div>
                                                        <div className='friend-name'>   <p>Venkat</p></div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                    }
                                    {
                                        posts ?
                                            <div className='about'>
                                                <h2>Posts</h2>
                                                <div className='posts-img'>
                                                    <img src=''></img>
                                                </div>

                                            </div> : <></>
                                    }
                                </div>
                            </div> : <></>
                    }
                    {
                        friendlist ?
                            <div className='main-right-section'>
                                <div className='main-right-friends-list d-flex flex-column'>
                                    <h1 className='friends-header'>Friends</h1>
                                    <div className='add-friend d-flex'>
                                        <div className='input-field'>
                                            <Form.Group className="dropdown-name">

                                                <Form.Select>
                                                    <option>---Select friend---</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='add-button'>
                                            <Button variant="primary">Add Friend<AddIcon /></Button>
                                        </div>
                                    </div>
                                    <div className='get-friends-list'>
                                        <div className='d-flex flex-wrap'>
                                            <div className='friends-sub-divs d-flex'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>Venkat</p>
                                                    <Button className='unfriend-btn'>Unfriend</Button>
                                                    <Button className='unfriend-btn'>Block</Button>
                                                </div>
                                            </div>
                                            <div className='friends-sub-divs d-flex'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>Venkat</p>
                                                    <Button className='unfriend-btn'>Unfriend</Button>
                                                    <Button className='unfriend-btn'>Block</Button>
                                                </div>
                                            </div>
                                            <div className='friends-sub-divs d-flex'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>Venkat</p>
                                                    <Button className='unfriend-btn'>Unfriend</Button>
                                                    <Button className='unfriend-btn'>Block</Button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div> : <></>
                    }
                    {
                        savedPost ?
                            <div className='main-right-section'>
                                <div className='saved-posts'>
                                    <h1 className='friends-header'>Saved Posts</h1>
                                    <div className='saved-posts-img d-flex flex-column'>
                                        <div className='posted-name'>
                                            <p>Posted by Meghana</p>
                                        </div>
                                        <div className='posted-image'>
                                            <img src='https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1'></img>
                                        </div>
                                    </div>
                                    <div className='saved-posts-img d-flex flex-column'>
                                        <div className='posted-name'>
                                            <p>Posted by Vasudha</p>
                                        </div>
                                        <div className='posted-image'>
                                            <img src='https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1'></img>
                                        </div>
                                    </div>
                                    <div className='saved-posts-img d-flex flex-column'>
                                        <div className='posted-name'>
                                            <p>Posted by Karthick</p>
                                        </div>
                                        <div className='posted-image'>
                                            <img src='https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1'></img>
                                        </div>
                                    </div>
                                </div>
                            </div> : <></>
                    }
                    {
                        profile ?
                            <div className='main-right-section'>
                                <div className='main-right-profile d-flex flex-column'>
                                    <div className='profile-pic'>
                                        <img src='https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1'></img>
                                    </div>
                                    <div className='profile-form' >
                                        <div className='container-fluid' style={{ backgroundColor: 'white' }}>
                                            <div className='row'>
                                                <Form className='d-flex flex-wrap justify-content-around'>
                                                    <Form.Group className="profile-field" controlId="formBasicEmail">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter First Name" />
                                                    </Form.Group>

                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Last Name" />
                                                    </Form.Group>
                                                    <Form.Group className="profile-field" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" />
                                                    </Form.Group>

                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                    </Form.Group>
                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>Mobile</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter First Name" />
                                                    </Form.Group>

                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>DOB</Form.Label>
                                                        <Form.Control type="date" placeholder="Enter Last Name" />
                                                    </Form.Group>
                                                    <Form.Group className="profile-field">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Select>
                                                            <option>Disabled select</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="profile-field">
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Select>
                                                            <option>Disabled select</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="profile-fields">
                                                        <Form.Label>About me</Form.Label>
                                                        <FloatingLabel controlId="floatingTextarea2" label="Comments" className='profile-about'>

                                                            <Form.Control as="textarea" placeholder="About me" />
                                                        </FloatingLabel>
                                                    </Form.Group>
                                                </Form>
                                                <button id='save-btn' className='primary'>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> : <></>
                    }
                      {
                        notifications ?
                            <div className='main-right-section'>
                                <div className='main-right-friends-list d-flex flex-column'>
                                    <h1 className='friends-header'>Notifications</h1>
                                  
                                    <div className='get-friends-list'>
                                        <div className='d-flex flex-wrap'>
                                            <div className='friends-sub-divs d-flex'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>Venkat</p>
                                                    <Button className='unfriend-btn'>Accept Friend</Button>
                                                    <Button className='unfriend-btn'>Block</Button>
                                                </div>
                                            </div>
                                            <div className='friends-sub-divs d-flex'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>Venkat</p>
                                                    <Button className='unfriend-btn'>Accept Friend</Button>
                                                    <Button className='unfriend-btn'>Block</Button>
                                                </div>
                                            </div>
                                            <div className='friends-sub-divs d-flex'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>Venkat</p>
                                                    <Button className='unfriend-btn'>Accept Friend</Button>
                                                    <Button className='unfriend-btn'>Block</Button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div> : <></>
                    }
                </div>
            </div>
        </section>
    </>

}

export default Main