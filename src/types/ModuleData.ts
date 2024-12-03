export interface ModuleDataType {
    id: number;
    name: string;
    description: string | null;
    imagePath: string | null;
    /**
     * Type of learning modules
     * - quiz: User intractable learning module that will be evaluated with a score
     * - survey: User intractable learning module
     * - lesson: Static learning module without user intractable (text, pics, vids etc)
     */
    moduleType: "quiz" | "survey" | "lesson";
    // Estimated time in seconds of module completion
    duration: number;
    // Date string ISO (8601)
    createdAt: string;
    // Date string ISO (8601)
    updatedAt: string;
}

export type ModuleStatuses = "completed" | "incomplete" | "locked" | "pending";
/**
 * Modules statuses
 * - completed: User has finished the learning module
 * - incomplete: User has not finished learning module
 * - locked: Learning module is locked to the user, he cannot start it until preconditions are met
 * - pending: User is waiting for manager input or action so module can be completed
 */

export enum ModuleStatus {
    Completed = "completed",
    Incomplete = "incomplete",
    Locked = "locked",
    Pending = "pending"
}
