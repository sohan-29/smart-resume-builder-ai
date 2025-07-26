import html2pdf from 'html2pdf.js';

const DownloadResume = () => {
  const handleDownload = () => {
    console.log('Downloading resume as PDF...');
    const element = document.getElementById('resumeCanvas');
    console.log('Downloading resume as PDF...');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).toPdf().save();

  };

  return (
    <button
      onClick={()=>handleDownload()}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
    >
      Download as PDF
    </button>
  );
}

export default DownloadResume;