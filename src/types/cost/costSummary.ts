interface CostSummary {
  kakaoId: number;
  date: string;
  amount: number;
  description: string;
  note?: string;
}

export default CostSummary;