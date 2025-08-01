type Job = {
  id: string;
  date: string;
  title: string;
  company: Company;
  description: string;
}

type Company = {
  id: string;
  name: string;
  description: string;
  jobs: Job[];
}

type Jobs = {
  items: Job[];
  totalCount: number;
}

type User = {
  id: string | undefined;
  email: string | undefined;
}