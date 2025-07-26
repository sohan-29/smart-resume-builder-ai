import html2pdf from 'html2pdf.js';

const DownloadResume = ({ exportMode }) => {
  const handleDownload = () => {
    const element = document.getElementById('resumeCanvas');
    console.log(element.innerText)
    if (!element) {
      console.error('Error: resumeCanvas element not found. Cannot download PDF.');
      return;
    }

    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        pdf.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <button
      onClick={handleDownload}
      className={`mt-4 px-6 py-2 rounded ${!exportMode
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
        }`}
    >
      Download as PDF
    </button>
  );
};

export default DownloadResume;
