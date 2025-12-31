
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
        alert("Upload failed. Check console for details.");
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
    if (!window.confirm(`Delete ${attachment.name}? This cannot be undone.`)) return;

    try {
      const storageRef = ref(storage, attachment.storagePath);
      await deleteObject(storageRef);
      await deleteDoc(doc(db, "attachments", attachment.id));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Delete failed. File might have already been removed from storage.");
    }
  };

  const handleUpdateName = async (id: string) => {
    if (!isFirebaseConfigured) return;
    const newName = prompt("Enter new name:");
    if (!newName) return;
    await updateDoc(doc(db, "attachments", id), { name: newName });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {!isFirebaseConfigured && (
          <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-4">
            <div className="text-amber-500 text-2xl mt-1">⚠️</div>
            <div>
              <h3 className="font-bold text-amber-900 mb-1">Firebase Configuration Required</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                The Admin Portal is currently in <strong>Demo Mode</strong>. To enable real file uploads and deletions, please update the <code>firebaseConfig</code> object in <code>firebase.ts</code> with your project's unique API keys from the Firebase Console.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-500">Manage site attachments with Firebase</p>
          </div>
          <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-red-100">
            {isFirebaseConfigured ? 'Secure Admin' : 'Demo Mode'}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm sticky top-32">
              <h2 className="text-xl font-bold mb-6">New Upload</h2>
              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 text-left">Display Name (Optional)</label>
                  <input 
                    type="text" 
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    placeholder="e.g. 2025 Product Brochure"
                    disabled={!isFirebaseConfigured}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 text-left">Select File</label>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    required
                    disabled={!isFirebaseConfigured}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {uploading && (
                  <div className="py-2">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 transition-all duration-300" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-[10px] font-bold text-indigo-600 mt-1 uppercase tracking-wider text-right">
                      {Math.round(progress)}% Complete
                    </p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={uploading || !isFirebaseConfigured}
                  className={`w-full py-3 rounded-xl font-bold text-white transition-all shadow-lg ${
                    uploading || !isFirebaseConfigured ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
                  }`}
                >
                  {!isFirebaseConfigured ? 'Config Required' : (uploading ? 'Uploading...' : 'Start Upload')}
                </button>
              </form>
            </div>
          </div>

          {/* Attachments List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Active Files</h3>
                <span className="text-xs font-bold text-gray-400">{attachments.length} items</span>
              </div>
              <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
                {attachments.map(file => (
                  <div key={file.id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors group">
                    <div className="flex items-center gap-4 text-left">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-[10px] shrink-0 ${
                        file.type === 'MP4' ? 'bg-indigo-50 text-indigo-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {file.type}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm leading-snug">{file.name}</h4>
                        <div className="flex gap-3 text-[11px] text-gray-400 font-medium mt-0.5">
                          <span>{file.size}</span>
                          <span>•</span>
                          <span>{file.updated}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleUpdateName(file.id)}
                        disabled={!isFirebaseConfigured}
                        className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-lg transition-colors disabled:opacity-0"
                        title="Rename"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleDelete(file)}
                        disabled={!isFirebaseConfigured}
                        className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors disabled:opacity-0"
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                {attachments.length === 0 && (
                  <div className="p-10 text-center text-gray-400 text-sm italic">
                    {isFirebaseConfigured ? 'No files found in Firestore.' : 'Configure Firebase to see active files.'}
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
