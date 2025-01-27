export interface User {
    id: string;
    username: string;
    email: string;
    token?: string;
  }
  
  export interface ProblemTemplate {
    name: string;
    statement: string;
    input: string;
    output: string;
    sample_input: string;
    sample_output: string;
    notes: string;
  }
  
  export interface SolutionTemplate {
    solution: string;
  }