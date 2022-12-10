import React, { useEffect, useState,useContext} from 'react';
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
import { CommonContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import countrydata from './CountryData.json';


function Main() {
    let commonContext = useContext(CommonContext);
    let navigate = useNavigate()

    let [disabled, setDisabled] = useState(false)
    let [about, setAbout] = useState(true)
    let [posts, setPosts] = useState(false)
    let [friends, setFriends] = useState(false)
    let [friend, setFriend] = useState(false)
    let [friendlist, setFriendlist] = useState(false)
    let [savedPost, setSavedPost] = useState(false)
    let [myPost,setMyPost]=useState(false)
    let [profile, setProfile] = useState(false)
    let [notifications,setNotifications]=useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//PROFILE
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [password, setPassword] = useState("");
    let [dob,setDob]=useState("");
    let [country,setCountry]=useState("");
    let [state,setState]=useState("");
    let [aboutMe,setAboutMe]=useState("")

    const [JsonState,setJsonState]=useState([])
//ADD FRIEND
    let [userNames,setUserNames]=useState([])

    let [friendName,setFriendName]=useState("")
    let [friendsList,setFriendsList]=useState([])
    let [acceptedFriends,setAcceptedFriends]=useState([])
    let [friendEmail,setFriendEmail]=useState("")
    // let [userEmail,setUserEmail]=useState("")

//post content
   let [postContent,setPostContent]=useState(`what is on your mind ${firstname} `)
   let [postImage,setPostImage]=useState("https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1")
   let [myPosts,setMyPosts]=useState([])
   let [friendDetail,setFriendDetail]=useState([])
   let [friendPost,setFriendPost]=useState([])
   
   const handleCountry=(e)=>{
        setCountry(e.target.value)
           const getcountryName=e.target.value;
           const getStatedata=countrydata.find(country=>country.country_name===getcountryName).states;
           setJsonState(getStatedata)

    }


    async function handleUpdateDetails(){
        let userEmail=localStorage.getItem('email')
      let res= await axios.get(`${commonContext.apiurl}/get-user-by-id/${userEmail}`)
        if(res.data.statusCode===200){
            setFirstname(res.data.users.firstname);
            setLastname(res.data.users.lastname);
            setEmail(res.data.users.email);
            setMobile(res.data.users.mobile);
            setPassword(res.data.users.password);
            setDob(res.data.users.dob);
            setCountry(res.data.users.country);
            setState(res.data.users.state);
            setAboutMe(res.data.users.aboutMe)
        }
    }

    async function handleProfileEdit(){
        let userEmail=localStorage.getItem('email')
      let res= await axios.put(`${commonContext.apiurl}/edit-user-by-id/${userEmail}`,{
        firstname,
        lastname,
        email,
        mobile,
        password,
        dob,
        country,
        state,
        aboutMe
      })
      if(res.data.statusCode===200){
        handleUpdateDetails()
        console.log('details edited')
      }
    }

    async function getUserNames(){
        let email=localStorage.getItem('email')
        let res= await axios.get(`${commonContext.apiurl}/get-user-names/${email}`)
        if(res.data.statusCode===200){
            setUserNames(res.data.users);
           
        }
    }

    async function handleAddFriend(){
        let email=localStorage.getItem('email')
      console.log('add friend button clicked')
        let res= await axios.post(`${commonContext.apiurl}/add-friend/${email}`,{
            firstname,
            friendName
        })
        console.log(res.data)
        if(res.data.statusCode===200){
            console.log('friend request sent')
        }
    }
    async function getRequestedFriends(){
        let email=localStorage.getItem('email')
        let res= await axios.post(`${commonContext.apiurl}/get-friends/${email}`)
        // console.log(res.data.friends[0].firstname)
        if(res.data.statusCode===200){
            console.log("List of requested friends received")
            setFriendsList(res.data.friends)
            console.log(friendsList)
        }
    }
    async function handleAcceptFriend(){
        console.log('accept friend clicked')
        let email=localStorage.getItem('email')
        let res= await axios.post(`${commonContext.apiurl}/accept-friend/${email}`) 
        if(res.data.statusCode===200){
            getRequestedFriends()
            console.log('friend accepted')
        }
    }
    async function handleAcceptedFriends(){
        
        let email=localStorage.getItem('email')
        let res= await axios.post(`${commonContext.apiurl}/get-accepted-friends/${email}`)   
        if(res.data.statusCode===200){
            setAcceptedFriends(res.data.friends)
            getRequestedFriends()
        }
    }
   async function handleUnfriend(){
    let email=localStorage.getItem('email')
    let res= await axios.post(`${commonContext.apiurl}/unfriend/${email}`) 
    if(res.data.statusCode==200){
        getRequestedFriends();
        handleAcceptedFriends()
    }
   }
   async function handleBlock(){
    let email=localStorage.getItem('email')
    let res= await axios.post(`${commonContext.apiurl}/block/${email}`) 
    if(res.data.statusCode==200){
        getRequestedFriends();
        handleAcceptedFriends()
    }
   }
   async function handleAddPost(){
    let email=localStorage.getItem('email')
    let res= await axios.post(`${commonContext.apiurl}/post/${email}`,{
        postContent,
        postImage
    })  
    if(res.data.statusCode==200){
        console.log('user posted successfully')
        setPostContent("what is on your mind Prajwal")
        setMyPost(true);
        setDisabled(true)
        getMyPosts()
    }
   }
   async function getMyPosts(){
    let email=localStorage.getItem('email')
    let res= await axios.post(`${commonContext.apiurl}/get-my-posts/${email}`)
    if(res.data.statusCode==200){
        setMyPosts(res.data.posts)
    }
   }
   async function handlegetfriendDetail(e){
   await setFriendEmail(e.userEmail)
   console.log(`${commonContext.apiurl}/get-friend-detail/${friendEmail}`)
   let res= await axios.post(`${commonContext.apiurl}/get-friend-detail/${friendEmail}`)
   if(res.data.statusCode==200){
   setFriendDetail(res.data.friend)
   setFriendPost(res.data.posts)
   setFriendlist(false)
   setFriend(true)
   }
   }
    useEffect(()=>{
        handleUpdateDetails() 
        getUserNames() 
        getRequestedFriends()
        handleAcceptedFriends()
        getMyPosts()
    },[])

    return <>
        <section className='main-page'>
            <div className='container-fluid'>
                <div className='row d-flex flex-column'>
                    <div className='main-left-section'>
                        <div className='main-left-profile-section d-flex'>
                            <div className='main-profile-img'>
                                <img src="https://th.bing.com/th/id/OIP.qgiHfMo505xO9-XyT-X9RQHaJQ?pid=ImgDet&w=640&h=800&rs=1" onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(false); setProfile(true) }}></img>
                            </div>
                            <div className='main-profile-name'>Welcome, {firstname}</div>
                            <div className='main-profile-logo'>
                                <img src='https://867688.smushcdn.com/2059713/wp-content/uploads/2020/09/Colen-Insurance-Agency-Icon-350x350.png?lossy=1&strip=1&webp=1'></img>
                            </div>
                        </div>
                        <div className='main-left-sub-section'>
                            <h2>Navigation</h2>
                            <ul>
                                <li className='link-content' onClick={() => { setFriend(false); setDisabled(false); setFriendlist(false); setSavedPost(false);setMyPost(false); setProfile(false);setNotifications(false) }}><HomeIcon className='icon-style' />Home</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(true); setFriend(false); setSavedPost(false);setMyPost(false); setProfile(false);setNotifications(false) }}><Diversity3Icon className='icon-style' />Friends</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(false);setMyPost(true); setProfile(false);setNotifications(false) }}><BookmarkIcon className='icon-style' />My Posts</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(true);setMyPost(false);setProfile(false);setNotifications(false) }}><BookmarkIcon className='icon-style' />Saved Posts</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(false);setMyPost(false); setProfile(false);setNotifications(true) }}><NotificationsIcon className='icon-style' />Notifications</li>
                                <li onClick={() => { setDisabled(true); setFriendlist(false); setFriend(false); setSavedPost(false);setMyPost(false); setProfile(false);setNotifications(false);navigate('/signin') }}><LogoutIcon className='icon-style' />Logout</li>
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
                                                <input type='text' placeholder={postContent} className='input-profile-width' onChange={(e)=>{setPostContent(e.target.value)}}></input>
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
                                                <Button variant="primary" id='share-btn' onClick={()=>{handleAddPost()}}>Share</Button>
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
                                                <h2><span  style={{ color: 'blue' }}>Mounika</span> shared a album<span className='save-post-icon'><BookmarkIcon /></span></h2>
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
                                    {
                                    friendDetail.map((e)=>(
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
                                                    <h2>{e.firstname}</h2>
                                                    <p>{e.state},{e.country}</p>
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
                                    ))}
                                </div>
                                <div className='others-bottom-div'>
                                    {about ?
                                        <div className='about'>
                                            <h2>About Me</h2>
                                            {friendDetail.map((e)=>(
                                            <p>{e.aboutMe}</p>
                                            ))}
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
                                                {friendPost.map((e)=>(
                                                <div className='posts-img'>
                                                    <img src={e.postImage}></img>
                                                </div>
                                                ))}
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
                                                <Form.Select onChange={(e)=>{setFriendName(e.target.value)}}>
                                                        <option>--Select Friend--</option>
                                                    {
                                                      userNames.map((e,index)=>(
                                                      <option  value={e.email} key={index}>{e.firstname}</option>
                                                      ))
                                                    }
                                                        </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='add-button'>
                                            <Button variant="primary" onClick={()=>{handleAddFriend()}}>Add Friend<AddIcon /></Button>
                                        </div>
                                    </div>
                                    <div className='get-friends-list'>
                                        <div className='d-flex flex-wrap'>
                                       {acceptedFriends.map((e,i)=>(
                                            <div className='friends-sub-divs d-flex key={i}'>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                              
                                                    
                                                    <div className='friend-name d-flex'>
                                                    <p onClick={()=>{handlegetfriendDetail(e)}}>{e.firstname}</p>
                                                    <Button className='unfriend-btn' onClick={()=>{handleUnfriend()}}>Unfriend</Button>
                                                    <Button className='unfriend-btn' onClick={()=>{handleBlock()}}>Block</Button>
                                                </div>
                                                  
                                            </div>
                                                    
                                                    ))}
                                    
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
                        myPost ?
                            <div className='main-right-section'>
                                <div className='saved-posts'>
                                    <h1 className='friends-header'>My Posts</h1>
                                    {
                                        myPosts.map((e,i)=>(
                                    <div className='saved-posts-img d-flex flex-column' key={i}>
                                        <div className='posted-name'>
                                            <p>{e.postContent}</p>
                                        </div>
                                        <div className='posted-image'>
                                            <img src={e.postImage}></img>
                                        </div>
                                    </div>
                                    ))
                                  }
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
                                                        <Form.Control type="text" value={firstname} placeholder="Enter First Name"  onChange={(e)=>{setFirstname(e.target.value)}}/>
                                                    </Form.Group>

                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control type="text" value={lastname} placeholder="Enter Last Name"  onChange={(e)=>{setLastname(e.target.value)}}/>
                                                    </Form.Group>
                                                    <Form.Group className="profile-field" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" value={email} placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}}/>
                                                    </Form.Group>

                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password"  placeholder="Enter Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                                                    </Form.Group>
                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>Mobile</Form.Label>
                                                        <Form.Control type="text"value={mobile} placeholder="Enter Mobile"  onChange={(e)=>{setMobile(e.target.value)}}/>
                                                    </Form.Group>

                                                    <Form.Group className="profile-field" controlId="formBasicPassword">
                                                        <Form.Label>DOB</Form.Label>
                                                        <Form.Control type="date" value={dob} placeholder="Enter DOB"  onChange={(e)=>{setDob(e.target.value)}}/>
                                                    </Form.Group>
                                                    <Form.Group className="profile-field">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Select value={country} onChange={(e)=>handleCountry(e)}>
                                                        <option>--Select Country--</option>
                                                    {
                                                      countrydata.map((getcountry,index)=>(
                                                      <option value={getcountry.country_name} key={index}>{getcountry.country_name}</option>
                                                      ))
                                                    }
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="profile-field">
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Select  value={state} onChange={(e)=>{setState(e.target.value)}}>
                                                        <option>--Select State--</option>
                                                    {
                                                      JsonState.map((getJsonState,index)=>(
                                                      <option value={getJsonState.state_name} key={index}>{getJsonState.state_name}</option>
                                                      ))
                                                    }
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="profile-fields">
                                                        <Form.Label>About me</Form.Label>
                                                        <FloatingLabel controlId="floatingTextarea2"  className='profile-about'>
                                                             <Form.Control as="textarea" value={aboutMe} placeholder="About me"  onChange={(e)=>{setAboutMe(e.target.value)}}/>
                                                        </FloatingLabel>
                                                    </Form.Group>
                                                </Form>
                                                <button id='save-btn' className='primary' onClick={()=>{handleProfileEdit()}}>Save</button>
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
                                        {
                                                    friendsList.map((e,i)=>(
                                            <div className='friends-sub-divs d-flex' key={i}>
                                                <div className='friend-img d-flex'>
                                                    <img src="https://th.bing.com/th/id/OIP.qC9YOe3-Zj7W3pliVlNzvAHaE8?pid=ImgDet&rs=1"></img>

                                                </div>
                                                <div className='friend-name d-flex'>
                                                    <p>{e.firstname}</p>
                                                    <Button className='unfriend-btn' onClick={()=>{handleAcceptFriend()}}>Accept Friend</Button>
                                                    <Button className='unfriend-btn' onClick={()=>{handleBlock()}}>Block</Button>
                                                </div>
                                            </div>
                                                    ))
                                                }
                                          
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