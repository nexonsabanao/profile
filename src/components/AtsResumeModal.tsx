import React, { useEffect, useState } from 'react';
import { profileData, workExperience } from '../data/portfolioData';

interface AtsResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AtsResumeModal: React.FC<AtsResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printArea = document.getElementById('ats-resume-document-content');
    if (!printArea) {
      window.print();
      return;
    }

    // Create a dedicated hidden iframe to isolate the resume content for pristine printing & PDF export
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) {
      window.print();
      return;
    }

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${profileData.fullNameFormal} - Resume</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 14mm 16mm;
            }
            * {
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              color: #0f172a;
              background-color: #ffffff;
              line-height: 1.45;
              font-size: 10pt;
              margin: 0;
              padding: 0;
            }
            h1 {
              font-size: 18pt;
              margin: 0 0 2px 0;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: -0.02em;
              text-align: center;
            }
            .degree-title {
              font-size: 11pt;
              font-weight: 600;
              text-transform: uppercase;
              color: #334155;
              text-align: center;
              margin-bottom: 4px;
            }
            .contact-line {
              font-size: 9pt;
              color: #475569;
              text-align: center;
              margin-bottom: 2px;
            }
            .header-divider {
              border-bottom: 1.5px solid #0f172a;
              padding-bottom: 8px;
              margin-bottom: 12px;
            }
            .section-title {
              font-size: 10.5pt;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              border-bottom: 1px solid #cbd5e1;
              padding-bottom: 2px;
              margin-top: 10px;
              margin-bottom: 6px;
              color: #0f172a;
            }
            .item-row {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
              font-weight: 700;
              font-size: 10pt;
              color: #0f172a;
            }
            .item-sub {
              font-size: 9pt;
              color: #64748b;
              font-style: italic;
              margin-bottom: 3px;
            }
            ul {
              margin: 3px 0 6px 0;
              padding-left: 18px;
            }
            li {
              margin-bottom: 2px;
              font-size: 9.5pt;
              color: #334155;
            }
            .skills-list li {
              margin-bottom: 3px;
              font-size: 9.5pt;
            }
            strong {
              color: #0f172a;
            }
          </style>
        </head>
        <body>
          ${printArea.innerHTML}
        </body>
      </html>
    `);
    doc.close();

    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1500);
    }, 250);
  };

  const handleCopyRawAtsText = () => {
    const text = `${profileData.fullNameFormal.toUpperCase()}
${profileData.degree.toUpperCase()}
Phone: ${profileData.phone} | Email: ${profileData.email} | GitHub: ${profileData.githubUrl}
Location: ${profileData.location}

SUMMARY
${profileData.executiveHeadline}

EDUCATION
${profileData.education.institution}
${profileData.education.degree}
${profileData.education.graduationDate}

EXPERIENCE
${workExperience
  .map(
    (job) => `${job.role} – ${job.company}
${job.location}
${job.startDate} - ${job.endDate}
${job.responsibilities.map((r) => `• ${r}`).join('\n')}`
  )
  .join('\n\n')}

SKILLS
• Programming: Python (Intermediate), C++, Java, Kotlin
• Office & Data: Microsoft Word, Excel (Data Management), PowerPoint
• Hardware & IoT: ESP32, Arduino (LilyGO TTGO T-SIM), STM32
• Mobile & Web: Android Studio (XML Layouts), Firebase Firestore, HTML, CSS
• Design Tools: Adobe (Photoshop, Illustrator, Animate), Canva

PROJECTS
• Workout & Nutrition Planner Android App (nutriority.github.io/Installer)
  - Built using Kotlin in Android Studio
  - Integrated Firebase Firestore for user and planner data
  - Designed UI layouts using XML
  - Implemented planner logic and API-based exercise data

• Weather-based Flood Alert System for Barangay (weather-project-a5fb5.web.app)
  - Built using C++ and Arduino (LilyGO TTGO T-SIM)
  - Designed UI layouts using HTML and CSS
  - Implemented weather forecast and alert logic
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ats-resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-2xl p-6 sm:p-10 space-y-6 print:p-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Controls Header */}
        <div className="no-print flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="text-sm font-bold text-slate-800">
            Resume Preview
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyRawAtsText}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            >
              {copied ? 'Copied Plain Text!' : 'Copy Plain Text'}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Close ATS Resume"
            >
              Close
            </button>
          </div>
        </div>

        {/* ATS Resume Document Content */}
        <div id="ats-resume-document-content" className="space-y-5 text-slate-900 font-sans text-xs leading-relaxed max-w-3xl mx-auto">
          {/* Header */}
          <div className="header-divider text-center space-y-1 border-b border-slate-900 pb-3">
            <h1 className="text-2xl font-bold tracking-tight uppercase text-slate-950">
              {profileData.fullNameFormal}
            </h1>
            <div className="degree-title text-sm font-semibold text-slate-700 uppercase">
              {profileData.degree}
            </div>
            <div className="contact-line text-xs text-slate-600 flex flex-wrap justify-center gap-x-2">
              <span>{profileData.phone}</span>
              <span>·</span>
              <span>{profileData.email}</span>
              <span>·</span>
              <span>github.com/{profileData.githubUsername}</span>
            </div>
            <div className="contact-line text-xs text-slate-600">
              {profileData.location}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Summary
            </h2>
            <p className="text-xs text-slate-700 leading-normal">
              {profileData.executiveHeadline}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Education
            </h2>
            <div className="item-row flex justify-between items-baseline font-bold text-slate-900">
              <span>{profileData.education.institution}</span>
              <span className="text-slate-700 font-normal">{profileData.education.degree}</span>
            </div>
            <div className="item-sub text-slate-600 italic text-[11px]">
              {profileData.education.graduationDate}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Experience
            </h2>

            {workExperience.map((job) => (
              <div key={job.id} className="space-y-1">
                <div className="item-row flex justify-between items-baseline font-bold text-slate-900">
                  <span>{job.role} – {job.company}</span>
                  <span className="text-slate-600 font-normal">{job.startDate} - {job.endDate}</span>
                </div>
                <div className="item-sub text-[11px] text-slate-600 italic">
                  {job.location}
                </div>
                <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-xs">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-1">
            <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Skills
            </h2>
            <ul className="skills-list list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-800">
              <li><strong>Programming:</strong> Python (Intermediate), C++, Java, Kotlin</li>
              <li><strong>Office & Data:</strong> Microsoft Word, Excel (Data Management), PowerPoint</li>
              <li><strong>Hardware & IoT:</strong> ESP32, Arduino (LilyGO TTGO T-SIM), STM32</li>
              <li><strong>Mobile & Web:</strong> Android Studio (XML Layouts), Firebase Firestore, HTML, CSS</li>
              <li><strong>Design Tools:</strong> Adobe (Photoshop, Illustrator, Animate), Canva</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="section-title text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Projects
            </h2>

            <div className="space-y-0.5">
              <div className="font-bold text-slate-900">
                Workout & Nutrition Planner Android App (nutriority.github.io/Installer)
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-xs">
                <li>Built using Kotlin in Android Studio</li>
                <li>Integrated Firebase Firestore for user and planner data</li>
                <li>Designed UI layouts using XML</li>
                <li>Implemented planner logic and API-based exercise data</li>
              </ul>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-slate-900">
                Weather-based Flood Alert System for Barangay (weather-project-a5fb5.web.app)
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-xs">
                <li>Built using C++ and Arduino (LilyGO TTGO T-SIM)</li>
                <li>Designed UI layouts using HTML and CSS</li>
                <li>Implemented weather forecast and alert logic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
