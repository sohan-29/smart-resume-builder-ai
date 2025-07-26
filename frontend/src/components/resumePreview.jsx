function ResumePreview({ data }) {
  const fields = Object.keys(data);
  return (
    (fields.length === 0) ? (
      <div className="w-full md:w-1/2 p-4 bg-white border rounded shadow">
        <h1 className="text-2xl font-bold">Resume Preview</h1>
        <p className="text-gray-600">Enter your details to see the preview.</p>
      </div>
    ) : (
      <div id="resumeCanvas" className="w-full md:w-full p-6 px-7 bg-white">
        <h1 className="text-3xl font-bold">{data.name.toUpperCase()}</h1>
        <p className="text-gray-700 italic text-lg">{data.title}</p>
        <p className="text-gray-800">{data.email && <>Email: <a href={`mailto:${data.email}`} className="font-mono text-gray-600">{data.email}</a></>}{data.phoneNumber && <> | Phone: <a href={`tel:${data.phoneNumber}`} className="font-mono text-gray-600">{data.phoneNumber}</a></>}</p>
        <p className="text-gray-800">{data.linkedIn && <>| LinkedIn: <a href={data.linkedIn} className="font-mono text-gray-600">{data.linkedIn.split('/').pop()}</a></>}{data.github && <>| GitHub: <a href={data.github} className="font-mono text-gray-600">{data.github.split('/').pop()}</a></>}{data.website && <>| Website: <a href={data.website} className="font-mono text-gray-600">{data.website}</a></>}</p>
        <hr className="my-4 border-gray-300" />
        <div>
          {data.summary && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Summary:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.summary}</p>
            </section>
          )}
          {data.education && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Education:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.education}</p>
            </section>
          )}
          {data.skills && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Skills:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.skills}</p>
            </section>
          )}
          {data.experience && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Experience:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.experience}</p>
            </section>
          )}
          {data.projects && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Projects:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.projects}</p>
            </section>
          )}
          {data.certifications && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Certifications:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.certifications}</p>
            </section>
          )}
          {data.volunteerExperience && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Volunteer Experience:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.volunteerExperience}</p>
            </section>
          )}
          {data.awards && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Awards:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.awards}</p>
            </section>
          )}
          {data.languages && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Languages:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.languages}</p>
            </section>
          )}
          {data.publications && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Publications:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.publications}</p>
            </section>
          )}
          {data.interests && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">Interests:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.interests}</p>
            </section>
          )}
          {data.references && (
            <section className="w-full my-4">
              <h2 className="font-semibold text-lg mt-3">References:</h2>
              <p className="font-light pl-4 pt-2 pr-1 break-words whitespace-pre-wrap overflow-wrap break-word w-full">{data.references}</p>
            </section>
          )}
        </div>
      </div>
    )
  );
}

export default ResumePreview;
