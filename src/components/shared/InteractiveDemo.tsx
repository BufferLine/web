"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { Play, Pause, RotateCcw, User, Bot, AlertTriangle, X } from "lucide-react";

// ============================================================================
// Types
// ============================================================================

export interface JSVState {
  judgment_holder: string;
  decision_status: string;
  responsibility_awareness: string;
  confidence_source: string;
  alternative_seeking: string;
}

export interface DVState {
  delta_judgment_holder?: number;
  delta_responsibility_awareness?: number;
  delta_confidence_externalization?: number;
  delta_alternative_seeking?: number;
}

export interface ConversationTurn {
  role: "user" | "ai";
  text: string;
  jsv?: JSVState;
  dv?: DVState;
}

export interface WarningConfig {
  /** Trigger condition - returns true when warning should show */
  condition: (jsv: JSVState | null, turnIndex: number) => boolean;
  /** Warning title */
  title: string;
  /** Warning message */
  message: string;
  /** Optional action text */
  action?: string;
}

export interface InteractiveDemoProps {
  /** Demo title */
  title: string;
  /** Demo subtitle */
  subtitle?: string;
  /** Conversation turns with JSV/DV data */
  conversation: ConversationTurn[];
  /** Labels for speakers */
  speakerLabels?: {
    user: string;
    ai: string;
  };
  /** Warning configuration */
  warning?: WarningConfig;
  /** Insight text shown below the demo */
  insight?: string;
  /** Theme color (for accent) */
  themeColor?: "bufferline" | "jdvp" | "green";
  /** Auto-play interval in ms (default: 2000) */
  playInterval?: number;
  /** Show DV panel */
  showDV?: boolean;
  /** Maximum number of DV fields to display (default: 4) */
  maxDVFields?: number;
  /** Reverse roles: AI on right (for institutional/operator view) */
  reverseRoles?: boolean;
}

// ============================================================================
// Utility Functions
// ============================================================================

const getSpectrumPosition = (field: string, value: string): number => {
  const spectrums: Record<string, Record<string, number>> = {
    judgment_holder: { Human: 0, Shared: 50, AI: 100, Undefined: 50 },
    decision_status: { Undecided: 0, Deferred: 25, Delegated: 75, Completed: 100 },
    responsibility_awareness: { Explicit: 0, Implicit: 50, Absent: 100 },
    confidence_source: { Self: 0, Mixed: 33, External: 66, AI: 100 },
    alternative_seeking: { Active: 0, Passive: 50, None: 100 },
  };
  return spectrums[field]?.[value] ?? 50;
};

const getJSVColor = (field: string, value: string): string => {
  const position = getSpectrumPosition(field, value);
  if (position <= 25) return "text-semantic-human";
  if (position <= 50) return "text-yellow-400";
  if (position <= 75) return "text-orange-400";
  return "text-accent-meta";
};

const getGradientClass = (themeColor: string): string => {
  const gradients: Record<string, string> = {
    bufferline: "from-accent-bufferline to-accent-bufferline-light",
    jdvp: "from-accent-jdvp to-semantic-shared",
    green: "from-semantic-human to-semantic-human-hover",
  };
  return gradients[themeColor] || gradients.bufferline;
};

const getAccentBg = (themeColor: string): string => {
  const accents: Record<string, string> = {
    bufferline: "bg-accent-bufferline",
    jdvp: "bg-accent-jdvp",
    green: "bg-semantic-human",
  };
  return accents[themeColor] || accents.bufferline;
};

const getAccentClass = (themeColor: string): string => {
  const accents: Record<string, string> = {
    bufferline: "bg-accent-bufferline hover:bg-accent-bufferline-hover",
    jdvp: "bg-accent-jdvp hover:bg-accent-jdvp-hover",
    green: "bg-semantic-human hover:bg-semantic-human-hover",
  };
  return accents[themeColor] || accents.bufferline;
};

const getBorderClass = (themeColor: string): string => {
  const borders: Record<string, string> = {
    bufferline: "border-accent-bufferline/[0.15] bg-accent-bufferline/[0.08]",
    jdvp: "border-accent-jdvp/[0.15] bg-accent-jdvp/[0.08]",
    green: "border-semantic-human/[0.15] bg-semantic-human/[0.08]",
  };
  return borders[themeColor] || borders.bufferline;
};

const getTextClass = (themeColor: string): string => {
  const texts: Record<string, string> = {
    bufferline: "text-accent-bufferline-light",
    jdvp: "text-accent-jdvp-light",
    green: "text-semantic-human",
  };
  return texts[themeColor] || texts.bufferline;
};

// ============================================================================
// Sub-Components
// ============================================================================

interface ConversationPanelProps {
  conversation: ConversationTurn[];
  currentTurn: number;
  speakerLabels: { user: string; ai: string };
  themeColor: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  reverseRoles?: boolean;
}

function ConversationPanel({
  conversation,
  currentTurn,
  themeColor,
  isPlaying,
  onPlay,
  onPause,
  onReset,
  reverseRoles = false,
}: ConversationPanelProps) {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [currentTurn]);

  // Determine which role appears on the right
  const isRightAligned = (role: "user" | "ai") => {
    return reverseRoles ? role === "ai" : role === "user";
  };

  return (
    <div className="rounded-xl bg-surface-card/70 border border-surface-border overflow-hidden flex flex-col h-[420px]">
      {/* Header with play controls (top right) */}
      <div className="bg-surface-card/80 px-4 py-2 border-b border-surface-border flex items-center justify-between flex-shrink-0">
        <span className="text-xs text-neutral-500">
          {currentTurn} / {conversation.length} turns
        </span>
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <button
              onClick={onPause}
              className={`w-9 h-9 flex items-center justify-center rounded-full ${getAccentClass(themeColor)} text-white shadow-lg transition-colors duration-200`}
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onPlay}
              className={`w-9 h-9 flex items-center justify-center rounded-full ${getAccentClass(themeColor)} text-white shadow-lg transition-colors duration-200`}
            >
              <Play className="w-4 h-4 ml-0.5" />
            </button>
          )}
          <button
            onClick={onReset}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-elevated hover:bg-neutral-700 text-surface-muted transition-colors duration-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      {/* Messages */}
      <div
        ref={messagesRef}
        className="p-4 flex-1 overflow-y-auto space-y-3 scroll-smooth"
      >
        {conversation.slice(0, currentTurn).map((turn, idx) => (
          <div
            key={idx}
            className={`flex gap-3 animate-fadeIn ${isRightAligned(turn.role) ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                turn.role === "user" ? getAccentBg(themeColor) : "bg-semantic-shared"
              }`}
            >
              {turn.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                turn.role === "user"
                  ? `${getAccentBg(themeColor)} text-white rounded-br-md`
                  : "bg-semantic-shared text-white rounded-bl-md"
              }`}
            >
              <p className="text-sm leading-relaxed">{turn.text}</p>
            </div>
          </div>
        ))}
        {currentTurn === 0 && (
          <div className="flex items-center justify-center h-full text-neutral-500 text-sm">
            Press Play to start the demo
          </div>
        )}
      </div>
    </div>
  );
}

interface JSVVisualizationProps {
  jsv: JSVState | null;
  themeColor: string;
}

function JSVVisualization({ jsv, themeColor }: JSVVisualizationProps) {
  const t = useTranslations("interactive_demo");
  const gradient = getGradientClass(themeColor);

  const fields = [
    "judgment_holder",
    "decision_status",
    "responsibility_awareness",
    "confidence_source",
    "alternative_seeking",
  ] as const;

  // Translate JSV values
  const translateValue = (field: string, value: string): string => {
    try {
      return t(`values.${field}.${value}`);
    } catch {
      return value;
    }
  };

  return (
    <div className="rounded-xl bg-surface-card/70 border border-surface-border p-4 h-[250px]">
      <h4 className={`text-sm font-semibold ${getTextClass(themeColor)} mb-4`}>
        {t("jsv_title")}
      </h4>
      <div className="space-y-3">
        {jsv ? (
          fields.map((field) => {
            const value = jsv[field];
            const position = getSpectrumPosition(field, value);
            return (
              <div key={field}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-neutral-500">{t(`jsv.${field}`)}</span>
                  <span className={`font-medium ${getJSVColor(field, value)}`}>{translateValue(field, value)}</span>
                </div>
                <div className="h-2 bg-neutral-700/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                    style={{ width: `${position}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-neutral-500 py-6 text-sm">
            {t("placeholder_jsv")}
          </div>
        )}
      </div>
    </div>
  );
}

interface DVVisualizationProps {
  dv: DVState | null;
  themeColor: string;
  maxFields?: number;
}

function DVVisualization({ dv, themeColor, maxFields = 4 }: DVVisualizationProps) {
  const t = useTranslations("interactive_demo");
  const borderClass = getBorderClass(themeColor);
  const textClass = getTextClass(themeColor);

  const allDvFields = [
    "delta_judgment_holder",
    "delta_responsibility_awareness",
    "delta_confidence_externalization",
    "delta_alternative_seeking",
  ] as const;

  // Filter to only fields that have values and limit to maxFields
  const dvFields = dv
    ? allDvFields.filter((field) => dv[field] !== undefined).slice(0, maxFields)
    : allDvFields.slice(0, maxFields);

  return (
    <div
      className={`rounded-xl border ${borderClass} p-4 h-[150px] transition-opacity duration-300 ${
        dv ? "opacity-100" : "opacity-30"
      }`}
    >
      <h4 className={`text-sm font-semibold ${textClass} mb-3`}>{t("dv_title")}</h4>
      {dv ? (
        <div className="grid grid-cols-2 gap-2">
          {dvFields.map((field) => {
            const value = dv[field];
            if (value === undefined) return null;
            return (
              <div key={field} className={`p-2.5 rounded-lg border ${borderClass}`}>
                <code className="text-[9px] text-neutral-500 block mb-0.5">
                  Δ {t(`dv.${field}`)}
                </code>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-base font-bold ${textClass}`}>
                    {value > 0 ? "+" : ""}
                    {value.toFixed(1)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-neutral-500 py-3 text-sm">
          {t("placeholder_dv")}
        </div>
      )}
    </div>
  );
}

interface FloatingWarningProps {
  show: boolean;
  title: string;
  message: string;
  action?: string;
  onClose: () => void;
}

function FloatingWarning({ show, title, message, action, onClose }: FloatingWarningProps) {
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
        className={`relative p-5 rounded-xl bg-accent-personaforge/[0.12] border-2 border-accent-personaforge/50 shadow-2xl shadow-accent-personaforge/30 max-w-lg mx-4 transition-all duration-500 ${show ? "translate-y-0 opacity-100 animate-warning-flash" : "-translate-y-4 opacity-0"}`}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-personaforge flex items-center justify-center flex-shrink-0 animate-siren">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <span className="font-bold text-lg text-accent-personaforge-light">{title}</span>
              <button
                onClick={onClose}
                className="text-accent-personaforge hover:text-accent-personaforge-light transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-base text-accent-personaforge-light/90 mt-2">{message}</p>
            {action && (
              <p className="text-sm text-accent-personaforge font-medium mt-3 p-2 bg-accent-personaforge/[0.15] rounded-lg">{action}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export default function InteractiveDemo({
  title,
  subtitle,
  conversation,
  speakerLabels = { user: "User", ai: "AI" },
  warning,
  insight,
  themeColor = "bufferline",
  playInterval = 2000,
  showDV = true,
  maxDVFields = 4,
  reverseRoles = false,
}: InteractiveDemoProps) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);

  // Get current JSV/DV from conversation
  const currentJSV = conversation.slice(0, currentTurn).reduce<JSVState | null>(
    (acc, turn) => turn.jsv || acc,
    null
  );
  const currentDV = conversation.slice(0, currentTurn).reduce<DVState | null>(
    (acc, turn) => turn.dv || acc,
    null
  );

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) return;

    if (currentTurn < conversation.length) {
      const timer = setTimeout(() => {
        setCurrentTurn((prev) => prev + 1);
      }, playInterval);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsPlaying(false), 0);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentTurn, conversation.length, playInterval]);

  // Warning trigger logic with 1 second delay
  useEffect(() => {
    if (warning && !warningDismissed && warning.condition(currentJSV, currentTurn)) {
      const timer = setTimeout(() => {
        setShowWarning(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentJSV, currentTurn, warning, warningDismissed]);

  const handlePlay = useCallback(() => {
    if (currentTurn >= conversation.length) {
      setCurrentTurn(0);
      setShowWarning(false);
      setWarningDismissed(false);
    }
    setIsPlaying(true);
  }, [currentTurn, conversation.length]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentTurn(0);
    setShowWarning(false);
    setWarningDismissed(false);
  }, []);

  const handleCloseWarning = useCallback(() => {
    setShowWarning(false);
    setWarningDismissed(true);
  }, []);

  return (
    <div className="w-full max-w-6xl">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">{title}</h2>
      {subtitle && (
        <p className="text-lg text-surface-muted mb-8 text-center">{subtitle}</p>
      )}

      {/* Main Grid with relative positioning for overlay */}
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Conversation */}
          <ConversationPanel
            conversation={conversation}
            currentTurn={currentTurn}
            speakerLabels={speakerLabels}
            themeColor={themeColor}
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onReset={handleReset}
            reverseRoles={reverseRoles}
          />

          {/* Right: JSV/DV */}
          <div className="space-y-4">
            <JSVVisualization jsv={currentJSV} themeColor={themeColor} />
            {showDV && <DVVisualization dv={currentDV} themeColor={themeColor} maxFields={maxDVFields} />}
          </div>
        </div>

        {/* Floating Warning Overlay */}
        {warning && (
          <FloatingWarning
            show={showWarning}
            title={warning.title}
            message={warning.message}
            action={warning.action}
            onClose={handleCloseWarning}
          />
        )}
      </div>

      {/* Insight */}
      {insight && (
        <p className="text-center text-surface-muted mt-6 text-sm">{insight}</p>
      )}

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes warningFlash {
          0%, 100% {
            box-shadow: 0 0 20px rgba(217, 119, 6, 0.3);
            border-color: rgba(245, 158, 11, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(217, 119, 6, 0.6), 0 0 60px rgba(217, 119, 6, 0.3);
            border-color: rgba(245, 158, 11, 0.8);
          }
        }
        .animate-warning-flash {
          animation: warningFlash 1.5s ease-in-out infinite;
        }
        @keyframes siren {
          0%, 100% {
            background-color: rgb(217, 119, 6);
            transform: scale(1);
          }
          50% {
            background-color: rgb(245, 158, 11);
            transform: scale(1.1);
          }
        }
        .animate-siren {
          animation: siren 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
