/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Long` scalar type represents 52-bit integers */
  Long: { input: number; output: number; }
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: { input: number; output: number; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL; output: URL; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string; }
};

export type AccessUrl = {
  __typename?: 'AccessUrl';
  ipv4?: Maybe<Scalars['URL']['output']>;
  ipv6?: Maybe<Scalars['URL']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type: URL_TYPE;
};

export type AccessUrlInput = {
  ipv4?: InputMaybe<Scalars['URL']['input']>;
  ipv6?: InputMaybe<Scalars['URL']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type: URL_TYPE;
};

export type AddPermissionInput = {
  actions: Array<Scalars['String']['input']>;
  resource: Resource;
};

export type AddRoleForApiKeyInput = {
  apiKeyId: Scalars['ID']['input'];
  role: Role;
};

export type AddRoleForUserInput = {
  role: Role;
  userId: Scalars['ID']['input'];
};

export type AllowedOriginInput = {
  origins: Array<Scalars['String']['input']>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  roles: Array<Role>;
};

export type ApiKeyResponse = {
  __typename?: 'ApiKeyResponse';
  error?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type ApiKeyWithSecret = {
  __typename?: 'ApiKeyWithSecret';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  roles: Array<Role>;
};

/**
 * Input should be a subset of ApiSettings that can be updated.
 * Some field combinations may be required or disallowed. Please refer to each field for more information.
 */
export type ApiSettingsInput = {
  /** The type of WAN access to use for Remote Access. */
  accessType?: InputMaybe<WAN_ACCESS_TYPE>;
  /** A list of origins allowed to interact with the API. */
  extraOrigins?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The type of port forwarding to use for Remote Access. */
  forwardType?: InputMaybe<WAN_FORWARD_TYPE>;
  /**
   * The port to use for Remote Access. Not required for UPNP forwardType. Required for STATIC forwardType.
   * Ignored if accessType is DISABLED or forwardType is UPNP.
   */
  port?: InputMaybe<Scalars['Port']['input']>;
  /**
   * If true, the GraphQL sandbox will be enabled and available at /graphql.
   * If false, the GraphQL sandbox will be disabled and only the production API will be available.
   */
  sandbox?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArrayType = Node & {
  __typename?: 'Array';
  /** Current boot disk */
  boot?: Maybe<ArrayDisk>;
  /** Caches in the current array */
  caches: Array<ArrayDisk>;
  /** Current array capacity */
  capacity: ArrayCapacity;
  /** Data disks in the current array */
  disks: Array<ArrayDisk>;
  id: Scalars['ID']['output'];
  /** Parity disks in the current array */
  parities: Array<ArrayDisk>;
  /** Array state after this query/mutation */
  pendingState?: Maybe<ArrayPendingState>;
  /** Array state before this query/mutation */
  previousState?: Maybe<ArrayState>;
  /** Current array state */
  state: ArrayState;
};

export type ArrayCapacity = {
  __typename?: 'ArrayCapacity';
  disks: Capacity;
  kilobytes: Capacity;
};

export type ArrayDisk = {
  __typename?: 'ArrayDisk';
  /**  User comment on disk  */
  comment?: Maybe<Scalars['String']['output']>;
  /**  (%) Disk space left for critical  */
  critical?: Maybe<Scalars['Int']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  exportable?: Maybe<Scalars['Boolean']['output']>;
  /**  File format (ex MBR: 4KiB-aligned)  */
  format?: Maybe<Scalars['String']['output']>;
  /**  (KB) Free Size on the FS (Not present on Parity type drive) */
  fsFree?: Maybe<Scalars['Long']['output']>;
  /**  (KB) Total Size of the FS (Not present on Parity type drive)  */
  fsSize?: Maybe<Scalars['Long']['output']>;
  /**  File system type for the disk  */
  fsType?: Maybe<Scalars['String']['output']>;
  /**  (KB) Used Size on the FS (Not present on Parity type drive) */
  fsUsed?: Maybe<Scalars['Long']['output']>;
  /**  Disk indentifier, only set for present disks on the system  */
  id: Scalars['ID']['output'];
  /**  Array slot number. Parity1 is always 0 and Parity2 is always 29. Array slots will be 1 - 28. Cache slots are 30 - 53. Flash is 54.  */
  idx: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Number of unrecoverable errors reported by the device I/O drivers. Missing data due to unrecoverable array read errors is filled in on-the-fly using parity reconstruct (and we attempt to write this data back to the sector(s) which failed). Any unrecoverable write error results in disabling the disk. */
  numErrors: Scalars['Long']['output'];
  /** Count of I/O read requests sent to the device I/O drivers. These statistics may be cleared at any time. */
  numReads: Scalars['Long']['output'];
  /** Count of I/O writes requests sent to the device I/O drivers. These statistics may be cleared at any time. */
  numWrites: Scalars['Long']['output'];
  /**  Is the disk a HDD or SSD.  */
  rotational?: Maybe<Scalars['Boolean']['output']>;
  /**  (KB) Disk Size total  */
  size: Scalars['Long']['output'];
  status?: Maybe<ArrayDiskStatus>;
  /**  Disk temp - will be NaN if array is not started or DISK_NP  */
  temp?: Maybe<Scalars['Int']['output']>;
  /**  ata | nvme | usb | (others) */
  transport?: Maybe<Scalars['String']['output']>;
  /**  Type of Disk - used to differentiate Cache / Flash / Array / Parity  */
  type: ArrayDiskType;
  /**  (%) Disk space left to warn  */
  warning?: Maybe<Scalars['Int']['output']>;
};

export enum ArrayDiskFsColor {
  /** Disk is OK and not running */
  GreenOff = 'green_off',
  /** Disk is OK and running */
  GreenOn = 'green_on',
  RedOff = 'red_off',
  RedOn = 'red_on',
  YellowOff = 'yellow_off',
  YellowOn = 'yellow_on'
}

export enum ArrayDiskStatus {
  /**  disabled, old disk still present  */
  DiskDsbl = 'DISK_DSBL',
  /**  disabled, new disk present  */
  DiskDsblNew = 'DISK_DSBL_NEW',
  /**  enabled, disk present, but not valid  */
  DiskInvalid = 'DISK_INVALID',
  /**  new disk  */
  DiskNew = 'DISK_NEW',
  /**  no disk present, no disk configured  */
  DiskNp = 'DISK_NP',
  /**  disabled, no disk present  */
  DiskNpDsbl = 'DISK_NP_DSBL',
  /**  enabled, but missing  */
  DiskNpMissing = 'DISK_NP_MISSING',
  /**  enabled, disk present, correct, valid  */
  DiskOk = 'DISK_OK',
  /**  enablled, disk present, but not correct disk  */
  DiskWrong = 'DISK_WRONG'
}

export enum ArrayDiskType {
  /** Cache disk */
  Cache = 'Cache',
  /** Data disk */
  Data = 'Data',
  /** Flash disk */
  Flash = 'Flash',
  /** Parity disk */
  Parity = 'Parity'
}

export enum ArrayPendingState {
  /** Array has no data disks */
  NoDataDisks = 'no_data_disks',
  /** Array is starting */
  Starting = 'starting',
  /** Array is stopping */
  Stopping = 'stopping',
  /** Array has too many missing data disks */
  TooManyMissingDisks = 'too_many_missing_disks'
}

export enum ArrayState {
  /** A disk is disabled in the array */
  DisableDisk = 'DISABLE_DISK',
  /** Too many changes to array at the same time */
  InvalidExpansion = 'INVALID_EXPANSION',
  /** Array has new disks */
  NewArray = 'NEW_ARRAY',
  /** Array has new disks they're too small */
  NewDiskTooSmall = 'NEW_DISK_TOO_SMALL',
  /** Array has no data disks */
  NoDataDisks = 'NO_DATA_DISKS',
  /** Parity isn't the biggest, can't start array */
  ParityNotBiggest = 'PARITY_NOT_BIGGEST',
  /** A disk is being reconstructed */
  ReconDisk = 'RECON_DISK',
  /** Array is running */
  Started = 'STARTED',
  /** Array has stopped */
  Stopped = 'STOPPED',
  /** Array is disabled */
  SwapDsbl = 'SWAP_DSBL',
  /** Array has too many missing data disks */
  TooManyMissingDisks = 'TOO_MANY_MISSING_DISKS'
}

export type Baseboard = {
  __typename?: 'Baseboard';
  assetTag?: Maybe<Scalars['String']['output']>;
  manufacturer: Scalars['String']['output'];
  model?: Maybe<Scalars['String']['output']>;
  serial?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Capacity = {
  __typename?: 'Capacity';
  free: Scalars['String']['output'];
  total: Scalars['String']['output'];
  used: Scalars['String']['output'];
};

export type Case = {
  __typename?: 'Case';
  base64?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Cloud = {
  __typename?: 'Cloud';
  allowedOrigins: Array<Scalars['String']['output']>;
  apiKey: ApiKeyResponse;
  cloud: CloudResponse;
  error?: Maybe<Scalars['String']['output']>;
  minigraphql: MinigraphqlResponse;
  relay?: Maybe<RelayResponse>;
};

export type CloudResponse = {
  __typename?: 'CloudResponse';
  error?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Config = Node & {
  __typename?: 'Config';
  error?: Maybe<ConfigErrorState>;
  id: Scalars['ID']['output'];
  valid?: Maybe<Scalars['Boolean']['output']>;
};

export enum ConfigErrorState {
  Ineligible = 'INELIGIBLE',
  Invalid = 'INVALID',
  NoKeyServer = 'NO_KEY_SERVER',
  UnknownError = 'UNKNOWN_ERROR',
  Withdrawn = 'WITHDRAWN'
}

export type Connect = Node & {
  __typename?: 'Connect';
  dynamicRemoteAccess: DynamicRemoteAccessStatus;
  id: Scalars['ID']['output'];
  settings: ConnectSettings;
};

export type ConnectSettings = Node & {
  __typename?: 'ConnectSettings';
  dataSchema: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  uiSchema: Scalars['JSON']['output'];
  values: ConnectSettingsValues;
};

/** Intersection type of ApiSettings and RemoteAccess */
export type ConnectSettingsValues = {
  __typename?: 'ConnectSettingsValues';
  /** The type of WAN access used for Remote Access. */
  accessType: WAN_ACCESS_TYPE;
  /** A list of origins allowed to interact with the API. */
  extraOrigins: Array<Scalars['String']['output']>;
  /** The type of port forwarding used for Remote Access. */
  forwardType?: Maybe<WAN_FORWARD_TYPE>;
  /** The port used for Remote Access. */
  port?: Maybe<Scalars['Port']['output']>;
  /**
   * If true, the GraphQL sandbox is enabled and available at /graphql.
   * If false, the GraphQL sandbox is disabled and only the production API will be available.
   */
  sandbox: Scalars['Boolean']['output'];
};

export type ConnectSignInInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  apiKey: Scalars['String']['input'];
  idToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  userInfo?: InputMaybe<ConnectUserInfoInput>;
};

export type ConnectUserInfoInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  preferred_username: Scalars['String']['input'];
};

export type ContainerHostConfig = {
  __typename?: 'ContainerHostConfig';
  networkMode: Scalars['String']['output'];
};

export type ContainerMount = {
  __typename?: 'ContainerMount';
  destination: Scalars['String']['output'];
  driver: Scalars['String']['output'];
  mode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  propagation: Scalars['String']['output'];
  rw: Scalars['Boolean']['output'];
  source: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ContainerPort = {
  __typename?: 'ContainerPort';
  ip?: Maybe<Scalars['String']['output']>;
  privatePort?: Maybe<Scalars['Int']['output']>;
  publicPort?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ContainerPortType>;
};

export enum ContainerPortType {
  Tcp = 'TCP',
  Udp = 'UDP'
}

export enum ContainerState {
  Exited = 'EXITED',
  Running = 'RUNNING'
}

export type CreateApiKeyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /**  This will replace the existing key if one already exists with the same name, otherwise returns the existing key  */
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  permissions?: InputMaybe<Array<AddPermissionInput>>;
  roles?: InputMaybe<Array<Role>>;
};

export type Devices = {
  __typename?: 'Devices';
  gpu?: Maybe<Array<Maybe<Gpu>>>;
  network?: Maybe<Array<Maybe<Network>>>;
  pci?: Maybe<Array<Maybe<Pci>>>;
  usb?: Maybe<Array<Maybe<Usb>>>;
};

export type Disk = {
  __typename?: 'Disk';
  bytesPerSector: Scalars['Long']['output'];
  device: Scalars['String']['output'];
  firmwareRevision: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interfaceType: DiskInterfaceType;
  name: Scalars['String']['output'];
  partitions?: Maybe<Array<DiskPartition>>;
  sectorsPerTrack: Scalars['Long']['output'];
  serialNum: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  smartStatus: DiskSmartStatus;
  temperature: Scalars['Long']['output'];
  totalCylinders: Scalars['Long']['output'];
  totalHeads: Scalars['Long']['output'];
  totalSectors: Scalars['Long']['output'];
  totalTracks: Scalars['Long']['output'];
  tracksPerCylinder: Scalars['Long']['output'];
  type: Scalars['String']['output'];
  vendor: Scalars['String']['output'];
};

export enum DiskFsType {
  Btrfs = 'btrfs',
  Vfat = 'vfat',
  Xfs = 'xfs',
  Zfs = 'zfs'
}

export enum DiskInterfaceType {
  PcIe = 'PCIe',
  Sas = 'SAS',
  Sata = 'SATA',
  Unknown = 'UNKNOWN',
  Usb = 'USB'
}

export type DiskPartition = {
  __typename?: 'DiskPartition';
  fsType: DiskFsType;
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
};

export enum DiskSmartStatus {
  Ok = 'OK',
  Unknown = 'UNKNOWN'
}

export type Display = {
  __typename?: 'Display';
  banner?: Maybe<Scalars['String']['output']>;
  case?: Maybe<Case>;
  critical?: Maybe<Scalars['Int']['output']>;
  dashapps?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  hot?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  resize?: Maybe<Scalars['Boolean']['output']>;
  scale?: Maybe<Scalars['Boolean']['output']>;
  tabs?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['Boolean']['output']>;
  theme?: Maybe<Theme>;
  total?: Maybe<Scalars['Boolean']['output']>;
  unit?: Maybe<Temperature>;
  usage?: Maybe<Scalars['Boolean']['output']>;
  users?: Maybe<Scalars['String']['output']>;
  warning?: Maybe<Scalars['Int']['output']>;
  wwn?: Maybe<Scalars['Boolean']['output']>;
};

export type Docker = Node & {
  __typename?: 'Docker';
  containers?: Maybe<Array<DockerContainer>>;
  id: Scalars['ID']['output'];
  networks?: Maybe<Array<DockerNetwork>>;
};

export type DockerContainer = {
  __typename?: 'DockerContainer';
  autoStart: Scalars['Boolean']['output'];
  command: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  hostConfig?: Maybe<ContainerHostConfig>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  imageId: Scalars['String']['output'];
  labels?: Maybe<Scalars['JSON']['output']>;
  mounts?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  names?: Maybe<Array<Scalars['String']['output']>>;
  networkSettings?: Maybe<Scalars['JSON']['output']>;
  ports: Array<ContainerPort>;
  /**  (B) Total size of all the files in the container  */
  sizeRootFs?: Maybe<Scalars['Long']['output']>;
  state: ContainerState;
  status: Scalars['String']['output'];
};

export type DockerNetwork = {
  __typename?: 'DockerNetwork';
  attachable: Scalars['Boolean']['output'];
  configFrom?: Maybe<Scalars['JSON']['output']>;
  configOnly: Scalars['Boolean']['output'];
  containers?: Maybe<Scalars['JSON']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  driver?: Maybe<Scalars['String']['output']>;
  enableIPv6: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  ingress: Scalars['Boolean']['output'];
  internal: Scalars['Boolean']['output'];
  ipam?: Maybe<Scalars['JSON']['output']>;
  labels?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
};

export type DynamicRemoteAccessStatus = {
  __typename?: 'DynamicRemoteAccessStatus';
  enabledType: DynamicRemoteAccessType;
  error?: Maybe<Scalars['String']['output']>;
  runningType: DynamicRemoteAccessType;
};

export enum DynamicRemoteAccessType {
  Disabled = 'DISABLED',
  Static = 'STATIC',
  Upnp = 'UPNP'
}

export type EnableDynamicRemoteAccessInput = {
  enabled: Scalars['Boolean']['input'];
  url: AccessUrlInput;
};

export type Flash = {
  __typename?: 'Flash';
  guid?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
};

export type Gpu = {
  __typename?: 'Gpu';
  blacklisted: Scalars['Boolean']['output'];
  class: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productid: Scalars['String']['output'];
  type: Scalars['String']['output'];
  typeid: Scalars['String']['output'];
  vendorname: Scalars['String']['output'];
};

export enum Importance {
  Alert = 'ALERT',
  Info = 'INFO',
  Warning = 'WARNING'
}

export type Info = Node & {
  __typename?: 'Info';
  /** Count of docker containers */
  apps?: Maybe<InfoApps>;
  baseboard?: Maybe<Baseboard>;
  cpu?: Maybe<InfoCpu>;
  devices?: Maybe<Devices>;
  display?: Maybe<Display>;
  id: Scalars['ID']['output'];
  /** Machine ID */
  machineId?: Maybe<Scalars['ID']['output']>;
  memory?: Maybe<InfoMemory>;
  os?: Maybe<Os>;
  system?: Maybe<System>;
  time: Scalars['DateTime']['output'];
  versions?: Maybe<Versions>;
};

export type InfoApps = {
  __typename?: 'InfoApps';
  /** How many docker containers are installed */
  installed?: Maybe<Scalars['Int']['output']>;
  /** How many docker containers are running */
  started?: Maybe<Scalars['Int']['output']>;
};

export type InfoCpu = {
  __typename?: 'InfoCpu';
  brand: Scalars['String']['output'];
  cache: Scalars['JSON']['output'];
  cores: Scalars['Int']['output'];
  family: Scalars['String']['output'];
  flags?: Maybe<Array<Scalars['String']['output']>>;
  manufacturer: Scalars['String']['output'];
  model: Scalars['String']['output'];
  processors: Scalars['Long']['output'];
  revision: Scalars['String']['output'];
  socket: Scalars['String']['output'];
  speed: Scalars['Float']['output'];
  speedmax: Scalars['Float']['output'];
  speedmin: Scalars['Float']['output'];
  stepping: Scalars['Int']['output'];
  threads: Scalars['Int']['output'];
  vendor: Scalars['String']['output'];
  voltage?: Maybe<Scalars['String']['output']>;
};

export type InfoMemory = {
  __typename?: 'InfoMemory';
  active: Scalars['Long']['output'];
  available: Scalars['Long']['output'];
  buffcache: Scalars['Long']['output'];
  free: Scalars['Long']['output'];
  layout?: Maybe<Array<MemoryLayout>>;
  max: Scalars['Long']['output'];
  swapfree: Scalars['Long']['output'];
  swaptotal: Scalars['Long']['output'];
  swapused: Scalars['Long']['output'];
  total: Scalars['Long']['output'];
  used: Scalars['Long']['output'];
};

export type KeyFile = {
  __typename?: 'KeyFile';
  contents?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
};

/** Represents a log file in the system */
export type LogFile = {
  __typename?: 'LogFile';
  /** Last modified timestamp */
  modifiedAt: Scalars['DateTime']['output'];
  /** Name of the log file */
  name: Scalars['String']['output'];
  /** Full path to the log file */
  path: Scalars['String']['output'];
  /** Size of the log file in bytes */
  size: Scalars['Int']['output'];
};

/** Content of a log file */
export type LogFileContent = {
  __typename?: 'LogFileContent';
  /** Content of the log file */
  content: Scalars['String']['output'];
  /** Path to the log file */
  path: Scalars['String']['output'];
  /** Starting line number of the content (1-indexed) */
  startLine?: Maybe<Scalars['Int']['output']>;
  /** Total number of lines in the file */
  totalLines: Scalars['Int']['output'];
};

/** The current user */
export type Me = UserAccount & {
  __typename?: 'Me';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  roles: Array<Role>;
};

export enum MemoryFormFactor {
  Dimm = 'DIMM'
}

export type MemoryLayout = {
  __typename?: 'MemoryLayout';
  bank?: Maybe<Scalars['String']['output']>;
  clockSpeed?: Maybe<Scalars['Long']['output']>;
  formFactor?: Maybe<MemoryFormFactor>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  partNum?: Maybe<Scalars['String']['output']>;
  serialNum?: Maybe<Scalars['String']['output']>;
  size: Scalars['Long']['output'];
  type?: Maybe<MemoryType>;
  voltageConfigured?: Maybe<Scalars['Long']['output']>;
  voltageMax?: Maybe<Scalars['Long']['output']>;
  voltageMin?: Maybe<Scalars['Long']['output']>;
};

export enum MemoryType {
  Ddr2 = 'DDR2',
  Ddr3 = 'DDR3',
  Ddr4 = 'DDR4'
}

export enum MinigraphStatus {
  Connected = 'CONNECTED',
  Connecting = 'CONNECTING',
  ErrorRetrying = 'ERROR_RETRYING',
  PingFailure = 'PING_FAILURE',
  PreInit = 'PRE_INIT'
}

export type MinigraphqlResponse = {
  __typename?: 'MinigraphqlResponse';
  error?: Maybe<Scalars['String']['output']>;
  status: MinigraphStatus;
  timeout?: Maybe<Scalars['Int']['output']>;
};

export type Mount = {
  __typename?: 'Mount';
  directory?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add new disk to array */
  addDiskToArray?: Maybe<ArrayType>;
  addPermission: Scalars['Boolean']['output'];
  addRoleForApiKey: Scalars['Boolean']['output'];
  addRoleForUser: Scalars['Boolean']['output'];
  /** Add a new user */
  addUser?: Maybe<User>;
  archiveAll: NotificationOverview;
  /** Marks a notification as archived. */
  archiveNotification: Notification;
  archiveNotifications: NotificationOverview;
  /** Cancel parity check */
  cancelParityCheck?: Maybe<Scalars['JSON']['output']>;
  clearArrayDiskStatistics?: Maybe<Scalars['JSON']['output']>;
  connectSignIn: Scalars['Boolean']['output'];
  connectSignOut: Scalars['Boolean']['output'];
  createApiKey: ApiKeyWithSecret;
  createNotification: Notification;
  /** Deletes all archived notifications on server. */
  deleteArchivedNotifications: NotificationOverview;
  deleteNotification: NotificationOverview;
  /** Delete a user */
  deleteUser?: Maybe<User>;
  enableDynamicRemoteAccess: Scalars['Boolean']['output'];
  login?: Maybe<Scalars['String']['output']>;
  mountArrayDisk?: Maybe<Disk>;
  /** Pause parity check */
  pauseParityCheck?: Maybe<Scalars['JSON']['output']>;
  reboot?: Maybe<Scalars['String']['output']>;
  /** Reads each notification to recompute & update the overview. */
  recalculateOverview: NotificationOverview;
  /** Remove existing disk from array. NOTE: The array must be stopped before running this otherwise it'll throw an error. */
  removeDiskFromArray?: Maybe<ArrayType>;
  removeRoleFromApiKey: Scalars['Boolean']['output'];
  /** Resume parity check */
  resumeParityCheck?: Maybe<Scalars['JSON']['output']>;
  setAdditionalAllowedOrigins: Array<Scalars['String']['output']>;
  setupRemoteAccess: Scalars['Boolean']['output'];
  shutdown?: Maybe<Scalars['String']['output']>;
  /** Start array */
  startArray?: Maybe<ArrayType>;
  /** Start parity check */
  startParityCheck?: Maybe<Scalars['JSON']['output']>;
  /** Stop array */
  stopArray?: Maybe<ArrayType>;
  unarchiveAll: NotificationOverview;
  unarchiveNotifications: NotificationOverview;
  unmountArrayDisk?: Maybe<Disk>;
  /** Marks a notification as unread. */
  unreadNotification: Notification;
  /**
   * Update the API settings.
   * Some setting combinations may be required or disallowed. Please refer to each setting for more information.
   */
  updateApiSettings: ConnectSettingsValues;
};


export type MutationaddDiskToArrayArgs = {
  input?: InputMaybe<arrayDiskInput>;
};


export type MutationaddPermissionArgs = {
  input: AddPermissionInput;
};


export type MutationaddRoleForApiKeyArgs = {
  input: AddRoleForApiKeyInput;
};


export type MutationaddRoleForUserArgs = {
  input: AddRoleForUserInput;
};


export type MutationaddUserArgs = {
  input: addUserInput;
};


export type MutationarchiveAllArgs = {
  importance?: InputMaybe<Importance>;
};


export type MutationarchiveNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationarchiveNotificationsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationclearArrayDiskStatisticsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationconnectSignInArgs = {
  input: ConnectSignInInput;
};


export type MutationcreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationcreateNotificationArgs = {
  input: NotificationData;
};


export type MutationdeleteNotificationArgs = {
  id: Scalars['String']['input'];
  type: NotificationType;
};


export type MutationdeleteUserArgs = {
  input: deleteUserInput;
};


export type MutationenableDynamicRemoteAccessArgs = {
  input: EnableDynamicRemoteAccessInput;
};


export type MutationloginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationmountArrayDiskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationremoveDiskFromArrayArgs = {
  input?: InputMaybe<arrayDiskInput>;
};


export type MutationremoveRoleFromApiKeyArgs = {
  input: RemoveRoleFromApiKeyInput;
};


export type MutationsetAdditionalAllowedOriginsArgs = {
  input: AllowedOriginInput;
};


export type MutationsetupRemoteAccessArgs = {
  input: SetupRemoteAccessInput;
};


export type MutationstartParityCheckArgs = {
  correct?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationunarchiveAllArgs = {
  importance?: InputMaybe<Importance>;
};


export type MutationunarchiveNotificationsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationunmountArrayDiskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationunreadNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationupdateApiSettingsArgs = {
  input: ApiSettingsInput;
};

export type Network = Node & {
  __typename?: 'Network';
  accessUrls?: Maybe<Array<AccessUrl>>;
  carrierChanges?: Maybe<Scalars['String']['output']>;
  duplex?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  iface?: Maybe<Scalars['String']['output']>;
  ifaceName?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  ipv4?: Maybe<Scalars['String']['output']>;
  ipv6?: Maybe<Scalars['String']['output']>;
  mac?: Maybe<Scalars['String']['output']>;
  mtu?: Maybe<Scalars['String']['output']>;
  operstate?: Maybe<Scalars['String']['output']>;
  speed?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Notification = Node & {
  __typename?: 'Notification';
  description: Scalars['String']['output'];
  formattedTimestamp?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  importance: Importance;
  link?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  /** ISO Timestamp for when the notification occurred */
  timestamp?: Maybe<Scalars['String']['output']>;
  /** Also known as 'event' */
  title: Scalars['String']['output'];
  type: NotificationType;
};

export type NotificationCounts = {
  __typename?: 'NotificationCounts';
  alert: Scalars['Int']['output'];
  info: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  warning: Scalars['Int']['output'];
};

export type NotificationData = {
  description: Scalars['String']['input'];
  importance: Importance;
  link?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type NotificationFilter = {
  importance?: InputMaybe<Importance>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  type?: InputMaybe<NotificationType>;
};

export type NotificationOverview = {
  __typename?: 'NotificationOverview';
  archive: NotificationCounts;
  unread: NotificationCounts;
};

export enum NotificationType {
  Archive = 'ARCHIVE',
  Unread = 'UNREAD'
}

export type Notifications = Node & {
  __typename?: 'Notifications';
  id: Scalars['ID']['output'];
  list: Array<Notification>;
  /** A cached overview of the notifications in the system & their severity. */
  overview: NotificationOverview;
};


export type NotificationslistArgs = {
  filter: NotificationFilter;
};

export type Os = {
  __typename?: 'Os';
  arch?: Maybe<Scalars['String']['output']>;
  build?: Maybe<Scalars['String']['output']>;
  codename?: Maybe<Scalars['String']['output']>;
  codepage?: Maybe<Scalars['String']['output']>;
  distro?: Maybe<Scalars['String']['output']>;
  hostname?: Maybe<Scalars['String']['output']>;
  kernel?: Maybe<Scalars['String']['output']>;
  logofile?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  release?: Maybe<Scalars['String']['output']>;
  serial?: Maybe<Scalars['String']['output']>;
  uptime?: Maybe<Scalars['DateTime']['output']>;
};

export type Owner = {
  __typename?: 'Owner';
  avatar?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ParityCheck = {
  __typename?: 'ParityCheck';
  date: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  errors: Scalars['String']['output'];
  speed: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Partition = {
  __typename?: 'Partition';
  devlinks?: Maybe<Scalars['String']['output']>;
  devname?: Maybe<Scalars['String']['output']>;
  devpath?: Maybe<Scalars['String']['output']>;
  devtype?: Maybe<Scalars['String']['output']>;
  idAta?: Maybe<Scalars['String']['output']>;
  idAtaDownloadMicrocode?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAam?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAamCurrentValue?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAamEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAamVendorRecommendedValue?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetApm?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetApmCurrentValue?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetApmEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetHpa?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetHpaEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPm?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPmEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPuis?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPuisEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurity?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurityEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurityEnhancedEraseUnitMin?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurityEraseUnitMin?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSmart?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSmartEnabled?: Maybe<Scalars['String']['output']>;
  idAtaRotationRateRpm?: Maybe<Scalars['String']['output']>;
  idAtaSata?: Maybe<Scalars['String']['output']>;
  idAtaSataSignalRateGen1?: Maybe<Scalars['String']['output']>;
  idAtaSataSignalRateGen2?: Maybe<Scalars['String']['output']>;
  idAtaWriteCache?: Maybe<Scalars['String']['output']>;
  idAtaWriteCacheEnabled?: Maybe<Scalars['String']['output']>;
  idBus?: Maybe<Scalars['String']['output']>;
  idFsType?: Maybe<Scalars['String']['output']>;
  idFsUsage?: Maybe<Scalars['String']['output']>;
  idFsUuid?: Maybe<Scalars['String']['output']>;
  idFsUuidEnc?: Maybe<Scalars['String']['output']>;
  idModel?: Maybe<Scalars['String']['output']>;
  idModelEnc?: Maybe<Scalars['String']['output']>;
  idPartEntryDisk?: Maybe<Scalars['String']['output']>;
  idPartEntryNumber?: Maybe<Scalars['String']['output']>;
  idPartEntryOffset?: Maybe<Scalars['String']['output']>;
  idPartEntryScheme?: Maybe<Scalars['String']['output']>;
  idPartEntrySize?: Maybe<Scalars['String']['output']>;
  idPartEntryType?: Maybe<Scalars['String']['output']>;
  idPartTableType?: Maybe<Scalars['String']['output']>;
  idPath?: Maybe<Scalars['String']['output']>;
  idPathTag?: Maybe<Scalars['String']['output']>;
  idRevision?: Maybe<Scalars['String']['output']>;
  idSerial?: Maybe<Scalars['String']['output']>;
  idSerialShort?: Maybe<Scalars['String']['output']>;
  idType?: Maybe<Scalars['String']['output']>;
  idWwn?: Maybe<Scalars['String']['output']>;
  idWwnWithExtension?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  minor?: Maybe<Scalars['String']['output']>;
  partn?: Maybe<Scalars['String']['output']>;
  subsystem?: Maybe<Scalars['String']['output']>;
  usecInitialized?: Maybe<Scalars['String']['output']>;
};

export type Pci = {
  __typename?: 'Pci';
  blacklisted?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  productid?: Maybe<Scalars['String']['output']>;
  productname?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeid?: Maybe<Scalars['String']['output']>;
  vendorid?: Maybe<Scalars['String']['output']>;
  vendorname?: Maybe<Scalars['String']['output']>;
};

export type Permission = {
  __typename?: 'Permission';
  actions: Array<Scalars['String']['output']>;
  resource: Resource;
};

export type ProfileModel = {
  __typename?: 'ProfileModel';
  avatar?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  apiKey?: Maybe<ApiKey>;
  apiKeys: Array<ApiKey>;
  /** An Unraid array consisting of 1 or 2 Parity disks and a number of Data disks. */
  array: ArrayType;
  cloud?: Maybe<Cloud>;
  config: Config;
  connect: Connect;
  /** Single disk */
  disk?: Maybe<Disk>;
  /** Mulitiple disks */
  disks: Array<Maybe<Disk>>;
  display?: Maybe<Display>;
  docker: Docker;
  /** All Docker containers */
  dockerContainers: Array<DockerContainer>;
  /** Docker network */
  dockerNetwork: DockerNetwork;
  /** All Docker networks */
  dockerNetworks: Array<Maybe<DockerNetwork>>;
  extraAllowedOrigins: Array<Scalars['String']['output']>;
  flash?: Maybe<Flash>;
  info?: Maybe<Info>;
  /**
   * Get the content of a specific log file
   * @param path Path to the log file
   * @param lines Number of lines to read from the end of the file (default: 100)
   * @param startLine Optional starting line number (1-indexed)
   */
  logFile: LogFileContent;
  /** List all available log files */
  logFiles: Array<LogFile>;
  /** Current user account */
  me?: Maybe<Me>;
  network?: Maybe<Network>;
  notifications: Notifications;
  online?: Maybe<Scalars['Boolean']['output']>;
  owner?: Maybe<Owner>;
  parityHistory?: Maybe<Array<Maybe<ParityCheck>>>;
  registration?: Maybe<Registration>;
  remoteAccess: RemoteAccess;
  server?: Maybe<Server>;
  servers: Array<Server>;
  services: Array<Service>;
  /** Network Shares */
  shares?: Maybe<Array<Maybe<Share>>>;
  unassignedDevices?: Maybe<Array<Maybe<UnassignedDevice>>>;
  /** User account */
  user?: Maybe<User>;
  /** User accounts */
  users: Array<User>;
  vars?: Maybe<Vars>;
  /** Virtual machines */
  vms?: Maybe<Vms>;
};


export type QueryapiKeyArgs = {
  id: Scalars['ID']['input'];
};


export type QuerydiskArgs = {
  id: Scalars['ID']['input'];
};


export type QuerydockerContainersArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerydockerNetworkArgs = {
  id: Scalars['ID']['input'];
};


export type QuerydockerNetworksArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerylogFileArgs = {
  lines?: InputMaybe<Scalars['Int']['input']>;
  path: Scalars['String']['input'];
  startLine?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryusersArgs = {
  input?: InputMaybe<usersInput>;
};

export type Registration = {
  __typename?: 'Registration';
  expiration?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  keyFile?: Maybe<KeyFile>;
  state?: Maybe<RegistrationState>;
  type?: Maybe<registrationType>;
  updateExpiration?: Maybe<Scalars['String']['output']>;
};

export enum RegistrationState {
  Basic = 'BASIC',
  /** BLACKLISTED */
  Eblacklisted = 'EBLACKLISTED',
  /** BLACKLISTED */
  Eblacklisted1 = 'EBLACKLISTED1',
  /** BLACKLISTED */
  Eblacklisted2 = 'EBLACKLISTED2',
  /** Trial Expired */
  Eexpired = 'EEXPIRED',
  /** GUID Error */
  Eguid = 'EGUID',
  /** Multiple License Keys Present */
  Eguid1 = 'EGUID1',
  /** Trial Requires Internet Connection */
  Enoconn = 'ENOCONN',
  /** No Flash */
  Enoflash = 'ENOFLASH',
  Enoflash1 = 'ENOFLASH1',
  Enoflash2 = 'ENOFLASH2',
  Enoflash3 = 'ENOFLASH3',
  Enoflash4 = 'ENOFLASH4',
  Enoflash5 = 'ENOFLASH5',
  Enoflash6 = 'ENOFLASH6',
  Enoflash7 = 'ENOFLASH7',
  /** No Keyfile */
  Enokeyfile = 'ENOKEYFILE',
  /** No Keyfile */
  Enokeyfile1 = 'ENOKEYFILE1',
  /** Missing key file */
  Enokeyfile2 = 'ENOKEYFILE2',
  /** Invalid installation */
  Etrial = 'ETRIAL',
  Lifetime = 'LIFETIME',
  Plus = 'PLUS',
  Pro = 'PRO',
  Starter = 'STARTER',
  Trial = 'TRIAL',
  Unleashed = 'UNLEASHED'
}

export type RelayResponse = {
  __typename?: 'RelayResponse';
  error?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  timeout?: Maybe<Scalars['String']['output']>;
};

export type RemoteAccess = {
  __typename?: 'RemoteAccess';
  accessType: WAN_ACCESS_TYPE;
  forwardType?: Maybe<WAN_FORWARD_TYPE>;
  port?: Maybe<Scalars['Port']['output']>;
};

export type RemoveRoleFromApiKeyInput = {
  apiKeyId: Scalars['ID']['input'];
  role: Role;
};

/** Available resources for permissions */
export enum Resource {
  ApiKey = 'api_key',
  Array = 'array',
  Cloud = 'cloud',
  Config = 'config',
  Connect = 'connect',
  ConnectRemoteAccess = 'connect__remote_access',
  Customizations = 'customizations',
  Dashboard = 'dashboard',
  Disk = 'disk',
  Display = 'display',
  Docker = 'docker',
  Flash = 'flash',
  Info = 'info',
  Logs = 'logs',
  Me = 'me',
  Network = 'network',
  Notifications = 'notifications',
  Online = 'online',
  Os = 'os',
  Owner = 'owner',
  Permission = 'permission',
  Registration = 'registration',
  Servers = 'servers',
  Services = 'services',
  Share = 'share',
  Vars = 'vars',
  Vms = 'vms',
  Welcome = 'welcome'
}

/** Available roles for API keys and users */
export enum Role {
  Admin = 'admin',
  Connect = 'connect',
  Guest = 'guest'
}

export type Server = {
  __typename?: 'Server';
  apikey: Scalars['String']['output'];
  guid: Scalars['String']['output'];
  lanip: Scalars['String']['output'];
  localurl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: ProfileModel;
  remoteurl: Scalars['String']['output'];
  status: ServerStatus;
  wanip: Scalars['String']['output'];
};

export enum ServerStatus {
  NeverConnected = 'never_connected',
  Offline = 'offline',
  Online = 'online'
}

export type Service = Node & {
  __typename?: 'Service';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  online?: Maybe<Scalars['Boolean']['output']>;
  uptime?: Maybe<Uptime>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SetupRemoteAccessInput = {
  accessType: WAN_ACCESS_TYPE;
  forwardType?: InputMaybe<WAN_FORWARD_TYPE>;
  port?: InputMaybe<Scalars['Port']['input']>;
};

/** Network Share */
export type Share = {
  __typename?: 'Share';
  allocator?: Maybe<Scalars['String']['output']>;
  cache?: Maybe<Scalars['Boolean']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  /** User comment */
  comment?: Maybe<Scalars['String']['output']>;
  cow?: Maybe<Scalars['String']['output']>;
  /** Disks that're excluded from this share */
  exclude?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  floor?: Maybe<Scalars['String']['output']>;
  /** (KB) Free space */
  free?: Maybe<Scalars['Long']['output']>;
  /** Disks that're included in this share */
  include?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  luksStatus?: Maybe<Scalars['String']['output']>;
  /** Display name */
  name?: Maybe<Scalars['String']['output']>;
  nameOrig?: Maybe<Scalars['String']['output']>;
  /** (KB) Total size */
  size?: Maybe<Scalars['Long']['output']>;
  splitLevel?: Maybe<Scalars['String']['output']>;
  /** (KB) Used Size */
  used?: Maybe<Scalars['Long']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  array: ArrayType;
  config: Config;
  display?: Maybe<Display>;
  dockerContainer: DockerContainer;
  dockerContainers?: Maybe<Array<Maybe<DockerContainer>>>;
  dockerNetwork: DockerNetwork;
  dockerNetworks: Array<Maybe<DockerNetwork>>;
  flash: Flash;
  info: Info;
  /**
   * Subscribe to changes in a log file
   * @param path Path to the log file
   */
  logFile: LogFileContent;
  me?: Maybe<Me>;
  notificationAdded: Notification;
  notificationsOverview: NotificationOverview;
  online: Scalars['Boolean']['output'];
  owner: Owner;
  parityHistory: ParityCheck;
  ping: Scalars['String']['output'];
  registration: Registration;
  server?: Maybe<Server>;
  service?: Maybe<Array<Service>>;
  share: Share;
  shares?: Maybe<Array<Share>>;
  unassignedDevices?: Maybe<Array<UnassignedDevice>>;
  user: User;
  users: Array<Maybe<User>>;
  vars: Vars;
  vms?: Maybe<Vms>;
};


export type SubscriptiondockerContainerArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptiondockerNetworkArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionlogFileArgs = {
  path: Scalars['String']['input'];
};


export type SubscriptionserviceArgs = {
  name: Scalars['String']['input'];
};


export type SubscriptionshareArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
};

export type System = {
  __typename?: 'System';
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  serial?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum Temperature {
  C = 'C',
  F = 'F'
}

export enum Theme {
  White = 'white'
}

export enum URL_TYPE {
  Default = 'DEFAULT',
  Lan = 'LAN',
  Mdns = 'MDNS',
  Other = 'OTHER',
  Wan = 'WAN',
  Wireguard = 'WIREGUARD'
}

export type UnassignedDevice = {
  __typename?: 'UnassignedDevice';
  devlinks?: Maybe<Scalars['String']['output']>;
  devname?: Maybe<Scalars['String']['output']>;
  devpath?: Maybe<Scalars['String']['output']>;
  devtype?: Maybe<Scalars['String']['output']>;
  idAta?: Maybe<Scalars['String']['output']>;
  idAtaDownloadMicrocode?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAam?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAamCurrentValue?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAamEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetAamVendorRecommendedValue?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetApm?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetApmCurrentValue?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetApmEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetHpa?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetHpaEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPm?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPmEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPuis?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetPuisEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurity?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurityEnabled?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurityEnhancedEraseUnitMin?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSecurityEraseUnitMin?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSmart?: Maybe<Scalars['String']['output']>;
  idAtaFeatureSetSmartEnabled?: Maybe<Scalars['String']['output']>;
  idAtaRotationRateRpm?: Maybe<Scalars['String']['output']>;
  idAtaSata?: Maybe<Scalars['String']['output']>;
  idAtaSataSignalRateGen1?: Maybe<Scalars['String']['output']>;
  idAtaSataSignalRateGen2?: Maybe<Scalars['String']['output']>;
  idAtaWriteCache?: Maybe<Scalars['String']['output']>;
  idAtaWriteCacheEnabled?: Maybe<Scalars['String']['output']>;
  idBus?: Maybe<Scalars['String']['output']>;
  idModel?: Maybe<Scalars['String']['output']>;
  idModelEnc?: Maybe<Scalars['String']['output']>;
  idPartTableType?: Maybe<Scalars['String']['output']>;
  idPath?: Maybe<Scalars['String']['output']>;
  idPathTag?: Maybe<Scalars['String']['output']>;
  idRevision?: Maybe<Scalars['String']['output']>;
  idSerial?: Maybe<Scalars['String']['output']>;
  idSerialShort?: Maybe<Scalars['String']['output']>;
  idType?: Maybe<Scalars['String']['output']>;
  idWwn?: Maybe<Scalars['String']['output']>;
  idWwnWithExtension?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  minor?: Maybe<Scalars['String']['output']>;
  mount?: Maybe<Mount>;
  mounted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partitions?: Maybe<Array<Maybe<Partition>>>;
  subsystem?: Maybe<Scalars['String']['output']>;
  temp?: Maybe<Scalars['Int']['output']>;
  usecInitialized?: Maybe<Scalars['String']['output']>;
};

export type Uptime = {
  __typename?: 'Uptime';
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type Usb = {
  __typename?: 'Usb';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

/** A local user account */
export type User = UserAccount & {
  __typename?: 'User';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** A unique name for the user */
  name: Scalars['String']['output'];
  /** If the account has a password set */
  password?: Maybe<Scalars['Boolean']['output']>;
  permissions?: Maybe<Array<Permission>>;
  roles: Array<Role>;
};

export type UserAccount = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  roles: Array<Role>;
};

export type Vars = Node & {
  __typename?: 'Vars';
  bindMgt?: Maybe<Scalars['Boolean']['output']>;
  cacheNumDevices?: Maybe<Scalars['Int']['output']>;
  cacheSbNumDisks?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  configError?: Maybe<ConfigErrorState>;
  configValid?: Maybe<Scalars['Boolean']['output']>;
  csrfToken?: Maybe<Scalars['String']['output']>;
  defaultFormat?: Maybe<Scalars['String']['output']>;
  defaultFsType?: Maybe<Scalars['String']['output']>;
  deviceCount?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  domainLogin?: Maybe<Scalars['String']['output']>;
  domainShort?: Maybe<Scalars['String']['output']>;
  enableFruit?: Maybe<Scalars['String']['output']>;
  flashGuid?: Maybe<Scalars['String']['output']>;
  flashProduct?: Maybe<Scalars['String']['output']>;
  flashVendor?: Maybe<Scalars['String']['output']>;
  /** Percentage from 0 - 100 while upgrading a disk or swapping parity drives */
  fsCopyPrcnt?: Maybe<Scalars['Int']['output']>;
  fsNumMounted?: Maybe<Scalars['Int']['output']>;
  fsNumUnmountable?: Maybe<Scalars['Int']['output']>;
  /** Human friendly string of array events happening */
  fsProgress?: Maybe<Scalars['String']['output']>;
  fsState?: Maybe<Scalars['String']['output']>;
  fsUnmountableMask?: Maybe<Scalars['String']['output']>;
  fuseDirectio?: Maybe<Scalars['String']['output']>;
  fuseDirectioDefault?: Maybe<Scalars['String']['output']>;
  fuseDirectioStatus?: Maybe<Scalars['String']['output']>;
  fuseRemember?: Maybe<Scalars['String']['output']>;
  fuseRememberDefault?: Maybe<Scalars['String']['output']>;
  fuseRememberStatus?: Maybe<Scalars['String']['output']>;
  hideDotFiles?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  joinStatus?: Maybe<Scalars['String']['output']>;
  localMaster?: Maybe<Scalars['Boolean']['output']>;
  localTld?: Maybe<Scalars['String']['output']>;
  luksKeyfile?: Maybe<Scalars['String']['output']>;
  maxArraysz?: Maybe<Scalars['Int']['output']>;
  maxCachesz?: Maybe<Scalars['Int']['output']>;
  mdColor?: Maybe<Scalars['String']['output']>;
  mdNumDisabled?: Maybe<Scalars['Int']['output']>;
  mdNumDisks?: Maybe<Scalars['Int']['output']>;
  mdNumErased?: Maybe<Scalars['Int']['output']>;
  mdNumInvalid?: Maybe<Scalars['Int']['output']>;
  mdNumMissing?: Maybe<Scalars['Int']['output']>;
  mdNumNew?: Maybe<Scalars['Int']['output']>;
  mdNumStripes?: Maybe<Scalars['Int']['output']>;
  mdNumStripesDefault?: Maybe<Scalars['Int']['output']>;
  mdNumStripesStatus?: Maybe<Scalars['String']['output']>;
  mdResync?: Maybe<Scalars['Int']['output']>;
  mdResyncAction?: Maybe<Scalars['String']['output']>;
  mdResyncCorr?: Maybe<Scalars['String']['output']>;
  mdResyncDb?: Maybe<Scalars['String']['output']>;
  mdResyncDt?: Maybe<Scalars['String']['output']>;
  mdResyncPos?: Maybe<Scalars['String']['output']>;
  mdResyncSize?: Maybe<Scalars['Int']['output']>;
  mdState?: Maybe<Scalars['String']['output']>;
  mdSyncThresh?: Maybe<Scalars['Int']['output']>;
  mdSyncThreshDefault?: Maybe<Scalars['Int']['output']>;
  mdSyncThreshStatus?: Maybe<Scalars['String']['output']>;
  mdSyncWindow?: Maybe<Scalars['Int']['output']>;
  mdSyncWindowDefault?: Maybe<Scalars['Int']['output']>;
  mdSyncWindowStatus?: Maybe<Scalars['String']['output']>;
  mdVersion?: Maybe<Scalars['String']['output']>;
  mdWriteMethod?: Maybe<Scalars['Int']['output']>;
  mdWriteMethodDefault?: Maybe<Scalars['String']['output']>;
  mdWriteMethodStatus?: Maybe<Scalars['String']['output']>;
  /** Machine hostname */
  name?: Maybe<Scalars['String']['output']>;
  nrRequests?: Maybe<Scalars['Int']['output']>;
  nrRequestsDefault?: Maybe<Scalars['Int']['output']>;
  nrRequestsStatus?: Maybe<Scalars['String']['output']>;
  /** NTP Server 1 */
  ntpServer1?: Maybe<Scalars['String']['output']>;
  /** NTP Server 2 */
  ntpServer2?: Maybe<Scalars['String']['output']>;
  /** NTP Server 3 */
  ntpServer3?: Maybe<Scalars['String']['output']>;
  /** NTP Server 4 */
  ntpServer4?: Maybe<Scalars['String']['output']>;
  pollAttributes?: Maybe<Scalars['String']['output']>;
  pollAttributesDefault?: Maybe<Scalars['String']['output']>;
  pollAttributesStatus?: Maybe<Scalars['String']['output']>;
  /** Port for the webui via HTTP */
  port?: Maybe<Scalars['Int']['output']>;
  portssh?: Maybe<Scalars['Int']['output']>;
  /** Port for the webui via HTTPS */
  portssl?: Maybe<Scalars['Int']['output']>;
  porttelnet?: Maybe<Scalars['Int']['output']>;
  queueDepth?: Maybe<Scalars['String']['output']>;
  regCheck?: Maybe<Scalars['String']['output']>;
  regFile?: Maybe<Scalars['String']['output']>;
  regGen?: Maybe<Scalars['String']['output']>;
  regGuid?: Maybe<Scalars['String']['output']>;
  regState?: Maybe<RegistrationState>;
  regTm?: Maybe<Scalars['String']['output']>;
  regTm2?: Maybe<Scalars['String']['output']>;
  /** Registration owner */
  regTo?: Maybe<Scalars['String']['output']>;
  regTy?: Maybe<Scalars['String']['output']>;
  safeMode?: Maybe<Scalars['Boolean']['output']>;
  sbClean?: Maybe<Scalars['Boolean']['output']>;
  sbEvents?: Maybe<Scalars['Int']['output']>;
  sbName?: Maybe<Scalars['String']['output']>;
  sbNumDisks?: Maybe<Scalars['Int']['output']>;
  sbState?: Maybe<Scalars['String']['output']>;
  sbSyncErrs?: Maybe<Scalars['Int']['output']>;
  sbSyncExit?: Maybe<Scalars['String']['output']>;
  sbSynced?: Maybe<Scalars['Int']['output']>;
  sbSynced2?: Maybe<Scalars['Int']['output']>;
  sbUpdated?: Maybe<Scalars['String']['output']>;
  sbVersion?: Maybe<Scalars['String']['output']>;
  security?: Maybe<Scalars['String']['output']>;
  /** Total amount shares with AFP enabled */
  shareAfpCount?: Maybe<Scalars['Int']['output']>;
  shareAfpEnabled?: Maybe<Scalars['Boolean']['output']>;
  shareAvahiAfpModel?: Maybe<Scalars['String']['output']>;
  shareAvahiAfpName?: Maybe<Scalars['String']['output']>;
  shareAvahiEnabled?: Maybe<Scalars['Boolean']['output']>;
  shareAvahiSmbModel?: Maybe<Scalars['String']['output']>;
  shareAvahiSmbName?: Maybe<Scalars['String']['output']>;
  shareCacheEnabled?: Maybe<Scalars['Boolean']['output']>;
  shareCacheFloor?: Maybe<Scalars['String']['output']>;
  /** Total amount of user shares */
  shareCount?: Maybe<Scalars['Int']['output']>;
  shareDisk?: Maybe<Scalars['String']['output']>;
  shareInitialGroup?: Maybe<Scalars['String']['output']>;
  shareInitialOwner?: Maybe<Scalars['String']['output']>;
  shareMoverActive?: Maybe<Scalars['Boolean']['output']>;
  shareMoverLogging?: Maybe<Scalars['Boolean']['output']>;
  shareMoverSchedule?: Maybe<Scalars['String']['output']>;
  /** Total amount shares with NFS enabled */
  shareNfsCount?: Maybe<Scalars['Int']['output']>;
  shareNfsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Total amount shares with SMB enabled */
  shareSmbCount?: Maybe<Scalars['Int']['output']>;
  shareSmbEnabled?: Maybe<Scalars['Boolean']['output']>;
  shareUser?: Maybe<Scalars['String']['output']>;
  shareUserExclude?: Maybe<Scalars['String']['output']>;
  shareUserInclude?: Maybe<Scalars['String']['output']>;
  shutdownTimeout?: Maybe<Scalars['Int']['output']>;
  spindownDelay?: Maybe<Scalars['String']['output']>;
  spinupGroups?: Maybe<Scalars['Boolean']['output']>;
  startArray?: Maybe<Scalars['Boolean']['output']>;
  startMode?: Maybe<Scalars['String']['output']>;
  startPage?: Maybe<Scalars['String']['output']>;
  sysArraySlots?: Maybe<Scalars['Int']['output']>;
  sysCacheSlots?: Maybe<Scalars['Int']['output']>;
  sysFlashSlots?: Maybe<Scalars['Int']['output']>;
  sysModel?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  /** Should a NTP server be used for time sync? */
  useNtp?: Maybe<Scalars['Boolean']['output']>;
  useSsh?: Maybe<Scalars['Boolean']['output']>;
  useSsl?: Maybe<Scalars['Boolean']['output']>;
  /** Should telnet be enabled? */
  useTelnet?: Maybe<Scalars['Boolean']['output']>;
  /** Unraid version */
  version?: Maybe<Scalars['String']['output']>;
  workgroup?: Maybe<Scalars['String']['output']>;
};

export type Versions = {
  __typename?: 'Versions';
  apache?: Maybe<Scalars['String']['output']>;
  docker?: Maybe<Scalars['String']['output']>;
  gcc?: Maybe<Scalars['String']['output']>;
  git?: Maybe<Scalars['String']['output']>;
  grunt?: Maybe<Scalars['String']['output']>;
  gulp?: Maybe<Scalars['String']['output']>;
  kernel?: Maybe<Scalars['String']['output']>;
  mongodb?: Maybe<Scalars['String']['output']>;
  mysql?: Maybe<Scalars['String']['output']>;
  nginx?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Scalars['String']['output']>;
  npm?: Maybe<Scalars['String']['output']>;
  openssl?: Maybe<Scalars['String']['output']>;
  perl?: Maybe<Scalars['String']['output']>;
  php?: Maybe<Scalars['String']['output']>;
  pm2?: Maybe<Scalars['String']['output']>;
  postfix?: Maybe<Scalars['String']['output']>;
  postgresql?: Maybe<Scalars['String']['output']>;
  python?: Maybe<Scalars['String']['output']>;
  redis?: Maybe<Scalars['String']['output']>;
  systemOpenssl?: Maybe<Scalars['String']['output']>;
  systemOpensslLib?: Maybe<Scalars['String']['output']>;
  tsc?: Maybe<Scalars['String']['output']>;
  unraid?: Maybe<Scalars['String']['output']>;
  v8?: Maybe<Scalars['String']['output']>;
  yarn?: Maybe<Scalars['String']['output']>;
};

/** A virtual machine */
export type VmDomain = {
  __typename?: 'VmDomain';
  /** A friendly name for the vm */
  name?: Maybe<Scalars['String']['output']>;
  /** Current domain vm state */
  state: VmState;
  uuid: Scalars['ID']['output'];
};

export enum VmState {
  Crashed = 'CRASHED',
  Idle = 'IDLE',
  Nostate = 'NOSTATE',
  Paused = 'PAUSED',
  Pmsuspended = 'PMSUSPENDED',
  Running = 'RUNNING',
  Shutdown = 'SHUTDOWN',
  Shutoff = 'SHUTOFF'
}

export type Vms = {
  __typename?: 'Vms';
  domain?: Maybe<Array<VmDomain>>;
  id: Scalars['ID']['output'];
};

export enum WAN_ACCESS_TYPE {
  Always = 'ALWAYS',
  Disabled = 'DISABLED',
  Dynamic = 'DYNAMIC'
}

export enum WAN_FORWARD_TYPE {
  Static = 'STATIC',
  Upnp = 'UPNP'
}

export type Welcome = {
  __typename?: 'Welcome';
  message: Scalars['String']['output'];
};

export type addUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type arrayDiskInput = {
  /** Disk ID */
  id: Scalars['ID']['input'];
  /** The slot for the disk */
  slot?: InputMaybe<Scalars['Int']['input']>;
};

export type deleteUserInput = {
  name: Scalars['String']['input'];
};

export enum mdState {
  Started = 'STARTED',
  SwapDsbl = 'SWAP_DSBL'
}

export enum registrationType {
  Basic = 'BASIC',
  Invalid = 'INVALID',
  Lifetime = 'LIFETIME',
  Plus = 'PLUS',
  Pro = 'PRO',
  Starter = 'STARTER',
  Trial = 'TRIAL',
  Unleashed = 'UNLEASHED'
}

export type usersInput = {
  slim?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetConnectSettingsFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConnectSettingsFormQuery = { __typename?: 'Query', connect: { __typename?: 'Connect', id: string, settings: { __typename?: 'ConnectSettings', id: string, dataSchema: any, uiSchema: any, values: { __typename?: 'ConnectSettingsValues', sandbox: boolean, extraOrigins: Array<string>, accessType: WAN_ACCESS_TYPE, forwardType?: WAN_FORWARD_TYPE | null, port?: number | null } } } };

export type UpdateConnectSettingsMutationVariables = Exact<{
  input: ApiSettingsInput;
}>;


export type UpdateConnectSettingsMutation = { __typename?: 'Mutation', updateApiSettings: { __typename?: 'ConnectSettingsValues', sandbox: boolean, extraOrigins: Array<string>, accessType: WAN_ACCESS_TYPE, forwardType?: WAN_FORWARD_TYPE | null, port?: number | null } };

export type LogFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type LogFilesQuery = { __typename?: 'Query', logFiles: Array<{ __typename?: 'LogFile', name: string, path: string, size: number, modifiedAt: string }> };

export type LogFileContentQueryVariables = Exact<{
  path: Scalars['String']['input'];
  lines?: InputMaybe<Scalars['Int']['input']>;
  startLine?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LogFileContentQuery = { __typename?: 'Query', logFile: { __typename?: 'LogFileContent', path: string, content: string, totalLines: number, startLine?: number | null } };

export type LogFileSubscriptionSubscriptionVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type LogFileSubscriptionSubscription = { __typename?: 'Subscription', logFile: { __typename?: 'LogFileContent', path: string, content: string, totalLines: number } };

export type NotificationFragmentFragment = { __typename?: 'Notification', id: string, title: string, subject: string, description: string, importance: Importance, link?: string | null, type: NotificationType, timestamp?: string | null, formattedTimestamp?: string | null } & { ' $fragmentName'?: 'NotificationFragmentFragment' };

export type NotificationCountFragmentFragment = { __typename?: 'NotificationCounts', total: number, info: number, warning: number, alert: number } & { ' $fragmentName'?: 'NotificationCountFragmentFragment' };

export type NotificationsQueryVariables = Exact<{
  filter: NotificationFilter;
}>;


export type NotificationsQuery = { __typename?: 'Query', notifications: { __typename?: 'Notifications', id: string, list: Array<(
      { __typename?: 'Notification' }
      & { ' $fragmentRefs'?: { 'NotificationFragmentFragment': NotificationFragmentFragment } }
    )> } };

export type ArchiveNotificationMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ArchiveNotificationMutation = { __typename?: 'Mutation', archiveNotification: (
    { __typename?: 'Notification' }
    & { ' $fragmentRefs'?: { 'NotificationFragmentFragment': NotificationFragmentFragment } }
  ) };

export type ArchiveAllNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type ArchiveAllNotificationsMutation = { __typename?: 'Mutation', archiveAll: { __typename?: 'NotificationOverview', unread: { __typename?: 'NotificationCounts', total: number }, archive: { __typename?: 'NotificationCounts', info: number, warning: number, alert: number, total: number } } };

export type DeleteNotificationMutationVariables = Exact<{
  id: Scalars['String']['input'];
  type: NotificationType;
}>;


export type DeleteNotificationMutation = { __typename?: 'Mutation', deleteNotification: { __typename?: 'NotificationOverview', archive: { __typename?: 'NotificationCounts', total: number } } };

export type DeleteAllNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllNotificationsMutation = { __typename?: 'Mutation', deleteArchivedNotifications: { __typename?: 'NotificationOverview', archive: { __typename?: 'NotificationCounts', total: number }, unread: { __typename?: 'NotificationCounts', total: number } } };

export type OverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type OverviewQuery = { __typename?: 'Query', notifications: { __typename?: 'Notifications', id: string, overview: { __typename?: 'NotificationOverview', unread: { __typename?: 'NotificationCounts', info: number, warning: number, alert: number, total: number }, archive: { __typename?: 'NotificationCounts', total: number } } } };

export type RecomputeOverviewMutationVariables = Exact<{ [key: string]: never; }>;


export type RecomputeOverviewMutation = { __typename?: 'Mutation', recalculateOverview: { __typename?: 'NotificationOverview', archive: (
      { __typename?: 'NotificationCounts' }
      & { ' $fragmentRefs'?: { 'NotificationCountFragmentFragment': NotificationCountFragmentFragment } }
    ), unread: (
      { __typename?: 'NotificationCounts' }
      & { ' $fragmentRefs'?: { 'NotificationCountFragmentFragment': NotificationCountFragmentFragment } }
    ) } };

export type NotificationAddedSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NotificationAddedSubSubscription = { __typename?: 'Subscription', notificationAdded: (
    { __typename?: 'Notification' }
    & { ' $fragmentRefs'?: { 'NotificationFragmentFragment': NotificationFragmentFragment } }
  ) };

export type NotificationOverviewSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NotificationOverviewSubSubscription = { __typename?: 'Subscription', notificationsOverview: { __typename?: 'NotificationOverview', archive: (
      { __typename?: 'NotificationCounts' }
      & { ' $fragmentRefs'?: { 'NotificationCountFragmentFragment': NotificationCountFragmentFragment } }
    ), unread: (
      { __typename?: 'NotificationCounts' }
      & { ' $fragmentRefs'?: { 'NotificationCountFragmentFragment': NotificationCountFragmentFragment } }
    ) } };

export type ConnectSignInMutationVariables = Exact<{
  input: ConnectSignInInput;
}>;


export type ConnectSignInMutation = { __typename?: 'Mutation', connectSignIn: boolean };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', connectSignOut: boolean };

export type PartialCloudFragment = { __typename?: 'Cloud', error?: string | null, apiKey: { __typename?: 'ApiKeyResponse', valid: boolean, error?: string | null }, cloud: { __typename?: 'CloudResponse', status: string, error?: string | null }, minigraphql: { __typename?: 'MinigraphqlResponse', status: MinigraphStatus, error?: string | null }, relay?: { __typename?: 'RelayResponse', status: string, error?: string | null } | null } & { ' $fragmentName'?: 'PartialCloudFragment' };

export type serverStateQueryVariables = Exact<{ [key: string]: never; }>;


export type serverStateQuery = { __typename?: 'Query', cloud?: (
    { __typename?: 'Cloud' }
    & { ' $fragmentRefs'?: { 'PartialCloudFragment': PartialCloudFragment } }
  ) | null, config: { __typename?: 'Config', error?: ConfigErrorState | null, valid?: boolean | null }, info?: { __typename?: 'Info', os?: { __typename?: 'Os', hostname?: string | null } | null } | null, owner?: { __typename?: 'Owner', avatar?: string | null, username?: string | null } | null, registration?: { __typename?: 'Registration', state?: RegistrationState | null, expiration?: string | null, updateExpiration?: string | null, keyFile?: { __typename?: 'KeyFile', contents?: string | null } | null } | null, vars?: { __typename?: 'Vars', regGen?: string | null, regState?: RegistrationState | null, configError?: ConfigErrorState | null, configValid?: boolean | null } | null };

export type getExtraAllowedOriginsQueryVariables = Exact<{ [key: string]: never; }>;


export type getExtraAllowedOriginsQuery = { __typename?: 'Query', extraAllowedOrigins: Array<string> };

export type getRemoteAccessQueryVariables = Exact<{ [key: string]: never; }>;


export type getRemoteAccessQuery = { __typename?: 'Query', remoteAccess: { __typename?: 'RemoteAccess', accessType: WAN_ACCESS_TYPE, forwardType?: WAN_FORWARD_TYPE | null, port?: number | null } };

export type setAdditionalAllowedOriginsMutationVariables = Exact<{
  input: AllowedOriginInput;
}>;


export type setAdditionalAllowedOriginsMutation = { __typename?: 'Mutation', setAdditionalAllowedOrigins: Array<string> };

export type setupRemoteAccessMutationVariables = Exact<{
  input: SetupRemoteAccessInput;
}>;


export type setupRemoteAccessMutation = { __typename?: 'Mutation', setupRemoteAccess: boolean };

export const NotificationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Notification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"importance"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"formattedTimestamp"}}]}}]} as unknown as DocumentNode<NotificationFragmentFragment, unknown>;
export const NotificationCountFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCountFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCounts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"warning"}},{"kind":"Field","name":{"kind":"Name","value":"alert"}}]}}]} as unknown as DocumentNode<NotificationCountFragmentFragment, unknown>;
export const PartialCloudFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartialCloud"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cloud"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"apiKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valid"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cloud"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minigraphql"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<PartialCloudFragment, unknown>;
export const GetConnectSettingsFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetConnectSettingsForm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connect"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dataSchema"}},{"kind":"Field","name":{"kind":"Name","value":"uiSchema"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sandbox"}},{"kind":"Field","name":{"kind":"Name","value":"extraOrigins"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"forwardType"}},{"kind":"Field","name":{"kind":"Name","value":"port"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetConnectSettingsFormQuery, GetConnectSettingsFormQueryVariables>;
export const UpdateConnectSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateConnectSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApiSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateApiSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sandbox"}},{"kind":"Field","name":{"kind":"Name","value":"extraOrigins"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"forwardType"}},{"kind":"Field","name":{"kind":"Name","value":"port"}}]}}]}}]} as unknown as DocumentNode<UpdateConnectSettingsMutation, UpdateConnectSettingsMutationVariables>;
export const LogFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LogFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}}]} as unknown as DocumentNode<LogFilesQuery, LogFilesQueryVariables>;
export const LogFileContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LogFileContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lines"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startLine"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"lines"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lines"}}},{"kind":"Argument","name":{"kind":"Name","value":"startLine"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startLine"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}},{"kind":"Field","name":{"kind":"Name","value":"startLine"}}]}}]}}]} as unknown as DocumentNode<LogFileContentQuery, LogFileContentQueryVariables>;
export const LogFileSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"LogFileSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}}]}}]}}]} as unknown as DocumentNode<LogFileSubscriptionSubscription, LogFileSubscriptionSubscriptionVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Notification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"importance"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"formattedTimestamp"}}]}}]} as unknown as DocumentNode<NotificationsQuery, NotificationsQueryVariables>;
export const ArchiveNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ArchiveNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archiveNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Notification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"importance"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"formattedTimestamp"}}]}}]} as unknown as DocumentNode<ArchiveNotificationMutation, ArchiveNotificationMutationVariables>;
export const ArchiveAllNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ArchiveAllNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archiveAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"warning"}},{"kind":"Field","name":{"kind":"Name","value":"alert"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<ArchiveAllNotificationsMutation, ArchiveAllNotificationsMutationVariables>;
export const DeleteNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteNotificationMutation, DeleteNotificationMutationVariables>;
export const DeleteAllNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAllNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArchivedNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteAllNotificationsMutation, DeleteAllNotificationsMutationVariables>;
export const OverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Overview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"overview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"warning"}},{"kind":"Field","name":{"kind":"Name","value":"alert"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OverviewQuery, OverviewQueryVariables>;
export const RecomputeOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RecomputeOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recalculateOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCountFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCountFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCountFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCounts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"warning"}},{"kind":"Field","name":{"kind":"Name","value":"alert"}}]}}]} as unknown as DocumentNode<RecomputeOverviewMutation, RecomputeOverviewMutationVariables>;
export const NotificationAddedSubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NotificationAddedSub"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Notification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"importance"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"formattedTimestamp"}}]}}]} as unknown as DocumentNode<NotificationAddedSubSubscription, NotificationAddedSubSubscriptionVariables>;
export const NotificationOverviewSubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NotificationOverviewSub"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationsOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCountFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotificationCountFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotificationCountFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCounts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"warning"}},{"kind":"Field","name":{"kind":"Name","value":"alert"}}]}}]} as unknown as DocumentNode<NotificationOverviewSubSubscription, NotificationOverviewSubSubscriptionVariables>;
export const ConnectSignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConnectSignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectSignIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ConnectSignInMutation, ConnectSignInMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectSignOut"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const serverStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"serverState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloud"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartialCloud"}}]}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"valid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"os"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hostname"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"registration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"expiration"}},{"kind":"Field","name":{"kind":"Name","value":"keyFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contents"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updateExpiration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regGen"}},{"kind":"Field","name":{"kind":"Name","value":"regState"}},{"kind":"Field","name":{"kind":"Name","value":"configError"}},{"kind":"Field","name":{"kind":"Name","value":"configValid"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartialCloud"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cloud"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"apiKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valid"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cloud"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minigraphql"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<serverStateQuery, serverStateQueryVariables>;
export const getExtraAllowedOriginsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getExtraAllowedOrigins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extraAllowedOrigins"}}]}}]} as unknown as DocumentNode<getExtraAllowedOriginsQuery, getExtraAllowedOriginsQueryVariables>;
export const getRemoteAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRemoteAccess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"remoteAccess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"forwardType"}},{"kind":"Field","name":{"kind":"Name","value":"port"}}]}}]}}]} as unknown as DocumentNode<getRemoteAccessQuery, getRemoteAccessQueryVariables>;
export const setAdditionalAllowedOriginsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAdditionalAllowedOrigins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AllowedOriginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAdditionalAllowedOrigins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<setAdditionalAllowedOriginsMutation, setAdditionalAllowedOriginsMutationVariables>;
export const setupRemoteAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setupRemoteAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetupRemoteAccessInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setupRemoteAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<setupRemoteAccessMutation, setupRemoteAccessMutationVariables>;