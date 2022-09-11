export type TResponse = {
  status: string;
  data: any;
  error?: {
    code: number;
    message: string;
  };
};
