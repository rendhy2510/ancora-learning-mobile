import React from "react";

export default function BodDashboard() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-gray-50 dark:bg-dark-navy rounded-xl border-2 border-dashed border-gray-200 dark:border-dark-border">
      <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        BOD Dashboard
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
        This is a placeholder for the Board of Directors (BOD) Dashboard. Here
        you will see high-level reporting, completion metrics, and ROI analysis.
      </p>
    </div>
  );
}
