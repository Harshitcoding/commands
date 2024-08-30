export default async function CommandId({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const res = await fetch(`http://localhost:3000/api/create/${id}`);

    // Check if the response is OK
    if (!res.ok) {
      throw new Error('Post not found');
    }

    const post = await res.json();

    return (
      <div className="p-10 shadow-2xl w-full max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 flex justify-center">
        {post.title}
      </h1>
      <div className="flex justify-center">
        <div
          className="prose border-8 border-gray-400 rounded-lg p-12 w-full"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
    );
  } catch (error) {
    console.error(error);
    
  }
}