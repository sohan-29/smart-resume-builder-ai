function ResumePreview({ data }) {
  const fields = Object.keys(data);
  return (
    (fields.length === 0) ? (
      <div className="w-full md:w-1/2 p-4 bg-white border rounded shadow">
        <h1 className="text-2xl font-bold">Resume Preview</h1>
        <p className="text-gray-600">Enter your details to see the preview.</p>
      </div>
    ) : (
      <div className="w-full md:w-1/2 p-4 bg-white border rounded shadow">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-gray-600 italic">{data.title}</p>
        <p>{data.email && `| Email: ${data.email}`}{data.phone && `| Phone: ${data.phone}`}</p>
        <p>{data.linkedIn && <a href={data.linkedIn}>| LinkedIn: {data.linkedIn}</a>}{data.github && <a href={data.github}>| GitHub: ${data.github}</a>}{data.website && <a href={data.website}>| Website: ${data.website}</a>}</p>
        <hr className="my-2" />
        <div>
          {fields.map((element) => {
            if (['name', 'title', 'email', 'phone', 'linkedIn', 'github', 'website'].includes(element)) return null;
            return (
              <section className="w-full my-4" key={element}>
                <h2 className="font-semibold mt-3">{element.charAt(0).toUpperCase() + element.slice(1)}:</h2>
                <p className="pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full max-w-full">{data[element]}</p>
              </section>
            )
          })}
        </div>
      </div>
    )
  );
}

export default ResumePreview;
