export interface NavItem {
  label: string;
  href: string;
}

export interface NavLinkProps extends NavItem{
  active: boolean;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}