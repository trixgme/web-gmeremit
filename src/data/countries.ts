export interface CountryConfig {
  code: string;
  countryCode: string;
  countryName: string;
  flag: string;
}

export const countryConfigs: CountryConfig[] = [
  // 아시아
  { code: "NPR", countryCode: "NP", countryName: "Nepal", flag: "🇳🇵" },
  { code: "PHP", countryCode: "PH", countryName: "Philippines", flag: "🇵🇭" },
  { code: "VND", countryCode: "VN", countryName: "Vietnam", flag: "🇻🇳" },
  { code: "IDR", countryCode: "ID", countryName: "Indonesia", flag: "🇮🇩" },
  { code: "THB", countryCode: "TH", countryName: "Thailand", flag: "🇹🇭" },
  { code: "MMK", countryCode: "MM", countryName: "Myanmar", flag: "🇲🇲" },
  { code: "BDT", countryCode: "BD", countryName: "Bangladesh", flag: "🇧🇩" },
  { code: "INR", countryCode: "IN", countryName: "India", flag: "🇮🇳" },
  { code: "PKR", countryCode: "PK", countryName: "Pakistan", flag: "🇵🇰" },
  { code: "LKR", countryCode: "LK", countryName: "Sri Lanka", flag: "🇱🇰" },
  { code: "CNY", countryCode: "CN", countryName: "China", flag: "🇨🇳" },
  { code: "JPY", countryCode: "JP", countryName: "Japan", flag: "🇯🇵" },
  { code: "MYR", countryCode: "MY", countryName: "Malaysia", flag: "🇲🇾" },
  { code: "SGD", countryCode: "SG", countryName: "Singapore", flag: "🇸🇬" },
  // 북미 · 남미
  { code: "USD", countryCode: "US", countryName: "United States", flag: "🇺🇸" },
  { code: "CAD", countryCode: "CA", countryName: "Canada", flag: "🇨🇦" },
  { code: "MXN", countryCode: "MX", countryName: "Mexico", flag: "🇲🇽" },
  { code: "BRL", countryCode: "BR", countryName: "Brazil", flag: "🇧🇷" },
  { code: "COP", countryCode: "CO", countryName: "Colombia", flag: "🇨🇴" },
  { code: "PEN", countryCode: "PE", countryName: "Peru", flag: "🇵🇪" },
  // 유럽 · 오세아니아
  { code: "GBP", countryCode: "GB", countryName: "United Kingdom", flag: "🇬🇧" },
  { code: "EUR", countryCode: "DE", countryName: "Germany", flag: "🇩🇪" },
  { code: "AUD", countryCode: "AU", countryName: "Australia", flag: "🇦🇺" },
  // 아프리카
  { code: "NGN", countryCode: "NG", countryName: "Nigeria", flag: "🇳🇬" },
  { code: "GHS", countryCode: "GH", countryName: "Ghana", flag: "🇬🇭" },
  { code: "KES", countryCode: "KE", countryName: "Kenya", flag: "🇰🇪" },
];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = [
  { code: "NP", flag: "🇳🇵" },
  { code: "PH", flag: "🇵🇭" },
  { code: "VN", flag: "🇻🇳" },
  { code: "ID", flag: "🇮🇩" },
  { code: "TH", flag: "🇹🇭" },
  { code: "MM", flag: "🇲🇲" },
  { code: "BD", flag: "🇧🇩" },
  { code: "IN", flag: "🇮🇳" },
  { code: "PK", flag: "🇵🇰" },
  { code: "LK", flag: "🇱🇰" },
  { code: "CN", flag: "🇨🇳" },
  { code: "JP", flag: "🇯🇵" },
  { code: "MY", flag: "🇲🇾" },
  { code: "SG", flag: "🇸🇬" },
  { code: "US", flag: "🇺🇸" },
  { code: "CA", flag: "🇨🇦" },
  { code: "MX", flag: "🇲🇽" },
  { code: "BR", flag: "🇧🇷" },
  { code: "CO", flag: "🇨🇴" },
  { code: "PE", flag: "🇵🇪" },
  { code: "GB", flag: "🇬🇧" },
  { code: "DE", flag: "🇩🇪" },
  { code: "AU", flag: "🇦🇺" },
  { code: "NG", flag: "🇳🇬" },
  { code: "GH", flag: "🇬🇭" },
  { code: "KE", flag: "🇰🇪" },
];
