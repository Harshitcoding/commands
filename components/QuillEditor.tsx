import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { FC } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false, // Disable server-side rendering for this component
});

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const QuillEditor: FC<QuillEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'], // Remove formatting button
    ],
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-sm">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className=" color focus:outline-none focus:ring-2 focus:ring-blue-500" // Set a height for the editor
      />
    </div>
  );
};

export default QuillEditor;