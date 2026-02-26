"use client";

import { useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, User, Bot } from "lucide-react";
import type { ConversationTurn } from "./types";
import { getAccentBg, getAccentClass } from "./utils";

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

export default function ConversationPanel({
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
    <div className="rounded-xl bg-surface-card/70 border border-surface-border overflow-hidden flex flex-col h-[300px] sm:h-[420px]">
      {/* Header with play controls (top right) */}
      <div className="bg-surface-card/80 px-4 py-2 border-b border-surface-border flex items-center justify-between flex-shrink-0">
        <span className="text-xs text-neutral-500">
          {currentTurn} / {conversation.length} turns
        </span>
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <button
              onClick={onPause}
              aria-label="Pause demo"
              className={`w-9 h-9 flex items-center justify-center rounded-full ${getAccentClass(themeColor)} text-white shadow-lg transition-colors duration-200`}
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onPlay}
              aria-label="Play demo"
              className={`w-9 h-9 flex items-center justify-center rounded-full ${getAccentClass(themeColor)} text-white shadow-lg transition-colors duration-200`}
            >
              <Play className="w-4 h-4 ml-0.5" />
            </button>
          )}
          <button
            onClick={onReset}
            aria-label="Reset demo"
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
