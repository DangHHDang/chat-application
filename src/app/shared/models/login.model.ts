export interface LOGIN {
  token: string,
  user: USER
} 
export interface USER {
  email: string
  id: number,
  role: number
} 