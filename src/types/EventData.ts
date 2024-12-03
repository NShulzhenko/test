export interface EventDataType {
    id: number;
    name: string;
    description: string | null;
    imagePath: string | null;
    location: string;
    // Date string ISO (8601)
    startDate: string;
    // Date string ISO (8601)
    endDate: string;
    /**
     * Optional signup deadline if user needs to respond to invitation
     * before a certain date
     */
    signupDeadline: string | null;
    // Date string ISO (8601)
    createdAt: string;
    // Date string ISO (8601)
    updatedAt: string;
}

export type EventStatuses = "attended" | "attending" | "invited" | "declined";

export enum EventStatus {
    Attended = "attended",
    Attending = "attending",
    Invited = "invited",
    Declined = "declined"
}
/**
 * Event statues
 * - attended: User has attended the event
 * - attending: User has accepted invitation to future event
 * - invited: User has been invited to event and is waiting for a response
 * - declined: User has declined invitation to event
 */
