import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
const Blog = () => {

    const {id} = useParams()
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
  const [blog, setBlog] = useState<Blog>({} as Blog);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${BACKEND_URL}blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          }
        });
        setBlog(res.data)
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

  // const relatedPosts = [
  //   {
  //     imageUrl: '/placeholder.svg',
  //     category: 'AI & Machine Learning',
  //     title: 'Unlocking the Potential of Generative AI in Content Creation',
  //     description: 'Discover how generative AI is transforming the way we create and consume content.',
  //   },
  //   {
  //     imageUrl: '/placeholder.svg',
  //     category: 'Productivity',
  //     title: 'Boosting Productivity with Generative AI: Tips and Tricks',
  //     description: 'Learn how to leverage generative AI to streamline your content creation workflow.',
  //   },
  //   {
  //     imageUrl: '/placeholder.svg',
  //     category: 'Trends',
  //     title: 'The Future of Content Creation: Embracing Generative AI',
  //     description: 'Explore the exciting possibilities of generative AI and how it will shape the future of content creation.',
  //   },
  //   {
  //     imageUrl: '/placeholder.svg',
  //     category: 'AI & Machine Learning',
  //     title: 'Unlocking the Potential of Generative AI in Content Creation',
  //     description: 'Discover how generative AI is transforming the way we create and consume content.',
  //   },
  //   {
  //     imageUrl: '/placeholder.svg',
  //     category: 'Productivity',
  //     title: 'Boosting Productivity with Generative AI: Tips and Tricks',
  //     description: 'Learn how to leverage generative AI to streamline your content creation workflow.',
  //   },
  //   {
  //     imageUrl: '/placeholder.svg',
  //     category: 'Trends',
  //     title: 'The Future of Content Creation: Embracing Generative AI',
  //     description: 'Explore the exciting possibilities of generative AI and how it will shape the future of content creation.',
  //   },
  // ];
  return (
    <div className="w-full">            
  <section className=" bg-gray-100 py-12 md:py-24 lg:py-14 dark:bg-gray-800">
    <div className="container w-full px-4 md:px-6">
      <div className="flex flex-col items-center justify-between lg:flex-row lg:mx-20">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">
            Featured Post
          </div>
          <p className="break-words text-3xl font-bold tracking-tighter sm:text-4xl ">
            {Loading ? "Loading..." : blog.title}
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                alt="Author Avatar"
                className="h-8 w-8 rounded-full"
                style={{ aspectRatio: '32 / 32', objectFit: 'cover' }}
              />
              <p className="text-sm font-medium">John Doe</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 1, 2023</p>
          </div>
        </div>
        {blog.thumbnailUrl ? (
          <img
            src={blog.signedUrl}
            alt="Blog Post Thumbnail"
            className="w-[250px] rounded-lg object-cover"
          />
        ) : null}
      </div>
    </div>
  </section>

  <section className="lg:mx-20 py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <article className="prose prose-gray mx-auto dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: Loading ? "Loading..." : blog.content }} />
      </article>
    </div>
  </section>

  {/* <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Related Posts</h2>
        <div className="flex gap-4 overflow-x-auto">
          {relatedPosts.map((post, index) => (
            <div
              key={index}
              className="w-screen rounded-lg border bg-card text-card-foreground shadow-sm sm:w-auto"
              data-v0-t="card"
            >
              <div className="p-6 space-y-2">
                <img
                  src={post.imageUrl}
                  width="400"
                  height="225"
                  alt="Blog Post Thumbnail"
                  className="aspect-video overflow-hidden rounded-lg object-cover"
                />
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">
                  {post.category}
                </div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.description}</p>
              </div>
              <div className="flex items-center p-6">
                <a className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50" href="#" rel="ugc">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section> */}
</div>

  );
}

export default Blog
