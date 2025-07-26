import html2pdf from 'html2pdf.js';

const DownloadResume = ({ data }) => {
  const handleDownload = () => {
    console.log('Downloading resume as PDF...');
    const element = document.getElementById('resumeCanvas');
    if (!element) {
      console.error('Error: resumeCanvas element not found. Cannot download PDF.');
      return;
    }
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={()=>handleDownload()}
      disabled={Object.keys(data).length === 0}
      className={`mt-4 px-6 py-2 rounded cursor-pointer ${
        Object.keys(data).length === 0
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      Download as PDF
    </button>
  );
}

export default DownloadResume;
