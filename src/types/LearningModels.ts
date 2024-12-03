import type { ContextDataType } from "@/types/ContextData.ts";
import type { ModuleDataType, ModuleStatuses } from "@/types/ModuleData.ts";
import type { EventDataType, EventStatuses } from "@/types/EventData.ts";

export interface LearningModuleType {
    type: "module";
    data: ModuleDataType;
    context: ContextDataType<ModuleStatuses>;
}

export interface LearningEventType {
    type: "event";
    data: EventDataType;
    context: ContextDataType<EventStatuses>;
}
