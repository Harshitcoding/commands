'use client';

import { useState } from 'react';
import axios from 'axios';
import QuillEditor from '@/components/QuillEditor'; // Adjust the path if necessary
import { redirect } from 'next/navigation';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/create', { title, content });

      if (response.status === 201) {
        setSuccess('Post created successfully!');
        setTitle('');
        setContent('');
      }

      redirect('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create post');
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className='w-full max-w-6xl rounded-lg shadow-lg p-8 '>
        <h2 className='text-3xl font-bold mb-4'>Create a New Post</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Title Input */}
          <div>
            <label htmlFor="title" className='block text-lg font-semibold text-gray-700'>
              Title:
            </label>
            <input
              type="text"
              placeholder='Enter title'
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className='w-full p-4 border color border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Content Editor */}
          <div>
            <label htmlFor="content" className='block text-lg font-semibold text-gray-700'>
              Content:
            </label>
            <QuillEditor
              value={content}
              onChange={setContent}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Publish
          </button>

          {/* Error and Success Messages */}
          {error && <p className='text-red-500 mt-2'>{error}</p>}
          {success && <p className='text-green-500 mt-2'>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Create;