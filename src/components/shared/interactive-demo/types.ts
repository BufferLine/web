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
