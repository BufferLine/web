"use client";

import { AlertTriangle, X } from "lucide-react";

interface FloatingWarningProps {
  show: boolean;
  title: string;
  message: string;
  action?: string;
  onClose: () => void;
}

export default function FloatingWarning({ show, title, message, action, onClose }: FloatingWarningProps) {
  return (
    <div
      onClick={onClose}
      className={`absolute inset-0 flex items-start justify-center pt-8 z-20 cursor-pointer transition-all duration-500 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-neutral-950/70 transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"}`} />

      {/* Warning Card with siren effect */}
      <div
        onClick={(e) => e.stopPropagation()}
        role="alert"
        className={`relative p-3 sm:p-5 rounded-xl bg-accent-thinkprint/[0.12] border-2 border-accent-thinkprint/50 shadow-2xl shadow-accent-thinkprint/30 max-w-lg mx-4 transition-all duration-500 ${show ? "translate-y-0 opacity-100 animate-warning-flash" : "-translate-y-4 opacity-0"}`}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-thinkprint flex items-center justify-center flex-shrink-0 animate-siren">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <span className="font-bold text-base sm:text-lg text-accent-thinkprint-light">{title}</span>
              <button
                onClick={onClose}
                aria-label="Close warning"
                className="text-accent-thinkprint hover:text-accent-thinkprint-light transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-base text-accent-thinkprint-light/90 mt-2">{message}</p>
            {action && (
              <p className="text-sm text-accent-thinkprint font-medium mt-3 p-2 bg-accent-thinkprint/[0.15] rounded-lg">{action}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
