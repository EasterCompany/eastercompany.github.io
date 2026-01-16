export interface DexterEvent {
  id: string;
  type: string;
  timestamp: number;
  data?: any;
  category?: string;
}

export interface AlertEvent extends DexterEvent {
  priority?: string | number;
  read?: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: number;
  service: string;
  level: string;
  message: string;
}

export interface ProcessInfo {
  pid: number;
  name: string;
  cpu: number;
  memory: number;
  status: string;
}

export interface SystemStatus {
  cpu_usage: number;
  memory_usage: number;
  disk_usage: number;
  uptime: number;
}
