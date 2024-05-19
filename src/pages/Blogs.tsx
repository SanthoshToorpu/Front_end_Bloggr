import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";
const BlogList = () => {

  interface Blog {
    id: number;
    title: string;
    content: string;
    authorId: number;
    thumbnailUrl: string;
    createdAt: string;
    author: {
      username: string;
    };
    signedUrl: string;
  }
  

  const [Loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${BACKEND_URL}blog/allblogs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          }
        });
        setBlogs(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchdata()
  },[])


  return (
    <div className="px-4 py-8">
      <div className="flex flex-col gap-6 md:gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="space-y-4 md:col-span-2 md:space-y-8 m-8">
            {/* Blog posts */}
            {Loading ? (
        <p>Loading...</p>
          ) : (
            blogs.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <BlogPost
                key={blog.id}
                thumbnail={blog.signedUrl}
                title={blog.title}
                description={blog.content} 
              />
              </Link> 
            ))
          )}
          </div>
          {/* Categories */}
          <div className="border-t hidden md:block border-t-0 border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Popular Categories</h2>
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <li>
                <a className="flex items-center gap-2 text-lg font-medium" href="#">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  </svg>
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-lg font-medium" href="#">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Technology
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-lg font-medium" href="#">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                  </svg>
                  Health &amp; Wellness
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-lg font-medium" href="#">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  Business
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-lg font-medium" href="#">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                  Travel
                </a>
              </li>
              {/* Add more categories here */}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ thumbnail, title, description }: { thumbnail: string | null; title: string; description: string,  }) => {
  return (
    <div className=" border rounded-lg overflow-hidden shadow-sm dark:border-gray-800 flex flex-col md:flex-row my-4">
      <div className="relative ">
        <img
          src={thumbnail? thumbnail : "/placeholder.svg"}
          alt="Blog Thumbnail"
          className="min-w-80 max-w-80 p-4 h-80 object-cover border-r"
        />
      </div>
      <div className="p-4 space-y-2 md:w-1/2">
        <a className="text-xl font-medium leading-tight flex items-center gap-4" href="#">
          <img
            src="https://avatars.githubusercontent.com/u/11386313?v=4"
            alt="Avatar"
            width="32"
            height="32"
            className="rounded-full"
            style={{ aspectRatio: '32 / 32', objectFit: 'cover' }}
          />
          {title}
        </a>
        <div dangerouslySetInnerHTML={{ __html: description.substring(0, 300) }} />
      </div>
    </div>
  );
};

export default BlogList;