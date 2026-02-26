"use client";

import { useState, useEffect, useCallback } from "react";
import type { InteractiveDemoProps, JSVState, DVState } from "./types";
import ConversationPanel from "./ConversationPanel";
import JSVVisualization from "./JSVVisualization";
import DVVisualization from "./DVVisualization";
import FloatingWarning from "./FloatingWarning";

export type { JSVState, DVState, ConversationTurn, WarningConfig, InteractiveDemoProps } from "./types";

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
        <p className="text-base sm:text-lg text-surface-muted mb-4 sm:mb-8 text-center">{subtitle}</p>
      )}

      {/* Main Grid with relative positioning for overlay */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
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
    </div>
  );
}
