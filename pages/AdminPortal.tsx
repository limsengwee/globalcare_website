
import React, { useState, useRef } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { collection, addDoc, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { storage, db, isFirebaseConfigured } from '../firebase';

interface Attachment {
  id: string;
  type: string;
  name: string;
  size: string;
  updated: string;
  url: string;
  storagePath: string;
}

interface AdminPortalProps {
  attachments: Attachment[];
}

const AdminPortal: React.FC<AdminPortalProps> = ({ attachments }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFirebaseConfigured) return;

    const file = fileInputRef.current?.files?.[0];
    if (!file) return alert("Please select a file first");

    setUploading(true);
    const storagePath = `attachments/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(p);
      }, 
      (error) => {
        console.error("Upload failed", error);
        alert("Upload failed. Ensure Firebase Storage Rules are set to public.");
        setUploading(false);
      }, 
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const extension = file.name.split('.').pop()?.toUpperCase() || 'FILE';
        
        await addDoc(collection(db, "attachments"), {
          name: displayName || file.name,
          type: extension,
          size: formatSize(file.size),
          updated: new Date().toISOString().split('T')[0],
          url: downloadURL,
          storagePath: storagePath
        });

        setUploading(false);
        setProgress(0);
        setDisplayName('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    );
  };

  const handleDelete = async (attachment: Attachment) => {
    if (!isFirebaseConfigured) return;
    if (!window.confirm(`Delete ${attachment.name}? This will remove it from both storage and database.`)) return;

    try {
      const storageRef = ref(storage, attachment.storagePath);
      await deleteObject(storageRef);
      await deleteDoc(doc(db, "attachments", attachment.id));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Error: Record might be out of sync. Removing DB entry only.");
      await deleteDoc(doc(db, "attachments", attachment.id));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Setup Guide - Best Approach */}
        {!isFirebaseConfigured && (
          <div className="mb-12 bg-white border border-blue-200 rounded-[32px] overflow-hidden shadow-sm">
            <div className="bg-blue-600 px-8 py-4 text-white font-bold text-sm uppercase tracking-widest">
              Detailed Firebase Setup Guide
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-black text-2xl text-gray-900 tracking-tight">Best Approach for File Management</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To ensure maximum performance and security, we use a <strong>Dual-Layer Strategy</strong>:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 font-black">1.</span>
                    <span className="text-gray-700"><strong>Firebase Storage:</strong> Handles raw binary data (PDF/MP4). Optimized for high-speed global delivery.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 font-black">2.</span>
                    <span className="text-gray-700"><strong>Cloud Firestore:</strong> Stores metadata (filename, size, type). Allows for instant search and real-time UI updates without expensive file scans.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Action Items:</h4>
                <ol className="space-y-2 text-xs text-gray-500 font-medium">
                  <li>1. In Firebase Console, set <strong>Storage Rules</strong> to:<br/><code className="text-blue-600 font-bold block mt-1">allow read, write: if true;</code></li>
                  <li>2. Initialize <strong>Firestore Database</strong> in Test Mode.</li>
                  <li>3. Update <code>firebase.ts</code> with your project's unique API keys.</li>
                </ol>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl text-amber-700 text-xs leading-snug">
                  <strong>Note:</strong> Files are currently disabled until valid credentials are provided to prevent Console errors.
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Admin Portal</h1>
            <p className="text-gray-500 font-medium">Enterprise Resource Management</p>
          </div>
          <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${
            isFirebaseConfigured ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-red-50 text-red-600 border-red-100'
          }`}>
            {isFirebaseConfigured ? 'Connected' : 'Demo Mode'}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-sm sticky top-32">
              <h2 className="text-xl font-bold mb-8 text-gray-900">Upload New Resource</h2>
              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 text-left">Display Name</label>
                  <input 
                    type="text" 
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    placeholder="e.g. 2025 Product Brochure"
                    disabled={!isFirebaseConfigured}
                    className="w-full border border-gray-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 text-left">Source File</label>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    required
                    disabled={!isFirebaseConfigured}
                    className="w-full text-xs text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer disabled:opacity-30 transition-all"
                  />
                </div>

                {uploading && (
                  <div className="py-2">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-[10px] font-black text-blue-600 mt-2 uppercase tracking-widest text-right">
                      {Math.round(progress)}% Transferring
                    </p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={uploading || !isFirebaseConfigured}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[12px] text-white transition-all shadow-xl ${
                    uploading || !isFirebaseConfigured ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 active:scale-[0.98]'
                  }`}
                >
                  {!isFirebaseConfigured ? 'Config Required' : (uploading ? 'Processing...' : 'Deploy to Cloud')}
                </button>
              </form>
            </div>
          </div>

          {/* Attachments List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-10 py-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-black text-gray-900 uppercase tracking-widest text-sm">Active Repository</h3>
                <span className="text-xs font-bold text-gray-400 px-3 py-1 bg-white rounded-full border border-gray-100">{attachments.length} Assets</span>
              </div>
              <div className="divide-y divide-gray-50 max-h-[700px] overflow-y-auto">
                {attachments.map(file => (
                  <div key={file.id} className="p-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors group">
                    <div className="flex items-center gap-6 text-left">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-[11px] shrink-0 shadow-sm border ${
                        file.type === 'MP4' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-red-50 text-red-600 border-red-100'
                      }`}>
                        {file.type}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base leading-snug">{file.name}</h4>
                        <div className="flex gap-4 text-[12px] text-gray-400 font-semibold mt-1">
                          <span className="bg-gray-100 px-2 py-0.5 rounded uppercase tracking-tighter">{file.size}</span>
                          <span className="text-gray-300">|</span>
                          <span>Last Synced: {file.updated}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDelete(file)}
                      disabled={!isFirebaseConfigured}
                      className="p-3 bg-white border border-gray-100 text-gray-400 hover:text-red-600 hover:bg-red-50 hover:border-red-100 rounded-xl transition-all shadow-sm disabled:opacity-0"
                      title="Purge from Cloud"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
                {attachments.length === 0 && (
                  <div className="p-20 text-center">
                    <div className="text-4xl mb-4 opacity-20">☁️</div>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest italic">
                      {isFirebaseConfigured ? 'Repository Empty' : 'Awaiting Connection...'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
