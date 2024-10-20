import './ProfilePage.css';
import { useState, useEffect, useRef } from 'react';

const ProfilePage = () => {
  const [profileDetails, setProfileDetails] = useState({
    pfp: "/pfp.jpg",
    name: "My name",
    bio: "My bio",
    location: "Hospital/Medical Practice"
  });

  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isBioEdit, setIsBioEdit] = useState(false);
  const [isLocationEdit, setIsLocationEdit] = useState(false);

  const [postCardStatus, setPostCardStatus] = useState("my-posts");
  const [myPosts, setMyPosts] = useState(["Effects of Enzymes on Organs", "A Systematic Review of Randomized Controlled Trials", "Cancer"]);
  const [savedDiscussions, setSavedDiscussions] = useState(["Diagnosis Question", "New Paper Impact", "Funny Hospital Stories"]);
  const [savedArticles, setSavedArticles] = useState(["Pediatric Review", "Oncological Review", "Radiological Review"]);
  const [cardContent, setCardContent] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
  const fileInputRef = useRef(null); // Ref to access the file input

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Update state with the image data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  useEffect(() => {
    switch (postCardStatus) {
      case "my-posts":
        console.log("Updating content to my posts");
        setCardContent(myPosts);
        break;
      case "saved-discussions":
        console.log("Updating content to saved discussions");
        setCardContent(savedDiscussions);
        break;
      case "saved-articles":
        console.log("Updating content to saved articles");
        setCardContent(savedArticles);
        break;
      default:
        console.log("Updating content to my posts");
        setCardContent(myPosts);
        break;
    }
  }, [postCardStatus])



  const handlePfpChange = () => {
    alert("Changing pfp")
    // setProfileDetails(() => {...profileDetails, pfp: "newPfp"})
  }
  const handleNameChange = () => {
    alert("Changing name")
    // setProfileDetails(() => {...profileDetails, pfp: "newPfp"})
  }
  const handleBioChange = () => {
    alert("Changing Bio")
    // setProfileDetails(() => {...profileDetails, pfp: "newPfp"})
  }
  const handleLocationChange = () => {
    alert("Changing Location")
    // setProfileDetails(() => {...profileDetails, pfp: "newPfp"})
  }

  return (
    <div className="page-container">
      <div className="profile-container">
        <div className="profile-picture" onClick={handleImageClick}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            ref={fileInputRef} 
            style={{ display: 'none' }} // Hide the input
          />
          <img src={selectedImage != null ? selectedImage : "/pfp.jpg"} alt="Profile" className="pfp" />
        </div>
        <div className="name-container" onClick={() => { setIsNameEdit(true) }}>
          {isNameEdit ? (<input type="text" onKeyDown={(e) => { if (e.key === "Enter") { setIsNameEdit(false) } }} onChange={(e) => { setProfileDetails({ ...profileDetails, name: e.target.value }) }} placeholder={profileDetails.name} />) : (<p>{profileDetails.name}</p>)}
        </div>
        <div className="bio-container" onClick={() => { setIsBioEdit(true) }}>
          {isBioEdit ? (<input type="text" onKeyDown={(e) => { if (e.key === "Enter") { setIsBioEdit(false) } }} onChange={(e) => { setProfileDetails({ ...profileDetails, bio: e.target.value }) }} placeholder={profileDetails.bio} />) : (<p>{profileDetails.bio}</p>)}
        </div>
        <div className="location-container" onClick={() => { setIsLocationEdit(true) }}>
          {isLocationEdit ? (<input type="text" onKeyDown={(e) => { if (e.key === "Enter") { setIsLocationEdit(false) } }} onChange={(e) => { setProfileDetails({ ...profileDetails, location: e.target.value }) }} placeholder={profileDetails.location} />) : (<p>{profileDetails.location}</p>)}
        </div>
      </div>
      <div className="post-card-selection-container">
        <button className="post-card-selection-btn my-posts-btn" style={postCardStatus === "my-posts" ? { borderBottom: "10px", borderColor: "black" } : {}} onClick={() => { console.log("changing to my posts"); setPostCardStatus("my-posts") }}>My Posts</button>
        <button className="post-card-selection-btn saved-discussions-btn" style={postCardStatus === "saved-discussions" ? { borderBottom: "10px", borderColor: "black" } : {}} onClick={() => { console.log("changing to saved discussions"); setPostCardStatus("saved-discussions") }}>Saved Discussions</button>
        <button className="post-card-selection-btn saved-articles-btn" style={postCardStatus === "saved-articles" ? { borderBottom: "10px", borderColor: "black" } : {}} onClick={() => { console.log("changing to saved articles"); setPostCardStatus("saved-articles") }}>Saved Articles</button>
      </div>
      <div className="post-card-container">
        <div className="card-1 post-card"><h1>{cardContent[0]}</h1></div>
        <div className="card-2 post-card"><h1>{cardContent[1]}</h1></div>
        <div className="card-3 post-card"><h1>{cardContent[2]}</h1></div>
      </div>
    </div>
  );
}

export default ProfilePage;