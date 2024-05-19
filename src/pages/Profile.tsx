import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';



// Avatar component
function Avatar() {
  return (
    <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 md:w-32 md:h-32">
      <img src={`${localStorage.getItem("profilepic")}`} alt="" />
    </span>
  );
}

// SocialLinks component
function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-2 mt-2">
      <a className="text-blue-600 hover:underline" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          {/* Twitter icon path */}
        </svg>
      </a>
      {/* Other social icons */}
    </div>
  );
}

// Post component
function Post({ title, description, thumbnail }: { title: string; description: string , thumbnail: string}) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={thumbnail}
        alt="Blog Post Thumbnail"
        width="400"
        height="225"
        className="w-full h-[225px] object-cover"
        style={{ aspectRatio: '400 / 225', objectFit: 'cover' }}
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

// PublishedPosts component
function PublishedPosts() {
  // Assuming this state is used to switch between posts and about section
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setposts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${BACKEND_URL}blog/user/${localStorage.getItem("userid")}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          }
      })
      setposts(res.data)
    }
    fetchData();
  }, []);

  console.log(posts)
  return (
    <div>
      {/* Tab buttons */}
      <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-4" tabIndex={0} style={{ outline: 'none' }}>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            activeTab === 'posts' ? 'bg-background text-foreground shadow' : ''
          }`}
          onClick={() => setActiveTab('posts')}
        >
          Published Posts
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            activeTab === 'about' ? 'bg-background text-foreground shadow' : ''
          }`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
    posts.map((post: any) => (
      <Post key={post.id} title={post.title} description={post.content} thumbnail={post.thumbnailUrl} />
    ))
  ) : (
    <p>No posts yet</p>
  )}          
        </div>
      )}

      {activeTab === 'about' && (
        <div data-orientation="horizontal" role="tabpanel" hidden tabIndex={0} className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div>
      )}
    </div>
  );
}

// ProfileCard component
function ProfileCard() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="col-span-1 flex flex-col items-center">
          <Avatar />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold">{localStorage.getItem("username")}</h2>
            <p className="text-gray-500 dark:text-gray-400">Software Engineer, Blogger</p>
            <SocialLinks />
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-[240px] text-center">
            Passionate about technology, design, and sharing knowledge through blogging. I have over 10 years of experience in the industry and love to stay up-to-date with the latest trends and best practices.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              {/* Email icon + text */}
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              {/* Phone icon + text */}
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <PublishedPosts />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
