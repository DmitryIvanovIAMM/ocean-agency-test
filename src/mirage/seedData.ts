import { User } from '../models/User';
import { LoginAudit } from '../models/LoginAudit';

export const USERS: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    password: 'Password123',
    email: 'test.email.1@email.com',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    password: 'password123',
    email: 'test.email.1@email.com',
  },
  {
    id: '3',
    firstName: 'Alice',
    lastName: 'Smith',
    password: 'password123',
    email: 'test.email.3@email.com',
  },
  {
    id: '4',
    firstName: 'Bob',
    lastName: 'Johnson',
    password: 'password123',
    email: 'test.email.4@email.com',
  },
  {
    id: '5',
    firstName: 'Charlie',
    lastName: 'Brown',
    password: 'password123',
    email: 'test.email.5@email.com',
  },
  {
    id: '6',
    firstName: 'David',
    lastName: 'Wilson',
    password: 'password123',
    email: 'test.email.6@email.com',
  },
  {
    id: '7',
    firstName: 'Eve',
    lastName: 'Davis',
    password: 'password123',
    email: 'test.email.7@email.com',
  },
  {
    id: '8',
    firstName: 'Frank',
    lastName: 'Garcia',
    password: 'password123',
    email: 'test.email8@email.com',
  },
  {
    id: '9',
    firstName: 'Grace',
    lastName: 'Martinez',
    password: 'password123',
    email: 'test.email.9@email.com',
  },
  {
    id: '10',
    firstName: 'Hank',
    lastName: 'Lopez',
    password: 'password123',
    email: 'test.email.10@email.com',
  },
];

export const LOGIN_AUDITS: LoginAudit[] = [
  {
    id: '1',
    userId: '1',
    loginTime: new Date('2023-10-01T10:00:00Z'),
    ipAddress: '106.247.111.170', // https://www.browserling.com/tools/random-ip
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '2',
    userId: '2',
    loginTime: new Date('2023-10-01T11:00:00Z'),
    ipAddress: '42.138.95.188',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '3',
    userId: '3',
    loginTime: new Date('2023-10-01T12:00:00Z'),
    ipAddress: '97.127.126.66',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '4',
    userId: '4',
    loginTime: new Date('2023-10-01T13:00:00Z'),
    ipAddress: '22.199.16.186',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '5',
    userId: '5',
    loginTime: new Date('2023-10-01T14:00:00Z'),
    ipAddress: '176.167.69.142',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '6',
    userId: '6',
    loginTime: new Date('2023-10-01T15:00:00Z'),
    ipAddress: '169.195.223.140',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '7',
    userId: '7',
    loginTime: new Date('2023-10-01T16:00:00Z'),
    ipAddress: '227.37.73.138',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '8',
    userId: '8',
    loginTime: new Date('2023-10-01T17:00:00Z'),
    ipAddress: '56.166.68.228',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '9',
    userId: '9',
    loginTime: new Date('2023-10-01T18:00:00Z'),
    ipAddress: '114.213.9.82',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '10',
    userId: '10',
    loginTime: new Date('2023-10-01T19:00:00Z'),
    ipAddress: '16.144.118.15',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  // generate 10 more login audits with random data, successful/unsuccessful for user= with id-=1
  {
    id: '11',
    userId: '1',
    loginTime: new Date('2023-10-02T10:00:00Z'),
    ipAddress: '222.24.115.40',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: false,
    errorMessage: 'Invalid password',
  },
  {
    id: '12',
    userId: '1',
    loginTime: new Date('2023-10-02T11:00:00Z'),
    ipAddress: '222.24.115.40',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '13',
    userId: '1',
    loginTime: new Date('2023-10-02T12:00:00Z'),
    ipAddress: '194.157.154.220',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '14',
    userId: '1',
    loginTime: new Date('2023-10-02T13:00:00Z'),
    ipAddress: '16.57.24.25',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '15',
    userId: '1',
    loginTime: new Date('2023-10-02T14:00:00Z'),
    ipAddress: '16.57.24.2516.57.24.25',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '16',
    userId: '1',
    loginTime: new Date('2023-10-02T15:00:00Z'),
    ipAddress: '16.57.24.2516.57.24.25',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '17',
    userId: '1',
    loginTime: new Date('2023-10-02T16:00:00Z'),
    ipAddress: '16.57.24.2516.57.24.25',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '18',
    userId: '1',
    loginTime: new Date('2023-10-02T17:00:00Z'),
    ipAddress: '16.57.24.25',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: true,
    errorMessage: undefined,
  },
  {
    id: '19',
    userId: '1',
    loginTime: new Date('2023-10-02T18:00:00Z'),
    ipAddress: '16.57.24.25',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: false,
    errorMessage: 'Account locked due to multiple failed attempts',
  },
  {
    id: '20',
    userId: '1',
    loginTime: new Date('2023-10-02T19:00:00Z'),
    ipAddress: '90.201.165.16',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    success: false,
    errorMessage: 'Invalid password',
  },
];
