import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const BlogEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('/newblog', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Replace with your actual auth mechanism
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit blog');
      }

      const result = await response.json();
      console.log('Blog submitted successfully:', result);

      // Reset form
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          <ReactQuill value={content} onChange={handleContentChange} className="bg-white rounded-md shadow-sm" />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
