import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

interface CountryCodeAttributes {
  code: string;
}

class CountryCode extends Model implements CountryCodeAttributes {
  static table = "country_codes";

  @field("code") code!: string;
}

export default CountryCode;
export type { CountryCodeAttributes };
