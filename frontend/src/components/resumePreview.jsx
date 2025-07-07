function ResumePreview({ data }) {
  return (
    <div className="w-full md:w-1/2 p-4 bg-white border rounded shadow">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-600 italic">{data.title}</p>
      <p>Email: {data.email} | Phone: {data.phone}</p>
      <hr className="my-2" />

      <section>
        <h2 className="font-semibold">Summary</h2>
        <p>{data.summary}</p>
      </section>

      <section>
        <h2 className="font-semibold mt-3">Education</h2>
        <p>{data.education}</p>
      </section>

      <section>
        <h2 className="font-semibold mt-3">Experience</h2>
        <p>{data.experience}</p>
      </section>

      <section>
        <h2 className="font-semibold mt-3">Projects</h2>
        <p>{data.projects}</p>
      </section>

      <section>
        <h2 className="font-semibold mt-3">Skills</h2>
        <p>{data.skills}</p>
      </section>
    </div>
  );
}

export default ResumePreview;
