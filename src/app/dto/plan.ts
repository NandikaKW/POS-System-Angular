export interface PlanFeatureDTO {
  text: string;
  included: boolean;
}

export interface PlanDTO {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular: boolean;
  ctaLabel: string;
  iconBg: string;
  iconPath: string;
  features: PlanFeatureDTO[];
}
