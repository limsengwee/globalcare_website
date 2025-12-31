
import React from 'react';

interface Attachment {
  id: string;
  type: string;
  name: string;
  size: string;
  updated: string;
  url: string;
}

interface DownloadCenterProps {
  attachments: Attachment[];
  loading?: boolean;
}

const DownloadCenter: React.FC<DownloadCenterProps> = ({ attachments, loading }) => {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#1a237e] py-24 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Download Center</h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium">Brochures, installers, release notes, and more.</p>
        </div>
      </section>

      {/* Main Table Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase tracking-wider w-20">Type</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase tracking-wider text-right">Size</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase tracking-wider text-center">Updated</th>
                    <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="py-20 text-center text-gray-400">
                        <div className="flex flex-col items-center gap-3">
                          <svg className="animate-spin h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="font-bold text-sm uppercase tracking-widest">Accessing Secure Vault...</span>
                        </div>
                      </td>
                    </tr>
                  ) : attachments.map((file) => (
                    <tr key={file.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-md text-[11px] font-black tracking-widest ${
                          file.type === 'MP4' ? 'bg-indigo-100 text-indigo-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {file.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                        {file.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 text-right font-medium">
                        {file.size}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 text-center">
                        {file.updated}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a 
                          href={file.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors group"
                        >
                          <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!loading && attachments.length === 0 && (
              <div className="py-20 text-center text-gray-400 italic">
                No files available for download at this time.
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-xs font-medium">
              For the latest product brochures and documentation, please contact your Globalcare representative.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadCenter;
