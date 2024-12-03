export interface ContextDataType<T> {
    status: T;
    complete: boolean;
    // Date string ISO (8601)
    completedAt: string | null;
}
