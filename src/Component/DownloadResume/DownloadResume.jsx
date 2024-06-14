
const DownloadResume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/https://drive.google.com/file/d/1m95YSPhyWAfSLRDor7515B0sDiAnhiIQ/view?usp=sharing/resume.pdf'; // Update this path accordingly
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
      return (
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 rounded-xl w-full font-semibold text-2xl  mt-16" onClick={handleDownload}>Download Resume</button>
      );
}

export default DownloadResume;