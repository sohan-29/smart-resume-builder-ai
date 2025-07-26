
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";


const DownloadResume = ({ name, title, exportMode }) => {

  const handleDownload = () => {
    if (!exportMode) return;

    const resume = document.getElementById('resumeCanvas');
    html2canvas(resume, { scale: 3 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');

      // Calculate PDF dimensions
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate image dimensions to fit PDF page
      const imgProps = {
        width: canvas.width,
        height: canvas.height
      };
      const ratio = Math.min(pdfWidth / imgProps.width, pdfHeight / imgProps.height);
      const imgWidth = imgProps.width * ratio;
      const imgHeight = imgProps.height * ratio;

      // Add image to PDF centered
      const x = (pdfWidth - imgWidth) / 2;
      const y = 3; // small top margin
      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save(`${name}_${title}_Resume.pdf`);
    });
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!exportMode}
      className={`mt-4 px-6 py-2 rounded ${
        !exportMode
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
      }`}
    >
      Download as PDF
    </button>
  );
};

export default DownloadResume;
