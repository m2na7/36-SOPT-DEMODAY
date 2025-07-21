export interface Product {
  readonly id: number;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly introduction: string;
  readonly logoUrl: string;
  readonly thumbnailUrl?: string;
  readonly mainImageUrl: string;
  readonly descriptionImageUrl: readonly string[];
  readonly service: string;
  readonly members: {
    readonly PLAN?: readonly string[];
    readonly DESIGN?: readonly string[];
    readonly ANDROID?: readonly string[];
    readonly iOS?: readonly string[];
    readonly SERVER?: readonly string[];
    readonly WEB?: readonly string[];
  };
}
