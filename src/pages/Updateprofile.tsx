import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function UpdateProfile() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [bio, setBio] = useState<string>(``);

  const handleProfilePictureChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePicture(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = localStorage.getItem("userId"); // Assuming user ID is stored in local storage

    console.log(userId,);

    try {
      const response = await axios.put(`${BACKEND_URL}user/update/8`, {
        bio,
        profilePicture, // You might need to handle file upload separately
    },{
        headers : {
            'Content-Type': 'multipart/form-data',
          }
    }
       
      );
      console.log(response);

      alert("Profile updated successfully");
    } catch (error) {
      console.error("There was an error updating the profile!", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0 overflow-hidden rounded-full h-16 w-16">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="h-full w-full object-cover rounded-full" />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            title="Upload a profile picture"
          />
        </div>
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold">{localStorage.getItem("username")}</h1>
        </div>
      </div>
      <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <h1 className="text-sm font-medium leading-none">Bio</h1>
          <textarea
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            id="bio"
            value={bio}
            onChange={handleBioChange}
            rows={5}
          />
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
