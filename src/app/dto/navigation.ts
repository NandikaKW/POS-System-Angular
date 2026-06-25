export interface NavLinkDTO {
  label: string;
  url: string;
}

export interface NavColumnDTO {
  title: string;
  links: NavLinkDTO[];
}
